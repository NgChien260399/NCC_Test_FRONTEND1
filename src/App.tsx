import "./App.css";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <>
      <Sidebar />

      <main className="main">
        <Home />
        <Footer />
      </main>
    </>
  );
}

export default App;
