interface WrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ContainerWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-1 overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-primary/20 scrollbar-track-transparent">
      {children}
    </div>
  );
};

export const ListedComponentWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-1 justify-center gap-4 items-baseline p-4">
      {children}
    </div>
  );
};

export const FullscreenWrapper = ({ children }: WrapperProps) => {
  return <div className="flex flex-1 h-screen">{children}</div>;
};

export const ColumnWrapper = ({ children }: WrapperProps) => {
  return <div className="flex flex-col flex-1 overflow-hidden">{children}</div>;
};
