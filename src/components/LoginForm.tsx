"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setError("Supabase credentials are not configured yet.");
      setLoading(false);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.replace("/admin");
    router.refresh();
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20 sm:py-28">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 sm:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F69F11] font-semibold">
            Secure Access
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Login to Admin Dashboard
          </h1>
          <p className="mt-3 text-gray-600">
            Use your Supabase email and password to access blog management.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Username / Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              placeholder="you@example.com"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#F69F11] px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
