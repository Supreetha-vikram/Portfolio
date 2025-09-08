import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress(); // gives us loading % of assets

  return (
    <Html
      center
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#f1f1f1",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      <span style={{ marginBottom: "10px" }}>⏳ Loading...</span>
      <span>{progress.toFixed(2)} %</span>
    </Html>
  );
};

export default CanvasLoader;
