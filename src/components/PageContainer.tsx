import { Routes, Route } from 'react-router-dom';

import Topbar from './Topbar';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Todos from './pages/Todos';
import NotFound from './pages/default/NotFound';

const PageContainer = () => {
  return (
    <div className="flex flex-col flex-1">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default PageContainer;
