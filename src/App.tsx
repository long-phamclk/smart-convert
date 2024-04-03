import { BrowserRouter as Router } from "react-router-dom";
import "./components/styles.css";

import Head from "./components/Head";
import Front from "./components/Front";

function App() {
  return (
    <Router>
      <Head />
      <Front />
    </Router>
  );
}

export default App;
