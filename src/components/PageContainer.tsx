import { Route, Switch } from 'wouter';

import Topbar from './Topbar';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Todos from './pages/Todos';
import NotFound from './pages/default/NotFound';

function PageContainer() {
  return (
    <div className="flex flex-col flex-1">
      <Topbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/todos" component={Todos} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default PageContainer;
