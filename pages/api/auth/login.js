import supabase from '../../../utils/supabase/config';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    if (!data.user) {
      return res.status(400).json({ error: 'User not found or incorrect credentials' });
    }

    if (data.user && !data.user.user_metadata.email_verified) {
      return res.status(200).json({
        message: 'Please Verify Your Email',
        user: data.user,
      });
    }

    return res.status(200).json({
      message: 'Login Successful',
      user: data.user,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
