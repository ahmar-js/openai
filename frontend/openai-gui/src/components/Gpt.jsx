import axios from "axios";
import { useState } from "react";

export default function GptComponent({ prompt, setOutput, setLoading, setSubmittedPrompt, setPrompt }) {
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = async () => {
    if (!prompt) return;
    setLoading(true);
    setIsFetching(true);
    setSubmittedPrompt(prompt); // Store prompt before clearing

    try {
      const res = await axios.post("http://localhost:4000/gpt", { prompt });
      setOutput(res.data.response);
    } catch (error) {
      setOutput("Error fetching response.");
    } finally {
      setLoading(false);
      setIsFetching(false);
      setPrompt(""); // Clear input field
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleSubmit}
        className="bg-blue-500 p-2 rounded mt-4 disabled:opacity-50"
        disabled={isFetching}
      >
        {isFetching ? (
          <div className="animate-spin inline-block w-5 h-5 border-t-2 border-white rounded-full"></div>
        ) : (
          "Get Response"
        )}
      </button>
    </div>
  );
}
