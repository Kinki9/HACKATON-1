import { ShieldCheckIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";

const Compliance = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
        <ShieldCheckIcon className="h-5 w-5" />
        Compliance & Security
      </h2>
      
      <div className="space-y-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
            <DocumentCheckIcon className="h-5 w-5" />
            Data Processing Agreement
          </h3>
          <p className="text-gray-300 mb-4">
            Review and accept our data processing agreement to ensure compliance with data protection regulations.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <input
                id="dpa-agreement"
                name="dpa-agreement"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="dpa-agreement" className="ml-2 block text-sm text-gray-300">
                I agree to the Data Processing Agreement
              </label>
            </div>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-2">GDPR Compliance</h3>
          <p className="text-gray-300 mb-4">
            Tools to help you comply with the General Data Protection Regulation (GDPR).
          </p>
          <div className="space-y-3">
            <button className="w-full text-left bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-md flex justify-between items-center">
              <span>Data Access Request</span>
              <span className="text-gray-400 text-sm">Configure</span>
            </button>
            <button className="w-full text-left bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-md flex justify-between items-center">
              <span>Data Deletion Request</span>
              <span className="text-gray-400 text-sm">Configure</span>
            </button>
            <button className="w-full text-left bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-md flex justify-between items-center">
              <span>Cookie Consent Settings</span>
              <span className="text-gray-400 text-sm">Configure</span>
            </button>
          </div>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-2">Security Audit Log</h3>
          <p className="text-gray-300 mb-4">
            View recent security events and changes to your account settings.
          </p>
          <div className="bg-gray-800 p-3 rounded">
            <p className="text-gray-400 text-sm">No recent security events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;