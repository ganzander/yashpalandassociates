"use client";
import axios from "axios";
import { useState } from "react";

export default function AddAdvocate() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    region_of_practice: "",
    court_type: "",
    contact: "",
    mail: "",
    experience: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await axios.post("/api/add-advocates", formData);
      if (response.statusText === "OK") {
        setMessage({ text: "Advocate added successfully!", type: "success" });
        setFormData({
          name: "",
          region_of_practice: "",
          court_type: "",
          contact: "",
          mail: "",
          experience: "",
        });
      } else {
        setMessage({
          text: "Failed to add advocate",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({ text: "An error occurred", type: "error" });
      console.error("Error adding advocate:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 md:mb-6">Add New Advocate</h2>

      {message.text && (
        <div
          className={`p-4 mb-4 rounded ${
            message.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-4 md:p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 mb-2"
                htmlFor="region_of_practice"
              >
                Region of Practice *
              </label>
              <input
                type="text"
                id="region_of_practice"
                name="region_of_practice"
                required
                className="w-full p-2 border rounded"
                value={formData.region_of_practice}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="court_type">
                Court Type *
              </label>
              <select
                id="court_type"
                name="court_type"
                required
                className="w-full p-2 border rounded"
                value={formData.court_type}
                onChange={handleChange}
              >
                <option value="">Select Court Type</option>
                <option value="District Court">District Court</option>
                <option value="High Court">High Court</option>
                <option value="Supreme Court">Supreme Court</option>
                <option value="Tribunal">Tribunal</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="contact">
                Contact Number *
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                required
                className="w-full p-2 border rounded"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="mail">
                Email *
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                required
                className="w-full p-2 border rounded"
                value={formData.mail}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="experience">
                Experience (years)
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                className="w-full p-2 border rounded"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Advocate"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
