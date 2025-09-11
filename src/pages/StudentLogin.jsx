import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { studentLogin } from "../api";

const StudentLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await studentLogin(email, password);
            if (res.success) {
                localStorage.setItem("token", res.token);
                navigate("/student-dashboard");
            } else {
                setErrorMsg(res.message || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            setErrorMsg("Something went wrong.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Left Panel */}
                <div className="lg:w-1/2 w-full h-64 lg:h-auto bg-[#E6F0FF] flex items-center justify-center">
                    <img
                        src="/src/img/10473220.jpg"
                        alt="Books"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Panel */}
                <div className="lg:w-1/2 w-full p-6 sm:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-center mt-4 mb-6 text-gray-800">
                        Student Login
                    </h2>

                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        {errorMsg && (
                            <p className="text-sm text-red-500 mb-3">{errorMsg}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account?{" "}
                        <Link to="/student-signup" className="text-blue-600 font-bold">
                            Sign Up
                        </Link>
                    </p>

                    <p className="text-center text-sm mt-2">
                        <Link to="/advisor-login" className="text-blue-600 font-bold">
                            Login as a tutor
                        </Link>
                    </p>

                    <img
                        src="/src/img/10613101_10088.jpg"
                        alt="Illustration"
                        className="w-full mt-0 rounded-lg"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;