import { useState } from "react";

function App() {
  const [idea, setIdea] = useState("");
  const [deck, setDeck] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateDeck = async () => {
    if (!idea) return;

    setLoading(true);
    setError("");

    try {
      // Replace this with your real API endpoint or OpenAI call
      const res = await fetch("/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setDeck(data.output || "<p>No output generated</p>");
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        AI Pitch Deck Generator
      </h1>

      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter your startup idea..."
        className="w-full p-3 rounded-lg border mb-4"
      />

      <button
        onClick={generateDeck}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mb-4"
      >
        {loading ? "Generating..." : "Generate Pitch Deck"}
      </button>

      {error && <p className="text-red-600">{error}</p>}

      {deck && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Generated Pitch Deck</h2>
          <div dangerouslySetInnerHTML={{ __html: deck }} />
        </div>
      )}
    </div>
  );
}

export default App;
