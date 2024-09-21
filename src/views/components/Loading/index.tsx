interface LoadingProps {
  text: string;
  icon: React.ReactNode;
}

export function Loading({ text, icon }: LoadingProps) {
  return (
    <div className="flex items-start w-full justify-center mt-[10%] text-2xl font-bold gap-2 animate-pulse text-primary">
      {text}
      <span>
        {icon}
      </span>
    </div>
  );
}
