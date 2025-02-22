import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

interface TerminalCommandProps {
  commands: string[];
}

export function TerminalCommand({ commands }: TerminalCommandProps) {
  const [showCopied, setShowCopied] = useState(false);

  return (
    <div className="terminal-command relative">
      <div className="absolute top-0 right-0 flex flex-row-reverse items-center gap-0">
        <button
          className="z-10 p-1.5 text-gray-400 hover:text-white bg-gray-800/0 hover:bg-gray-800/50 rounded-md transition-all duration-200"
          onClick={() => {
            const commandText = commands.join(" && ");
            navigator.clipboard.writeText(commandText);
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 2000);
          }}
        >
          <FaRegCopy className="copy-icon" />
        </button>
        {showCopied && (
          <span className="text-sm text-white bg-gray-800 px-2 py-1 rounded-md mr-0.5">
            Copied!
          </span>
        )}
      </div>
      {commands.map((command, index) => (
        <pre key={index}>
          <code className="terminal-line">{command}</code>
        </pre>
      ))}
    </div>
  );
}
