import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Vitrine from './pages/vitrine';
import Boutique from './pages/boutique';
import SurMesure from './pages/sur-mesure';
import Design from './pages/design';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitrine" element={<Vitrine />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/sur-mesure" element={<SurMesure />} />
          <Route path="/design" element={<Design />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;