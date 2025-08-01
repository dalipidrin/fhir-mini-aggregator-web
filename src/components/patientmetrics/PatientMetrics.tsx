import './PatientMetrics.css';

export default function PatientMetrics({ data }) {
  if (!data) return null;

  const { patientId, observationCount, latest, averageByCode } = data;

  return (
    <div className="patient-metrics-card">
      <h2 className="patient-metrics-title">Patient Metrics</h2>

      <div className="patient-info">
        <p>
          <span className="label">Patient ID:</span> {patientId}
        </p>
        <p>
          <span className="label">Observation Count:</span> {observationCount}
        </p>
      </div>

      {latest && (
        <div className="latest-observation-card">
          <h3 className="latest-observation-title">Latest Observation</h3>
          <div className="latest-observation-grid">
            <div>
              <p>
                <span className="label">Code:</span> {latest.code?.coding?.[0]?.code}
              </p>
              <p>
                <span className="label">Display:</span> {latest.code?.coding?.[0]?.display}
              </p>
            </div>
            <div>
              <p>
                <span className="label">Value:</span> {latest.valueQuantity?.value} {latest.valueQuantity?.unit}
              </p>
              <p>
                <span className="label">Date:</span> {new Date(latest.effectiveDateTime).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      <div>
        <h3 className="average-section-title">Average by Code</h3>
        <ul className="average-list">
          {Object.entries(averageByCode || {}).map(([code, avg]) => (
            <li key={code} className="average-item">
              <span className="average-code">{code}</span>
              <span className="average-value">{avg}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
