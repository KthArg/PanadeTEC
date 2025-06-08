import { useState } from 'react';

const Postal = () => {
  const [codigoPostal, setCodigoPostal] = useState('');
  const [registros, setRegistros] = useState([]);

  const handleSubmit = () => {
    if (codigoPostal) {
      setRegistros([...registros, { codigo: codigoPostal, id: Date.now() }]);
      setCodigoPostal('');
      alert('Código postal registrado');
    } else {
      alert('Ingrese un código postal');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">
        Registro de Código Postal
      </h1>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Código postal"
        />
        
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Registrar
        </button>
      </div>

      {registros.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-3">Registrados:</h2>
          <div className="space-y-2">
            {registros.map((registro) => (
              <div key={registro.id} className="p-2 bg-gray-100 rounded">
                {registro.codigo}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Postal;