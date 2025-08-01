import { useState } from "react";

export default function Input({ onSubmit }) {
  const [patientId, setPatientId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientId.trim()) {
      onSubmit(patientId.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        placeholder="Enter Patient ID"
        className="border px-2 py-1 mr-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Get Metrics
      </button>
    </form>
  );
}
