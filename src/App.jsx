import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log('ád');
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
