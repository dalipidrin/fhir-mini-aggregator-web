import { useState } from "react";
import Input from "../components/input/Input";
import PatientMetrics from "../components/patientmetrics/PatientMetrics";
import { fetchPatientMetrics } from "../webservices/PatientMetricsService";
import "./Patient.css";

export default function Patient() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async (patientId) => {
    try {
      setError("");
      const data = await fetchPatientMetrics(patientId);
      setMetrics(data);
    } catch {
      setMetrics(null);
      setError("Failed to fetch metrics. Please check the patient ID or token.");
    }
  };

  return (
    <div className="patient-container">
      <h1 className="patient-title">Patient Metrics Viewer</h1>
      <Input onSubmit={handleFetch} />
      {error && <p className="error-text">{error}</p>}
      <PatientMetrics data={metrics} />
    </div>
  );
}
