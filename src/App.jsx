import { useRef } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
  const elementRef = useRef();
  return (
    <>
      <ComponentA elRef={elementRef} />
      <ComponentB getRefFrom={elementRef} />
    </>
  );
}

export default App;
