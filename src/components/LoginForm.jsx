"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!res.ok) {
        router.push("/");
      } else {
        router.push("/dashboard");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Login to your advocate portal</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="advocate@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          {/* Mail the password to the E-Mail */}
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black ${
            loading ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
