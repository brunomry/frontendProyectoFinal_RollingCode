import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './components/pages/Error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/error404' element={<Error404></Error404>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
