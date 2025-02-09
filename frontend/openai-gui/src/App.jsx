import { useState } from "react";
import GptComponent from "./components/Gpt";
import DalleComponent from "./components/Dalle";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("gpt");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submittedPrompt, setSubmittedPrompt] = useState(""); // Store submitted prompt

  // Reset input and output when switching between GPT-4o and DALL·E
  const handleModeChange = (e) => {
    setMode(e.target.value);
    setPrompt("");
    setOutput(null);
    setSubmittedPrompt("");
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col bg-gray-900 text-white p-4">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter your prompt..."
        className="p-3 text-lg rounded-lg border border-gray-600 bg-gray-800 text-white w-1/2 disabled:opacity-50"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={loading}
      />

      {/* Dropdown */}
      <select
        className="mt-4 p-2 border border-gray-600 rounded bg-gray-800 disabled:opacity-50"
        value={mode}
        onChange={handleModeChange}
        disabled={loading}
      >
        <option value="gpt">GPT-4o-mini</option>
        <option value="dalle">DALL·E-3</option>
      </select>

      {/* GPT-4o or DALL·E Component */}
      <div className="mt-6 w-full flex flex-col items-center">
        {mode === "gpt" ? (
          <GptComponent prompt={prompt} setOutput={setOutput} setLoading={setLoading} setSubmittedPrompt={setSubmittedPrompt} setPrompt={setPrompt} />
        ) : (
          <DalleComponent prompt={prompt} setOutput={setOutput} setLoading={setLoading} setSubmittedPrompt={setSubmittedPrompt} setPrompt={setPrompt} />
        )}
      </div>

      {/* Output Display */}
      <div className="mt-6 p-4 border border-gray-700 bg-gray-800 rounded-lg w-3/4 text-center">
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
        ) : output ? (
          <>
            <p className="text-gray-400">Prompt: {submittedPrompt}</p>
            {mode === "gpt" ? (
              <p className="text-lg mt-2">{output}</p>
            ) : (
              <img src={output} alt="Generated" className="mt-4 max-w-xs rounded" />
            )}
          </>
        ) : (
          <p className="text-gray-400">Output will be shown here</p>
        )}
      </div>
    </div>
  );
}