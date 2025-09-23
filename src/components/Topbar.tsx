import { Button } from '@/components/ui/button';
import { items } from './Sidebar';
import { useLocation } from 'wouter';

const Topbar = () => {
  const [location] = useLocation();
  return (
    <div className="flex bg-sidebar p-2 gap-2 border-t border-r border-b border-l-0">
      <Button variant="ghost" size="sm" className="font-semibold">
        {items.find((item) => item.href === location)?.name}
        {/* TODO: Add Sidebar Items(Pages, etc...) to Zustand Store */}
      </Button>
    </div>
  );
};

export default Topbar;
