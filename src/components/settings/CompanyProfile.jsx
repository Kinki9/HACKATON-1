import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

const CompanyProfile = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
        <BuildingOffice2Icon className="h-5 w-5" />
        Company Profile
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
          <input
            type="text"
            defaultValue="Acme Inc."
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Tax ID</label>
          <input
            type="text"
            defaultValue="123-456-789"
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
          <textarea
            defaultValue="123 Business St, New York, NY"
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Logo</label>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-gray-300">Logo</span>
            </div>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Upload New
            </button>
          </div>
        </div>
        <div className="pt-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;