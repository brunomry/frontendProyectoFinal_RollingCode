import { Route, Routes } from 'react-router-dom';
import ClientRouter from './ClientRouter';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<ClientRouter></ClientRouter>}></Route>
    </Routes>
  )
}

export default AppRouter