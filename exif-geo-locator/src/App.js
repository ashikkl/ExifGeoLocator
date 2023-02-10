import Header from './components/Header';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import Add from './components/Add';
import CardCollection from "./components/CardCollection";
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Header />
      <CardCollection />
      <ScrollButton />
      <Add />
      <Footer />
    </div>
  );
}

export default App;
