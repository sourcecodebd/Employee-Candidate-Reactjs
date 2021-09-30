import Candidates from "./components/Candidates/Candidates";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  const backgroundStyle = {
    backgroundImage: 'linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.2, 0.2, 0.2, 0.2)), url(./employee1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }

  return (
    <div className="App" style={backgroundStyle}>
      <div className="container">
        <Header />
        <Candidates />
        <Footer />
      </div>
    </div>
  );
}

export default App;
