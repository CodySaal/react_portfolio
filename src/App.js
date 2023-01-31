import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
