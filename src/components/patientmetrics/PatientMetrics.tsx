import './PatientMetrics.css';
import type { PatientMetricsProps } from '../../models/PatientMetricsProps';

export default function PatientMetrics({ data }: PatientMetricsProps) {
  const { patientId, observationCount, latest, averageByCode } = data || {};

  return (
    <div className="patient-metrics-card">
      <h2 className="patient-metrics-title">Patient Metrics</h2>

      <div className="patient-info">
        <p>
          <span className="label">Patient ID:</span> {patientId || 'N/A'}
        </p>
        <p>
          <span className="label">Observation Count:</span> {observationCount ?? 'N/A'}
        </p>
      </div>

      {latest ? (
        <div className="latest-observation-card">
          <h3 className="latest-observation-title">Latest Observation</h3>
          <div className="latest-observation-grid">
            <div>
              <p>
                <span className="label">Code:</span> {latest.code?.coding?.[0]?.code || 'N/A'}
              </p>
              <p>
                <span className="label">Display:</span> {latest.code?.coding?.[0]?.display || 'N/A'}
              </p>
            </div>
            <div>
              <p>
                <span className="label">Value:</span>{' '}
                {latest.valueQuantity?.value ?? 'N/A'} {latest.valueQuantity?.unit || ''}
              </p>
              <p>
                <span className="label">Date:</span>{' '}
                {latest.effectiveDateTime
                  ? new Date(latest.effectiveDateTime).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="no-data-text">No latest observation available</p>
      )}

      <div>
        <h3 className="average-section-title">Average by Code</h3>
        {averageByCode && Object.keys(averageByCode).length > 0 ? (
          <ul className="average-list">
            {Object.entries(averageByCode).map(([code, avg]) => (
              <li key={code} className="average-item">
                <span className="average-code">{code}</span>
                <span className="average-value">{avg}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-data-text">No average data available</p>
        )}
      </div>
    </div>
  );
}
