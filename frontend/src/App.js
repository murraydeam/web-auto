import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Screen from "./components/Screen";

function App() {
  useEffect(() => {
    document.title = "Android Auto Themes - Home";
  }, []);

  return (
    <div className="App">
      <Header />
      <main id="main" className="section">
        <Screen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
