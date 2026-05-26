import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Scale } from 'lucide-react';
import contenido from '../../docs_sotluc/04_comparacion_sotluc.md?raw';

const Comparacion = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <div className="p-2 bg-emerald-50 rounded-lg">
          <Scale className="text-emerald-600 w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Comparación de Marcos Regulatorios</h2>
      </div>
      
      <div className="prose prose-emerald max-w-none text-gray-700 overflow-x-auto">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="hidden" {...props} />,
            p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
            table: ({node, ...props}) => <table className="min-w-full border-collapse border border-slate-200 mt-4" {...props} />,
            thead: ({node, ...props}) => <thead className="bg-slate-50" {...props} />,
            th: ({node, ...props}) => <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800 bg-slate-100" {...props} />,
            td: ({node, ...props}) => <td className="border border-slate-200 px-4 py-3 align-top" {...props} />,
            strong: ({node, ...props}) => <strong className="font-semibold text-slate-900" {...props} />
          }}
        >
          {contenido}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Comparacion;