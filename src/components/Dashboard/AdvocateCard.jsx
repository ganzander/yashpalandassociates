export default function AdvocateCard({ advocate }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-2">{advocate.name}</h3>
      <div className="text-gray-600 space-y-1">
        <p>
          <strong>Region:</strong> {advocate.region_of_practice}
        </p>
        <p>
          <strong>Court Type:</strong> {advocate.court_type}
        </p>
        <p>
          <strong>Contact:</strong> {advocate.contact}
        </p>
        <p>
          <strong>Email:</strong> {advocate.mail}
        </p>
        {advocate.experience && (
          <p>
            <strong>Experience:</strong> {advocate.experience} years
          </p>
        )}
      </div>
    </div>
  );
}
