import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // Automatically trigger download when the app loads
    const link = document.createElement("a");
    link.href = "/t1.code-snippets"; // 🔗 your file URL
    link.download = "t1.code-snippets"; // optional custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;