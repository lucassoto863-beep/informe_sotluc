import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ShieldAlert } from 'lucide-react';
import contenido from '../../docs_sotluc/01_resumen_sotluc.md?raw';

const Resumen = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-4">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <ShieldAlert className="text-blue-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-gray-800">Resumen Ejecutivo</h2>
      </div>
      
      <div className="text-gray-700 leading-relaxed space-y-4">
        <ReactMarkdown 
          components={{
            h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-blue-900 mb-4" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-2" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />
          }}
        >
          {contenido}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Resumen;