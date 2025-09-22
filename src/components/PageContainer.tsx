import Topbar from './Topbar';

function PageContainer() {
  return (
    <div className="flex flex-col flex-1">
      <Topbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </div>
    </div>
  );
}

export default PageContainer;
