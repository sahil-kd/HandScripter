import "./App.css";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Uploader />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
