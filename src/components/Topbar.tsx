import { useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { items } from './Sidebar';

const Topbar = () => {
  const location = useLocation();
  return (
    <div className="flex bg-sidebar p-2 gap-0.5 border-t border-r border-b border-l-0 items-center">
      <Button variant="ghost" size="sm" className="font-semibold">
        {items.find((item) => item.href === location.pathname)?.name}
        {/* TODO: Add Sidebar Items(Pages, etc...) to Zustand Store */}
      </Button>
      <p className="text-muted-foreground text-sm font-light">{'/'}</p>
    </div>
  );
};

export default Topbar;
