"use client";

import MainLayout from "../components/layout.jsx";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // You can later send this data to Supabase here
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center h-screen px-10 relative z-10">
        <div className="bg-zinc-800 p-10 rounded-xl shadow-xl max-w-md w-full space-y-6">
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-600 hover:bg-zinc-500 transition px-4 py-2 rounded-lg text-white font-semibold"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center text-zinc-400">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-zinc-200 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}