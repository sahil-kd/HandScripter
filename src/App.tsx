import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Uploader from "./components/Uploader";

// I wanna preserve the background and hover blur effect

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Uploader />
      <Footer />
    </>
  );
}

export default App;
