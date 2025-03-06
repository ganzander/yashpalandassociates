import LoginForm from "@/components/LoginForm";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Decorative */}
      <div className="bg-black md:w-1/2 p-8 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Advocate Portal</h1>
          <p className="text-xl">Justice Through Knowledge</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="bg-gray-100 md:w-1/2 flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}
