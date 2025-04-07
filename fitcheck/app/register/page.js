"use client";

import MainLayout from "../components/layout.jsx";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center h-screen px-10 relative z-10">
        <div className="bg-zinc-800 p-10 rounded-xl shadow-xl max-w-md w-full space-y-6">
          <h1 className="text-4xl font-bold text-center">Register</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-600 hover:bg-zinc-500 transition px-4 py-2 rounded-lg text-white font-semibold"
            >
              Create Account
            </button>
          </form>
          <p className="text-sm text-center text-zinc-400">
            Already have an account?{' '}
            <Link href="/login" className="text-zinc-200 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
