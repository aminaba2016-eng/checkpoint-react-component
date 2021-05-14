import logo from './logo.svg';
import './App.css';
import ReactCompnent from './component/ReactCompnent.js';
import Address from '../profile/Address.js';
import FullName from '../profile/FullName.js';
import ProfilePhoto from '../profile/ProfilePhoto.js';




function App() {
  return (
    <div className="App">
      <ReactCompnent/>
      <Address/>
      <FullName/>
      <ProfilePhoto/>
      
    </div>
  );
}

export default App;
