import { format } from 'date-fns';

export default function SessionTable({ sessionData }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-blue-50">
          <tr>
            <th>Session Id</th>
            <th>Phone Number</th>
            <th>Response</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sessionData.map((session) => (
            <tr className="hover:bg-gray-100" key={session.session_id}>
              <th className="font-medium">{session.session_id}</th>
              <td>{session.phone_number}</td>
              <td>{session.user_responses}</td>
              <td>{format(new Date(session.date), 'MMMM dd, yyyy h:mm a')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
