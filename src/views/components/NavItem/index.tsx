import { cn } from '@/lib/utils';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  isSelected?: boolean;
}

export function NavItem({ href, icon, title, isSelected }: NavItemProps) {
  return (
    <a
      href={href}
      className={cn('transition-colors flex items-center gap-2 text-primary hover:text-secondary',
        isSelected
          ? 'text-primary font-semibold underline underline-offset-2 decoration-primary'
          : 'text-zinc-700'
      )}
    >
      {icon}
      <span className="text-base">{title}</span>
    </a>
  );
}
