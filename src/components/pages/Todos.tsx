import TodoBoard from '../TodoBoard';
import { ListedComponentWrapper } from '@/components/ui/Wrappers';

const Todos = () => {
  return (
    <ListedComponentWrapper>
      <TodoBoard name="내 할 일 목록 1" />
      <TodoBoard name="내 할 일 목록 2" />
      <TodoBoard name="내 할 일 목록 3" />
    </ListedComponentWrapper>
  );
};

export default Todos;
