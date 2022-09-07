import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Titolo</h1>
        <hr />
        <div className='row'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
