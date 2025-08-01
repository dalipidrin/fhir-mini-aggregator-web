export default function PatientMetrics({ data }) {
  if (!data) return null;

  const { patientId, observationCount, latest, averageByCode } = data;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Card Header */}
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2 text-gray-900">
        Patient Metrics
      </h2>

      {/* Patient Info */}
      <div className="mb-6 space-y-2 text-gray-800">
        <p>
          <span className="font-semibold">Patient ID:</span> {patientId}
        </p>
        <p>
          <span className="font-semibold">Observation Count:</span> {observationCount}
        </p>
      </div>

      {/* Latest Observation Card */}
      {latest && (
        <div className="mb-6 p-4 bg-gray-50 rounded-md shadow-inner border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Latest Observation</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <p>
                <span className="font-semibold">Code:</span> {latest.code?.coding?.[0]?.code}
              </p>
              <p>
                <span className="font-semibold">Display:</span> {latest.code?.coding?.[0]?.display}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Value:</span> {latest.valueQuantity?.value}{" "}
                {latest.valueQuantity?.unit}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(latest.effectiveDateTime).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Average by Code List */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Average by Code</h3>
        <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
          {Object.entries(averageByCode || {}).map(([code, avg]) => (
            <li
              key={code}
              className="flex justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{code}</span>
              <span className="text-gray-700">{avg}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
