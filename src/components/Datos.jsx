import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Database } from 'lucide-react';
import contenido from '../../docs_sotluc/06_datos_sotluc.md?raw';

const Datos = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <div className="p-2 bg-orange-50 rounded-lg">
          <Database className="text-orange-600 w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Tratamiento de Datos Personales</h2>
      </div>
      
      <div className="prose prose-orange max-w-none text-gray-700">
        <ReactMarkdown 
          components={{
            h1: ({node, ...props}) => <h1 className="hidden" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-l-4 border-orange-500 pl-3 bg-slate-50 py-2 rounded-r" {...props} />,
            p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
            li: ({node, ...props}) => <li className="pl-1" {...props} />,
            strong: ({node, ...props}) => <strong className="font-semibold text-slate-900" {...props} />
          }}
        >
          {contenido}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Datos;