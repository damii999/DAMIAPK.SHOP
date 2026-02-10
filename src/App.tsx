import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Downloads } from './pages/Downloads';
import { Reviews } from './pages/Reviews';
import { Guides } from './pages/Guides';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
