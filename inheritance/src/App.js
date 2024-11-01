import logo from './logo.svg';
import './App.css';
import Cat from './classes/Cat';
import Cheetah from './classes/Cheetah';

function App() {
  /*let meow = new Cat();
  meow.runningSpeed();*/
  let chirutha = new Cheetah();
  chirutha.noOfEars = 2;
  chirutha.runningSpeed();
  chirutha.eatingBehaviour();
  chirutha.facingHuman();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
