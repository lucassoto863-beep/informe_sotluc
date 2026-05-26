import React, { useState } from 'react';
import { ShieldAlert, BookOpen, Gavel, Scale, Users, Database, Lightbulb, Bot, Menu, X } from 'lucide-react';

import Resumen from './components/Resumen';
import Marco from './components/Marco';
import Delitos from './components/Delitos';
import Comparacion from './components/Comparacion';
import Responsabilidades from './components/Responsabilidades';
import Datos from './components/Datos';
import Conclusiones from './components/Conclusiones';
import Prompts from './components/Prompts';

function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const menu = [
    { id: 'resumen', titulo: 'Resumen Ejecutivo', icono: ShieldAlert },
    { id: 'marco', titulo: 'Marco Normativo', icono: BookOpen },
    { id: 'delitos', titulo: 'Delitos Informáticos', icono: Gavel },
    { id: 'comparacion', titulo: 'Comparación de Marcos', icono: Scale },
    { id: 'responsabilidades', titulo: 'Responsabilidades', icono: Users },
    { id: 'datos', titulo: 'Datos Personales', icono: Database },
    { id: 'conclusiones', titulo: 'Conclusiones', icono: Lightbulb },
    { id: 'prompts', titulo: 'Bitácora IA', icono: Bot },
  ];

  const renderizarContenido = () => {
    switch (seccionActiva) {
      case 'resumen': return <Resumen />;
      case 'marco': return <Marco />;
      case 'delitos': return <Delitos />;
      case 'comparacion': return <Comparacion />;
      case 'responsabilidades': return <Responsabilidades />;
      case 'datos': return <Datos />;
      case 'conclusiones': return <Conclusiones />;
      case 'prompts': return <Prompts />;
      default: return null;
    }
  };

  const itemActivo = menu.find(m => m.id === seccionActiva);
  const IconoActivo = itemActivo?.icono;

  return (
    <div className="flex h-screen bg-[#FDFCFB] font-sans">
      
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-[#2B2A27] text-[#FDFCFB] rounded-md shadow-lg"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <X /> : <Menu />}
      </button>

      <aside className={`
        fixed md:static inset-y-0 left-0 z-40 w-72 bg-[#2B2A27] text-[#D4D3D0] shadow-xl transition-transform duration-300 ease-in-out flex flex-col
        ${menuAbierto ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-8 border-b border-[#3D3B38] shrink-0">
          <h1 className="text-2xl font-bold text-[#FDFCFB] tracking-wide font-serif">Análisis Legal</h1>
          <p className="text-sm text-[#D97757] font-medium mt-2">Caso Anthropic</p>
        </div>

        <nav className="px-6 pt-6 pb-12 space-y-3 overflow-y-auto flex-1">
          {menu.map((item) => {
            const Icono = item.icono;
            const activo = seccionActiva === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSeccionActiva(item.id);
                  setMenuAbierto(false);
                }}
                className={`
                  w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200
                  ${activo 
                    ? 'bg-[#D97757] text-[#FDFCFB] shadow-lg shadow-[#D97757]/30 scale-105' 
                    : 'hover:bg-[#3D3B38] hover:text-[#FDFCFB]'}
                `}
              >
                <Icono className={`w-5 h-5 ${activo ? 'text-[#FDFCFB]' : 'text-[#A3A19E]'}`} />
                <span className="font-medium text-left">{item.titulo}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto relative">
        
        <header className="bg-[#FDFCFB]/90 backdrop-blur-sm shadow-sm border-b border-[#E6E4E0] px-8 md:px-12 py-6 sticky top-0 z-30 flex items-center gap-5">
          <div className="p-3 bg-[#F4EBE6] text-[#D97757] rounded-xl shadow-sm border border-[#E8D8D0]">
            {IconoActivo && <IconoActivo className="w-7 h-7" />}
          </div>
          <div>
            <p className="text-xs font-bold text-[#D97757] tracking-widest uppercase mb-1">Sección Actual</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2B2A27] tracking-tight font-serif">
              {itemActivo?.titulo}
            </h2>
          </div>
        </header>
        
        <div className="py-10 px-6 md:px-12 max-w-4xl mx-auto">
          {renderizarContenido()}
        </div>
      </main>

    </div>
  );
}

export default App;