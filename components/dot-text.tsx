import { cn } from '@/lib/utils';
import { Dot } from 'lucide-react';
import React from 'react';

const DotText = ({ className, text = 'Tentang Kami' }: { className?: string; text?: string }) => {
  return (
    <div className={cn('bg-white px-3 py-1 text-sm rounded-full flex items-center gap-1 w-fit border', className)}>
      <Dot size={16} stroke="#213965" absoluteStrokeWidth strokeWidth={7} /> {text}
    </div>
  );
};

export default DotText;
