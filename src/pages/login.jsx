import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false }); // Error state
  const navigate = useNavigate();

  function SignIn() {
    let newError = { email: email === "", password: password === "" };

    if (newError.email || newError.password) {
      setError(newError);
      return;
    }

    // Clear errors on successful validation
    setError({ email: false, password: false });

    navigate("/dashboard"); // Redirect to dashboard
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4 w-16 h-16 ml-32">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Sign in Title */}
        <h2 className="text-gray-900 font-bold text-lg mb-4">
          Sign in to your account
        </h2>

        {/* Google Sign-in Button */}
        <button className="w-full flex items-center justify-center relative bg-teal-200 text-black font-semibold py-2 rounded-lg shadow-md hover:bg-green-400">
          <img
            src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            alt="Google"
            className="h-5 w-5 absolute left-3"
          />
          <p>Sign in with Google</p>
        </button>

        <p className="text-gray-500 text-sm my-3">or continue with email</p>

        {/* Email Input */}
        <p className="text-left text-gray-500 mb-2">Email Address</p>
        <input
          type="email"
          placeholder="your@email.com"
          className={`w-full p-2 border rounded-md mb-1 focus:ring-2 focus:ring-green-300 ${
            error.email ? "border-red-500" : "border-gray-300"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p className="text-left text-red-500 text-sm">Please enter your email</p>}

        {/* Password Input */}
        <p className="text-left text-gray-500 mt-3 mb-2">Password</p>
        <input
          type="password"
          placeholder="Password"
          className={`w-full p-2 border rounded-md mb-1 focus:ring-2 focus:ring-green-300 ${
            error.password ? "border-red-500" : "border-gray-300"
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p className="text-left text-red-500 text-sm">Please enter your password</p>}

        {/* Forgot Password */}
        <div className="text-left text-sm text-gray-500 mt-2 mb-3 cursor-pointer hover:underline">
          Password forgotten?
        </div>

        {/* Sign In Button */}
        <button
          className="w-full bg-teal-200 text-black py-2 rounded-md font-semibold hover:bg-green-400"
          onClick={SignIn}
        >
          SIGN IN
        </button>

        {/* Sign Up Link */}
        <p className="text-gray-900 text-sm mt-3">
          Do not have an account yet?{" "}
          <Link to="/login" className="text-teal-600 cursor-pointer hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
