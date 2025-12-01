"use client";
import { useState } from "react";
import Link from "next/link";
import "./style.css";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    country: "",
    age: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmpassword, country, age, terms } = formData;

    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    } else if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    } else if (country === "") {
      alert("Please select your country.");
      return;
    } else if (age < 18) {
      alert("You must be at least 18 years old to register.");
      return;
    } else if (terms === false) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }

    alert("Form submitted successfully!");
    // Reset form or redirect
  };

  return (
    <div className="form-container">
      <h1>Registration</h1>
      <form id="form" onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            placeholder="********"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="form-input"
            placeholder="********"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select your country</option>
            <option value="argentina">Argentina</option>
            <option value="brazil">Brazil</option>
            <option value="chile">Chile</option>
            <option value="colombia">Colombia</option>
            <option value="mexico">Mexico</option>
            <option value="peru">Peru</option>
            <option value="uruguay">Uruguay</option>
            <option value="usa">USA</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-input"
            placeholder="18"
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>

        <button type="submit" id="boton" className="submit-btn">
          Register
        </button>
      </form>
      <Link href="/" className="submit-btn" style={{ textAlign: "center", textDecoration: "none", display: "block", marginTop: "20px", width: "100%" }}>
        Back to Home
      </Link>
    </div>
  );
}
