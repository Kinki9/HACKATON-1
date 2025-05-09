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
  { 
    id: "CHIP-2023-002", 
    type: "GPU 5nm", 
    quantity: 800, 
    client: "Quantum Computing",
    status: "Entregado", 
    orderDate: "2023-04-10",
    deliveryDate: "2023-05-18",
    unitPrice: "$120",
    total: "$96,000"
  },
  { 
    id: "CHIP-2023-003", 
    type: "FPGA 10nm", 
    quantity: 250, 
    client: "AeroSystems",
    status: "Control calidad", 
    orderDate: "2023-06-01",
    deliveryDate: "2023-07-15",
    unitPrice: "$85",
    total: "$21,250"
  },
  { 
    id: "CHIP-2023-004", 
    type: "SoC 6nm", 
    quantity: 3000, 
    client: "MobileTech",
    status: "Producción", 
    orderDate: "2023-05-22",
    deliveryDate: "2023-07-10",
    unitPrice: "$32",
    total: "$96,000"
  },
  { 
    id: "CHIP-2023-005", 
    type: "AI Accelerator", 
    quantity: 500, 
    client: "Neuralink",
    status: "Pendiente", 
    orderDate: "2023-06-05",
    deliveryDate: "2023-08-01",
    unitPrice: "$210",
    total: "$105,000"
  },
  { 
    id: "CHIP-2023-006", 
    type: "Memory Chip 12nm", 
    quantity: 5000, 
    client: "DataStorage Inc.",
    status: "Entregado", 
    orderDate: "2023-03-15",
    deliveryDate: "2023-04-30",
    unitPrice: "$18",
    total: "$90,000"
  },
  { 
    id: "CHIP-2023-007", 
    type: "Sensor Chip 8nm", 
    quantity: 1200, 
    client: "IoT Solutions",
    status: "Producción", 
    orderDate: "2023-05-30",
    deliveryDate: "2023-07-05",
    unitPrice: "$28",
    total: "$33,600"
  },
  { 
    id: "CHIP-2023-008", 
    type: "RF Chip 14nm", 
    quantity: 1800, 
    client: "Telecom Global",
    status: "Control calidad", 
    orderDate: "2023-06-10",
    deliveryDate: "2023-07-25",
    unitPrice: "$42",
    total: "$75,600"
  },
  { 
    id: "CHIP-2023-009", 
    type: "Power Management IC", 
    quantity: 3500, 
    client: "EnergySystems",
    status: "Entregado", 
    orderDate: "2023-04-05",
    deliveryDate: "2023-05-20",
    unitPrice: "$12",
    total: "$42,000"
  },
  { 
    id: "CHIP-2023-010", 
    type: "Automotive MCU", 
    quantity: 2000, 
    client: "AutoTech",
    status: "Producción", 
    orderDate: "2023-06-12",
    deliveryDate: "2023-08-15",
    unitPrice: "$65",
    total: "$130,000"
  },
  { 
    id: "CHIP-2023-011", 
    type: "FPGA 7nm", 
    quantity: 600, 
    client: "Defense Systems",
    status: "Pendiente", 
    orderDate: "2023-06-15",
    deliveryDate: "2023-09-01",
    unitPrice: "$150",
    total: "$90,000"
  },
  { 
    id: "CHIP-2023-012", 
    type: "GPU 8nm", 
    quantity: 900, 
    client: "Gaming Labs",
    status: "Control calidad", 
    orderDate: "2023-05-28",
    deliveryDate: "2023-07-08",
    unitPrice: "$95",
    total: "$85,500"
  }
];

const SemiconductorOrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = semiconductorOrders.filter(order =>
    order.id.toLowerCase().includes(searchTerm) ||
    order.client.toLowerCase().includes(searchTerm) ||
    order.type.toLowerCase().includes(searchTerm)
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
            placeholder='Buscar por ID, cliente o tipo...'
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
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Fecha Orden</th>
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
                    order.status === "Control calidad" ? "bg-blue-900 text-blue-300" :
                    "bg-red-900 text-red-300"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className='px-6 py-4 text-sm text-gray-300'>{order.orderDate}</td>
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