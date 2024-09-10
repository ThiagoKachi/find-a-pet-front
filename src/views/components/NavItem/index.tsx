import { Link } from '@tanstack/react-router';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

export function NavItem({ href, icon, title }: NavItemProps) {
  return (
    <Link
      to={href}
      className={'transition-colors flex items-center gap-2 hover:text-secondary text-zinc-700'}
      activeProps={{
        style: {
          color: '#119da4',
          fontWeight: '600',
          textDecoration: 'underline',
          textUnderlineOffset: '0.2rem',
          textDecorationColor: '#119da4'
        }
      }}
    >
      {icon}
      <span className="text-base">{title}</span>
    </Link>
  );
}
