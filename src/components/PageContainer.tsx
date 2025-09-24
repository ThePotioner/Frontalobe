import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Todos from './pages/Todos';
import NotFound from './pages/default/NotFound';

const PageContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageContainer;
