import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header';
import { Todos } from './mycomponents/Todos';
import { Footer } from './mycomponents/Footer';

function App() {
  let myvar = 53;
  return (
// need to wrap in anything, if nothing then wrap in empty...
    <>
      <h3>My app</h3>
      <p>my app works</p>
      <Header/>
      <Todos/>
      <Footer/>
    </>

  );
}
export default App;