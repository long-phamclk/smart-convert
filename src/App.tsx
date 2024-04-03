import { BrowserRouter as Router } from "react-router-dom";
import "./components/styles.css";

import Head from "./components/Head";
import Front from "./components/Front";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Head />
      <Front />
      <Footer />
    </Router>
  );
}

export default App;
