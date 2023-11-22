import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Welcomepage } from './components/Welcome/Welcomepage';
import { Splashpage1 } from './components/Splashpage1/Splashpage1';
import { Splashpage2 } from './components/Splashpage2/Splashpage2';
import { Splashpage3 } from './components/Splashpage3/Splashpage3';
import { Welcomelogin } from './components/Welcomelogin/Welcomelogin';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcomepage/>}></Route>
            <Route path="/Splashpage1" element={<Splashpage1/>}></Route>
            <Route path="/Splashpage2" element={<Splashpage2/>}></Route>
            <Route path="/Splashpage3" element={<Splashpage3/>}></Route>
            <Route path="/Welcomelogin" element={<Welcomelogin/>}></Route>
           

        </Routes>
        </BrowserRouter>
    
    </>
  );
}
export default App;
