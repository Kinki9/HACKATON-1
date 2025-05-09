import { CreditCardIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const Billing = () => {
  const plans = [
    { name: "Basic", price: "$29", features: ["10 users", "Basic support", "1GB storage"] },
    { name: "Pro", price: "$99", features: ["50 users", "Priority support", "10GB storage"], current: true },
    { name: "Enterprise", price: "Custom", features: ["Unlimited users", "24/7 support", "Custom storage"] },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
        <CreditCardIcon className="h-5 w-5" />
        Suscripciones y pagos
      </h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-2">Plan actual</h3>
        <div className="bg-gray-700 p-4 rounded-lg border border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-white font-medium">Pro Plan</h4>
              <p className="text-gray-300 text-sm">Fecha de siguiente pago: Junio 15, 2025</p>
            </div>
            <button className="text-sm bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-md">
              Cambiar Plan
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-2">Metodo de pago</h3>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
                VISA
              </div>
              <div>
                <p className="text-white">•••• •••• •••• 4242</p>
                <p className="text-gray-300 text-sm">Expira 04/2025</p>
              </div>
            </div>
            <button className="text-sm bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-md">
              Update
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-white mb-2">Plan disponible</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-gray-700 p-4 rounded-lg border ${plan.current ? 'border-blue-500' : 'border-gray-600'}`}>
              <h4 className="text-white font-medium">{plan.name}</h4>
              <p className="text-2xl font-bold text-white my-2">{plan.price}</p>
              <ul className="text-gray-300 text-sm space-y-1 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button 
                className={`w-full text-sm ${plan.current ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-500'} text-white px-4 py-2 rounded-md`}
                disabled={plan.current}
              >
                {plan.current ? 'Current Plan' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
          <DocumentTextIcon className="h-5 w-5" />
          Historial de pagos
        </h3>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-gray-300">Reembolsos no disponibles</p>
        </div>
      </div>
    </div>
  );
};

export default Billing;