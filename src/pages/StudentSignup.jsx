import { useState } from "react";
import { Link } from "react-router-dom";

function StudentSignup() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/api/students/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Signup successful!");
                // Redirect or reset form
            } else {
                const err = await res.json();
                alert(err.message || "Signup failed.");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("An error occurred.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex w-[1000px] h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Left Panel */}
                <div className="w-1/2 bg-[#E6F0FF] flex justify-center items-center">
                    <img src="/src/img/10473220.jpg" alt="Books" className="w-full h-full object-cover" />
                </div>

                {/* Right Panel */}
                <div className="w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-center text-2xl font-semibold text-gray-800 mt-10 mb-5">
                        Student Sign Up
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-sm"
                        />
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/student-login" className="text-blue-600 font-semibold">
                            Log In
                        </Link>
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-2">
                        <Link to="/advisor-signup" className="text-blue-600 font-semibold">
                            Register as a tutor
                        </Link>
                    </p>
                    <img
                        src="/src/img/10613101_10088.jpg"
                        alt="Illustration"
                        className="w-[60%] self-center mt-3 mb-1"
                    />
                </div>
            </div>
        </div>
    );
}

export default StudentSignup;
