import { ReactNode } from 'react';
import '@/styles/ProjectGrid.css';
import { cn } from '@/lib/utils';

interface Props {
  variant?: 'offset' | 'small';
  children: ReactNode;
}

export default function ProjectGrid({ variant, children }: Props) {
  return (
    <ul 
      className={cn(
        'grid',
        variant === 'offset' && 'offset',
        variant === 'small' && 'small'
      )}
    >
      {children}
    </ul>
  );
}