import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

/**
 * Paratia di sicurezza: se un componente si blocca al caricamento,
 * mostra un messaggio leggibile invece dello schermo nero,
 * cosi' il problema si puo' riconoscere subito.
 */
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: "100vh", background: "#0f0d0a", color: "#ece3cf", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "Georgia, serif" }}>
          <div style={{ maxWidth: 640, border: "1px solid #c9a24b", padding: "2.5rem", textAlign: "center" }}>
            <p style={{ color: "#c9a24b", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: 12, marginTop: 0 }}>
              La forgia si è inceppata
            </p>
            <h1 style={{ fontFamily: "'Cinzel', Georgia, serif", fontSize: 28, margin: "1rem 0" }}>
              Il sito ha incontrato un errore
            </h1>
            <p style={{ color: "#a89e88", lineHeight: 1.6 }}>
              Probabilmente manca un file nella copia del progetto oppure i componenti non si sono installati del tutto.
              Dettagli tecnici dell'errore:
            </p>
            <pre style={{ background: "#171410", border: "1px solid #3a3227", padding: "1rem", overflowX: "auto", fontSize: 12, color: "#d07a69", textAlign: "left" }}>
              {this.state.error.message}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{ marginTop: "1.5rem", background: "#c9a24b", color: "#0f0d0a", border: "none", padding: "0.8rem 2rem", fontFamily: "'Cinzel', Georgia, serif", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}
            >
              Riprova a caricare
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
