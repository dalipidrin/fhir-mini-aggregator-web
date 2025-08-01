import { useState } from "react";
import "./Input.css";

export default function Input({ onSubmit }: { onSubmit: (patientId: string) => void }) {
  const [patientId, setPatientId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (patientId.trim()) {
      onSubmit(patientId.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        placeholder="Enter Patient ID"
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Get Metrics
      </button>
    </form>
  );
}
