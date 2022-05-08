import { Route, Routes } from 'react-router-dom';
import { CompletedGames } from './components/completedGames';
import { Homepage } from './components/homepage';
import { Inputs } from './components/inputs';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
     {/* <Inputs/>
     <Homepage/> */}
     <Navbar/>
     <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/input" element={<Inputs/>}></Route>
        <Route path='/completed' element={<CompletedGames/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
