import { Checkbox } from '@/components/ui/checkbox';

const TodoBoard = (data: { name: string }) => {
  return (
    <div className="flex flex-col gap-2 flex-1 max-w-2xl min-w-96 min-h-60 bg-black/5 dark:bg-sidebar rounded-2xl p-4 shadow-xs">
      <h1 className="text-lg font-light">{data.name}</h1>
      <div className="flex items-center gap-2">
        <Checkbox id="urmom 1" />
        <p className="tracking-wide font-light">안녕하세요!</p>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="urmom 2" />
        <p className="tracking-wide font-light">당신의 첫 할 일을</p>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="urmom 3" />
        <p className="tracking-wide font-light">여기에 적어보세요.</p>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="urmom 4" />
        <p className="tracking-wide font-light">
          매일 꾸준히 노력하는 습관을 가져볼까요?
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="urmom 3" />
        <p className="tracking-wide font-light">
          할 일은 다음과 같이 적을 수 있어요.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="urmom 3" />
        <div className="flex space-x-1">
          <p className="tracking-wide font-bold underline">매일</p>
          <p className="tracking-wide font-light">
            아침 간단히 외출 및 가벼운 산책하기
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="urmom 3" />
        <div className="flex space-x-1">
          <p className="tracking-wide font-bold underline">오늘</p>
          <p className="tracking-wide font-light">고양이 사료 주문하기</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="urmom 3" />
        <p className="tracking-wide font-light">
          이 이외에도, 여러가지 할 일을 적을 수 있답니다!
        </p>
      </div>
    </div>
  );
};

export default TodoBoard;
