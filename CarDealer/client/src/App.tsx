import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import HomePage from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
