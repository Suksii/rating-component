import "./App.css";
import Ratings from "./components/Ratings";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10rem",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase"
        }}
      >
        Ratings
      </h1>
      <Ratings />
    </div>
  );
}

export default App;
