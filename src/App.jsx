import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/pages/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/nosotros' element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
