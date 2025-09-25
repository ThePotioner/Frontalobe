import Topbar from '@/components/Topbar';
import PageContainer from '@/components/PageContainer';
import Sidebar from '@/components/Sidebar';
import { FullscreenWrapper, ColumnWrapper } from '@/components/ui/Wrappers';
import { ThemeButton } from '@/components/ThemeButton';

const App = () => {
  return (
    <FullscreenWrapper>
      <Sidebar />
      <ColumnWrapper>
        <Topbar />
        <PageContainer />
      </ColumnWrapper>
      <ThemeButton />
    </FullscreenWrapper>
  );
};

export default App;
