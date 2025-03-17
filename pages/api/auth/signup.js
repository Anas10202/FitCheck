import supabase from '../../../utils/supabase/config';

export async function handler(req, res) {
  if (req.method==='POST') {
    const { email, password } = req.body;

    const { user, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ message:'Please Verify Your email' });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}

export default handler;
