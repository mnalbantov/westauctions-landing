import { useState } from 'react';
import { ChevronRight, ChevronDown, Copy, Check } from 'lucide-react';

interface JsonViewerProps {
  data: any;
  expanded?: boolean;
  depth?: number;
  maxDepth?: number;
}

export function JsonViewer({ data, expanded = false, depth = 0, maxDepth = 2 }: JsonViewerProps) {
  const [isExpanded, setIsExpanded] = useState(expanded && depth < maxDepth);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderValue = (value: any, currentDepth: number): JSX.Element => {
    if (value === null) return <span className="text-gray-400">null</span>;
    if (typeof value === 'string') return <span className="text-emerald-600">"{value}"</span>;
    if (typeof value === 'number') return <span className="text-blue-600">{value}</span>;
    if (typeof value === 'boolean') return <span className="text-purple-600">{value.toString()}</span>;
    if (Array.isArray(value)) {
      if (currentDepth >= maxDepth) {
        return <span className="text-gray-400">[...]</span>;
      }
      return (
        <JsonViewer 
          data={value} 
          depth={currentDepth + 1} 
          maxDepth={maxDepth}
        />
      );
    }
    if (typeof value === 'object') {
      if (currentDepth >= maxDepth) {
        return <span className="text-gray-400">{'{...}'}</span>;
      }
      return (
        <JsonViewer 
          data={value} 
          depth={currentDepth + 1} 
          maxDepth={maxDepth}
        />
      );
    }
    return <span>{String(value)}</span>;
  };

  const isObject = typeof data === 'object' && data !== null;
  const isArray = Array.isArray(data);

  if (!isObject) {
    return renderValue(data, depth);
  }

  const entries = Object.entries(data);
  const isEmpty = entries.length === 0;

  return (
    <div className="font-mono text-sm">
      {depth === 0 && (
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-800 rounded"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </button>
          <button
            onClick={copyToClipboard}
            className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      )}
      {isExpanded ? (
        <div className={`space-y-1 ${depth > 0 ? 'pl-4' : ''}`}>
          {isEmpty ? (
            <span className="text-gray-400">{isArray ? '[]' : '{}'}</span>
          ) : (
            entries.map(([key, value], index) => (
              <div key={key} className="flex">
                <span className="text-blue-400 mr-2">"{key}":</span>
                <span>{renderValue(value, depth)}</span>
                {index < entries.length - 1 && <span className="text-gray-400">,</span>}
              </div>
            ))
          )}
        </div>
      ) : (
        <div className={`${depth > 0 ? 'pl-4' : ''} text-gray-400`}>
          {isArray ? '[...]' : '{...}'}
        </div>
      )}
    </div>
  );
}