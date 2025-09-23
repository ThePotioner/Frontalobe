import { Button } from '@/components/ui/button';
import { useLocation, Link } from 'wouter';
import {
  IconHome,
  IconCalendarWeekFilled,
  IconLayoutCollage,
  IconCheckupList,
} from '@tabler/icons-react';

// TODO: Add Sidebar Items(Pages, etc...) to Zustand Store
export const items = [
  { name: 'Home', href: '/', icon: IconHome },
  { name: 'Dashboard', href: '/dashboard', icon: IconLayoutCollage },
  { name: 'Todos', href: '/todos', icon: IconCheckupList },
  { name: 'Calendar', href: '/calendar', icon: IconCalendarWeekFilled },
];

const Sidebar = () => {
  const [location] = useLocation();
  return (
    <nav className="flex flex-col min-w-[240px] max-w-[480px] bg-sidebar border">
      <div className="flex flex-col m-2 gap-2">
        <p className="text-muted-foreground text-sm font-bold pl-2">Menus</p>
        {items.map((item) => (
          <Button
            asChild
            size="sm"
            key={item.name}
            variant={location === item.href ? 'secondary' : 'ghost'}
            className="justify-start"
          >
            <Link href={item.href}>
              <item.icon /> {item.name}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
