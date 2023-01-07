import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Deliver from "./components/Deliver";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Screen from "./components/Screen";
import { BodyContainer } from "./styles/screen";

function App() {
  useEffect(() => {
    document.title = "Android Auto Themes - Home";
  }, []);

  return (
    <div className="App">
      <Header />
      <main id="main" >
        <BodyContainer maxWidth='xl'>
          <Screen />
          {/* <Deliver /> */}
        </BodyContainer>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
