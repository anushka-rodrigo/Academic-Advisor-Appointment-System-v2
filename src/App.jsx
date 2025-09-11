import { Routes, Route } from "react-router-dom";
import StudentLogin from "/src/pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import AdvisorLogin from "./pages/AdvisorLogin";
import AdvisorSignup from "./pages/AdvisorSignup"; // Assuming you have an AdvisorSignup component

function App() {
  return (
    <Routes>
      {/* ✅ This will be the homepage */}
      <Route path="/" element={<StudentLogin />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-signup" element={<StudentSignup />} />
      <Route path="/advisor-login" element={<AdvisorLogin />} />
      <Route path="/advisor-signup" element={<AdvisorSignup />} />
      {/* Add more routes as needed */}
      {/* Example: <Route path="/dashboard" element={<Dashboard />} /> */}

    </Routes>
  );
}

export default App;
