import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const semiconductorOrders = [
  { 
    id: "CHIP-2023-001", 
    type: "CPU 7nm", 
    quantity: 1500, 
    client: "TechCorp",
    status: "Producción", 
    orderDate: "2023-05-15",
    deliveryDate: "2023-06-20",
    unitPrice: "$45",
    total: "$67,500"
  },
  // ... más órdenes
];

const SemiconductorOrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = semiconductorOrders.filter(order =>
    order.id.toLowerCase().includes(searchTerm) ||
    order.client.toLowerCase().includes(searchTerm)
  );

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Órdenes de Semiconductores</h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Buscar por ID o cliente...'
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>ID Orden</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Tipo</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Cantidad</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Cliente</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Estado</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Precio Unitario</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Total</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Acciones</th>
            </tr>
          </thead>
          <tbody className='divide divide-gray-700'>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className='px-6 py-4 text-sm font-medium text-gray-100'>{order.id}</td>
                <td className='px-6 py-4 text-sm text-gray-300'>{order.type}</td>
                <td className='px-6 py-4 text-sm text-gray-300'>{order.quantity.toLocaleString()}</td>
                <td className='px-6 py-4 text-sm text-gray-300'>{order.client}</td>
                <td className='px-6 py-4 text-sm'>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === "Entregado" ? "bg-green-900 text-green-300" :
                    order.status === "Producción" ? "bg-yellow-900 text-yellow-300" :
                    "bg-blue-900 text-blue-300"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className='px-6 py-4 text-sm text-gray-300'>{order.unitPrice}</td>
                <td className='px-6 py-4 text-sm font-medium text-gray-100'>{order.total}</td>
                <td className='px-6 py-4 text-sm text-gray-300'>
                  <button className='text-indigo-400 hover:text-indigo-300'>
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default SemiconductorOrdersTable;