import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Screen from "./components/Screen";

function App() {
  console.log(process.env.REACT_APP_API_KEY)
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
