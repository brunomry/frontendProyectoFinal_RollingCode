import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pedido from './components/pages/Pedido';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pedido' element={<Pedido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
