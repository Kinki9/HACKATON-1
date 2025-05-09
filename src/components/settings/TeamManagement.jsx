import { UserGroupIcon } from "@heroicons/react/24/outline";

const TeamManagement = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", email: "john@acme.com", role: "Admin", lastActive: "2 hours ago" },
    { id: 2, name: "Jane Smith", email: "jane@acme.com", role: "Manager", lastActive: "Yesterday" },
    { id: 3, name: "Bob Johnson", email: "bob@acme.com", role: "Member", lastActive: "1 week ago" },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <UserGroupIcon className="h-5 w-5" />
          Team Management
        </h2>
        <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Invite Member
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Active</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {teamMembers.map((member) => (
              <tr key={member.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-white">{member.name}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{member.email}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                  <select defaultValue={member.role} className="bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-white text-sm">
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Member</option>
                  </select>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{member.lastActive}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-red-500 hover:text-red-400">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamManagement;