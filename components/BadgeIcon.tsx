import React from 'react';
import { BADGES } from '../badges';
import StarIcon from './icons/StarIcon';

const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 0 1.5 1.5 0 01-2.122 0A.75.75 0 008.25 3v2.25a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75h-.007zM12 15a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 15z" clipRule="evenodd" />
    <path d="M11.603 4.238a.75.75 0 01.794 0l.966 1.932a.75.75 0 00.564.41l2.133.309a.75.75 0 01.416 1.279l-1.543 1.503a.75.75 0 00-.215.664l.364 2.123a.75.75 0 01-1.088.791l-1.906-1a.75.75 0 00-.7-.001l-1.906 1a.75.75 0 01-1.088-.79l.364-2.124a.75.75 0 00-.215-.664L4.23 8.169a.75.75 0 01.416-1.28l2.133-.309a.75.75 0 00.564-.41l.966-1.931z" />
  </svg>
);

const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 4.06c0-1.336-1.616-2.25-2.831-1.543l-1.12 1.12a1.5 1.5 0 01-2.12 0L6.08 2.28c-1.215-.707-2.831.207-2.831 1.543v1.732a1.5 1.5 0 01-.71 1.258l-1.12 1.122a1.5 1.5 0 000 2.12l1.12 1.12a1.5 1.5 0 01.71 1.258v1.732c0 1.336 1.616 2.25 2.831 1.543l1.12-1.12a1.5 1.5 0 012.12 0l1.329 1.329a1.5 1.5 0 002.12 0l1.12-1.12c1.215-.707 2.831.207 2.831-1.543V13.5a1.5 1.5 0 01.71-1.258l1.12-1.12a1.5 1.5 0 000-2.12l-1.12-1.122a1.5 1.5 0 01-.71-1.258V4.06zM8.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" />
  </svg>
);

const CrownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M18 9a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-1.5zM6 9a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h1.5A1.5 1.5 0 019 6v1.5A1.5 1.5 0 017.5 9H6zM12 11.25a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v3.75a1.5 1.5 0 01-1.5 1.5h-1.5z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M3 14.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        <path d="M12 21a8.25 8.25 0 006.33-13.437c.18-.18.355-.366.522-.552a.75.75 0 00-1.034-1.082 10.45 10.45 0 00-1.855 1.416A8.25 8.25 0 0012 21z" />
        <path d="M12 21a8.25 8.25 0 01-6.33-13.437c-.18-.18-.355-.366-.522-.552a.75.75 0 011.034-1.082 10.45 10.45 0 011.855 1.416A8.25 8.25 0 0112 21z" />
    </svg>
);

const ICONS = {
  rocket: RocketIcon,
  star: StarIcon,
  trophy: TrophyIcon,
  crown: CrownIcon,
};

const COLORS = {
  rocket: 'text-cyan-400',
  star: 'text-yellow-400',
  trophy: 'text-amber-400',
  crown: 'text-pink-400',
};

interface BadgeIconProps {
  badgeId: string;
}

export default function BadgeIcon({ badgeId }: BadgeIconProps) {
  const badge = BADGES[badgeId];
  if (!badge) return null;

  const IconComponent = ICONS[badge.iconType];
  const colorClass = COLORS[badge.iconType];

  return (
    <div className="group relative flex flex-col items-center">
      <div className={`w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center ${colorClass}`}>
        <IconComponent className="w-9 h-9" />
      </div>
      <p className="text-xs mt-1 text-slate-300 font-semibold">{badge.name}</p>
      <div className="absolute bottom-full mb-2 w-max max-w-xs p-2 text-sm text-white bg-slate-900 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {badge.description}
      </div>
    </div>
  );
}
