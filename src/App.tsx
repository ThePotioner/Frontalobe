import PageContainer from './components/PageContainer';
import Sidebar from './components/Sidebar';
import { ThemeButton } from './components/ThemeButton';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <PageContainer />
      <div className="absolute bottom-4 right-4">
        <ThemeButton />
      </div>
    </div>
  );
};

export default App;
