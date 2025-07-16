import "./App.css";
import useDocTitle from "./hooks/useDocTitle";
import useSmoothScroll from "./hooks/useSmoothScroll";
function App() {
  const [docTitle, setDocTitle] = useDocTitle({ title: "Noman" });
  const [refToScroll, smoothScroll] = useSmoothScroll();
  return (
    <>
      <div>
        <h1>Using Custom Hooks</h1>
        <button onClick={() => setDocTitle("Keyin College")}>
          Change Title
        </button>
        <button onClick={smoothScroll}>Scroll</button>

        <div style={{ marginTop: "250vh" }} ref={refToScroll}>
          I am at bottom of the page <button>Scroll to Top</button>
        </div>
      </div>
    </>
  );
}

export default App;
