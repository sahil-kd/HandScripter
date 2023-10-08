import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Uploader from "./components/Uploader";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Settings from "./components/Settings";
import FAQs from "./components/FAQs";
import HowItWorks from "./components/HowItWorks";
import ReportIssues from "./components/ReportIssues";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Uploader />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Settings" element={<Settings />}></Route>
        <Route path="/FAQs" element={<FAQs />}></Route>
        <Route path="/How-it-works" element={<HowItWorks />}></Route>
        <Route path="/Report-issues" element={<ReportIssues />}></Route>
        <Route path="/Privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/Terms-of-service" element={<TermsOfService />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
