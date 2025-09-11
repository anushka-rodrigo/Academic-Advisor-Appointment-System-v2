import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { advisorSignup } from "../api"; // Replace with actual API call

const AdvisorSignup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { fullName, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            return setErrorMsg("Passwords do not match.");
        }

        try {
            const res = await advisorSignup(fullName, email, password);
            if (res.success) {
                navigate("/advisor-login");
            } else {
                setErrorMsg(res.message || "Signup failed");
            }
        } catch (err) {
            console.error("Signup error:", err);
            setErrorMsg("Something went wrong.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Left Panel */}
                <div className="lg:w-1/2 w-full h-64 lg:h-auto bg-[#E6F0FF] flex items-center justify-center">
                    <img
                        src="/src/img/15635306_5643423.jpg"
                        alt="Advisor"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Panel */}
                <div className="lg:w-1/2 w-full p-6 sm:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-center mt-4 mb-6 text-gray-800">
                        Advisor Sign Up
                    </h2>

                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            required
                            onChange={handleChange}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            required
                            onChange={handleChange}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            required
                            onChange={handleChange}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            required
                            onChange={handleChange}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        {errorMsg && (
                            <p className="text-sm text-red-500 mb-3">{errorMsg}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/advisor-login" className="text-blue-600 font-bold">
                            Log In
                        </Link>
                    </p>

                    <p className="text-center text-sm mt-2">
                        <Link to="/student-signup" className="text-blue-600 font-bold">
                            Sign up as a student
                        </Link>
                    </p>

                    <img
                        src="/src/img/8449776_3907915.jpg"
                        alt="Illustration"
                        className="w-full mt-0 rounded-lg"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdvisorSignup;
