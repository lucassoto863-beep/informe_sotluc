import React from 'react';
import Resumen from './components/Resumen';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Análisis de Ciberseguridad</h1>
        <p className="text-gray-600">Caso: Filtración de Datos en Anthropic</p>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Aquí estamos renderizando el componente que acabamos de crear */}
        <Resumen />
      </main>
    </div>
  );
}

export default App;