import { Container } from "@mui/material";
import "./App.css";

import MainScreen from "./components/card/Screen";

function App() {
  return (
    <Container
      className="App"
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
      }}
    >
      <MainScreen />
    </Container>
  );
}

export default App;
