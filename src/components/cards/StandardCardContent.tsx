'use client';
import { LucideIcon } from 'lucide-react';

interface StandardCardContentProps {
  icon: LucideIcon;
  title: string;
  count: string;
}

export default function StandardCardContent({ icon: Icon, title, count }: StandardCardContentProps) {
  return (
    <div className="relative h-full flex flex-col items-center justify-center p-8 text-white z-10">
      <div className="relative mb-4">
        <Icon className="w-16 h-16 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)] relative z-10" />
        <Icon className="w-16 h-16 text-magenta-500/40 absolute top-0 left-0 translate-x-0.5 translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-3xl font-black tracking-tight mb-2 relative">
        <span className="relative z-10 text-white group-hover:text-lime-400 transition-colors duration-200">
          {title}
        </span>
        <span className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-80 animate-glitch-text-1" aria-hidden="true">
          {title}
        </span>
        <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-80 animate-glitch-text-2" aria-hidden="true">
          {title}
        </span>
      </h3>
      <div className="px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-sm font-mono">
        {count}
      </div>
    </div>
  );
}
