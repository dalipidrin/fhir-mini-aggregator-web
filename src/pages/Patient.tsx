import { useState } from "react";
import Input from "../components/Input";
import PatientMetrics from "../components/PatientMetrics";
import { fetchPatientMetrics } from "../webservices/PatientMetricsService";

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
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Metrics Viewer</h1>
      <Input onSubmit={handleFetch} />
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <PatientMetrics data={metrics} />
    </div>
  );
}
