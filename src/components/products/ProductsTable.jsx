import { motion } from "framer-motion";
import { Cpu, AlertTriangle, Activity, Search, Edit, Trash2, PlusCircle } from "lucide-react";
import { useState } from "react";

// Datos simulados de semiconductores
const CHIP_DATA = [
  {
    id: "CHIP-AB12",
    batch: "LOTE-2024-05",
    temperature: 72,
    voltage: 3.3,
    status: "OK",
  },
  {
    id: "CHIP-CD34",
    batch: "LOTE-2024-05",
    temperature: 89,
    voltage: 4.1,
    status: "Fallo",
  },
  {
    id: "CHIP-EF56",
    batch: "LOTE-2024-04",
    temperature: 68,
    voltage: 3.1,
    status: "OK",
  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [chips, setChips] = useState(CHIP_DATA);
  const [selectedChipId, setSelectedChipId] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredChips = chips.filter(
    (chip) =>
      chip.id.toLowerCase().includes(searchTerm) ||
      chip.batch.toLowerCase().includes(searchTerm)
  );

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Semiconductores en Producción</h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Buscar por ID o Lote...'
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>ID Chip</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Lote</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Temperatura (°C)</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Voltaje (V)</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Estado</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Acciones</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-700'>
            {filteredChips.map((chip) => (
              <motion.tr
                key={chip.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                  <Cpu className="text-blue-400" size={18} />
                  {chip.id}
                </td>
                <td className='px-6 py-4 text-sm text-gray-300'>{chip.batch}</td>
                <td className={`px-6 py-4 text-sm ${
                  chip.temperature > 80 ? "text-red-400" : "text-green-400"
                }`}>
                  {chip.temperature}
                </td>
                <td className='px-6 py-4 text-sm text-gray-300'>{chip.voltage}</td>
                <td className='px-6 py-4 text-sm'>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    chip.status === "OK" ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"
                  }`}>
                    {chip.status}
                  </span>
                </td>
                <td className='px-6 py-4 text-sm text-gray-300 flex gap-2'>
                  <button className='text-indigo-400 hover:text-indigo-300'>
                    <Edit size={18} />
                  </button>
                  <button className='text-red-400 hover:text-red-300'>
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;