import './App.css';

import Header from './components/Layout/Header/Header.js';
import Footer from './components/Layout/Footer/Footer';
import Main from './Views/Main/Main.js';


function App() {
  return (
    <div className="App" >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}


export default App;