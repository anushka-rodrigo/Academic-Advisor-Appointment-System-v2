import axios from "axios";

// Base URL of your Spring Boot backend
const BASE_URL = "http://localhost:5173/api"; // Change to your real backend address

// Student Login
export const studentLogin = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/students/login`, {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    console.error("Student login error:", err);
    return { success: false, message: "Login failed" };
  }
};

// Student Signup
export const studentSignup = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/students/signup`, formData);
    return res.data;
  } catch (err) {
    console.error("Student signup error:", err);
    return { success: false, message: "Signup failed" };
  }
};

// Advisor Login
export const advisorLogin = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/advisors/login`, {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    console.error("Advisor login error:", err);
    return { success: false, message: "Login failed" };
  }
};

// Advisor Signup
export const advisorSignup = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/advisors/signup`, formData);
    return res.data;
  } catch (err) {
    console.error("Advisor signup error:", err);
    return { success: false, message: "Signup failed" };
  }
};
