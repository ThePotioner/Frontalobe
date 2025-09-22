import PageContainer from './PageContainer';
import Sidebar from './Sidebar';
import { ToggleTheme } from './ToggleTheme';

function MainContainer() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <PageContainer />
      <div className="absolute bottom-4 right-4">
        <ToggleTheme />
      </div>
    </div>
  );
}

export default MainContainer;
