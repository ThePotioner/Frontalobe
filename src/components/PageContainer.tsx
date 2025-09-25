import { Routes, Route } from 'react-router-dom';

import { ContainerWrapper } from '@/components/ui/Wrappers';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Todos from './pages/Todos';
import NotFound from './pages/default/NotFound';

const PageContainer = () => {
  return (
    <ContainerWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContainerWrapper>
  );
};

export default PageContainer;
