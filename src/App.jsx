import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Om from './pages/Om.jsx';
import Virksomheder from './pages/Virksomheder.jsx';
import Foredrag from './pages/Foredrag.jsx';
import Medie from './pages/Medie.jsx';
import Content from './pages/Content.jsx';
import Kontakt from './pages/Kontakt.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/om" element={<Om />} />
      <Route path="/virksomheder" element={<Virksomheder />} />
      <Route path="/foredrag" element={<Foredrag />} />
      <Route path="/medie" element={<Medie />} />
      <Route path="/content" element={<Content />} />
      <Route path="/kontakt" element={<Kontakt />} />
    </Routes>
  );
}
