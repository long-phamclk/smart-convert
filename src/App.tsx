import Head from "./components/Head";
import { BrowserRouter as Router } from "react-router-dom";
import "./components/styles.css";

function App() {
  return (
    <Router>
      <Head />
    </Router>
  );
}

export default App;
