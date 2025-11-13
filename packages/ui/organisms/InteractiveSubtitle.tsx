'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface InteractiveSubtitleProps {
  onLinkHover?: (type: 'joint-ventures' | 'growth-team' | null) => void;
  hoveredShape?: { index: number; label: string; color: string } | null;
}

export function InteractiveSubtitle({ 
  onLinkHover, 
  hoveredShape 
}: InteractiveSubtitleProps) {
  const [isJointVenturesHovered, setIsJointVenturesHovered] = useState(false);
  const [isGrowthTeamHovered, setIsGrowthTeamHovered] = useState(false);

  // Map shape indices to links and colors
  const shapeToLinkMap: Record<number, { link: 'joint-ventures' | 'growth-team'; colorClass: string }> = {
    0: { link: 'joint-ventures', colorClass: 'text-blue-500' }, // Triangle - blue
    1: { link: 'growth-team', colorClass: 'text-green-500' }, // Square - green
    2: { link: 'growth-team', colorClass: 'text-red-500' }, // Circle - red
    3: { link: 'joint-ventures', colorClass: 'text-yellow-500' }, // Diamond - yellow
    4: { link: 'joint-ventures', colorClass: 'text-purple-500' }, // Plus - purple
  };

  const handleJointVenturesHover = (hovered: boolean) => {
    setIsJointVenturesHovered(hovered);
    if (onLinkHover) {
      onLinkHover(hovered ? 'joint-ventures' : null);
    }
  };

  const handleGrowthTeamHover = (hovered: boolean) => {
    setIsGrowthTeamHovered(hovered);
    if (onLinkHover) {
      onLinkHover(hovered ? 'growth-team' : null);
    }
  };

  const getShapeIcon = (index: number) => {
    const shape = {
      0: { bg: 'bg-blue-500', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' },
      1: { bg: 'bg-green-500', clipPath: '' },
      2: { bg: 'bg-red-500', clipPath: '', rounded: 'rounded-full' },
      3: { bg: 'bg-yellow-500', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' },
      4: { bg: 'bg-purple-500', clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)' },
    }[index];
    
    if (!shape) return null;
    
    return (
      <span 
        className={`w-2 h-2 ${shape.bg} inline-block flex-shrink-0 ${shape.rounded || ''}`}
        style={shape.clipPath ? { clipPath: shape.clipPath } : undefined}
      />
    );
  };

  return (
    <>
      We acquire Minnesota businesses through{' '}
      <Link 
        href="/how-it-works/joint-ventures" 
        className={`underline transition-colors relative group inline-block touch-manipulation ${
          hoveredShape && shapeToLinkMap[hoveredShape.index]?.link === 'joint-ventures'
            ? shapeToLinkMap[hoveredShape.index].colorClass
            : 'hover:text-black active:text-black'
        }`}
        onMouseEnter={() => handleJointVenturesHover(true)}
        onMouseLeave={() => handleJointVenturesHover(false)}
        onTouchStart={() => handleJointVenturesHover(true)}
        onTouchEnd={() => {
          setTimeout(() => handleJointVenturesHover(false), 300);
        }}
      >
        joint-ventures
        {/* Show label when shape is hovered */}
        {hoveredShape && shapeToLinkMap[hoveredShape.index]?.link === 'joint-ventures' && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div className="bg-black text-white text-xs font-medium px-3 py-2 rounded shadow-xl flex items-center gap-2 whitespace-nowrap">
              {getShapeIcon(hoveredShape.index)}
              {hoveredShape.label}
            </div>
            {/* Arrow pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
          </span>
        )}
        {/* Default hover labels for Triangle, Diamond, and Plus */}
        {!hoveredShape && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div className="bg-black text-white text-xs font-medium px-3 py-2 rounded shadow-xl flex flex-col gap-2 items-start min-w-[120px]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 inline-block flex-shrink-0" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                Acquisition
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 inline-block flex-shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                Equity
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 inline-block flex-shrink-0" style={{ clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)' }} />
                Transition
              </span>
            </div>
            {/* Arrow pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
          </span>
        )}
      </Link>
      {' '}— and we run a{' '}
      <Link 
        href="/how-it-works/inhouse-growth-team" 
        className={`underline transition-colors relative group inline-block touch-manipulation ${
          hoveredShape && shapeToLinkMap[hoveredShape.index]?.link === 'growth-team'
            ? shapeToLinkMap[hoveredShape.index].colorClass
            : 'hover:text-black active:text-black'
        }`}
        onMouseEnter={() => handleGrowthTeamHover(true)}
        onMouseLeave={() => handleGrowthTeamHover(false)}
        onTouchStart={() => handleGrowthTeamHover(true)}
        onTouchEnd={() => {
          setTimeout(() => handleGrowthTeamHover(false), 300);
        }}
      >
        inhouse growth team
        {/* Show label when shape is hovered */}
        {hoveredShape && shapeToLinkMap[hoveredShape.index]?.link === 'growth-team' && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div className="bg-black text-white text-xs font-medium px-3 py-2 rounded shadow-xl flex items-center gap-2 whitespace-nowrap">
              {getShapeIcon(hoveredShape.index)}
              {hoveredShape.label}
            </div>
            {/* Arrow pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
          </span>
        )}
        {/* Default hover labels for Square and Circle */}
        {!hoveredShape && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div className="bg-black text-white text-xs font-medium px-3 py-2 rounded shadow-xl flex flex-col gap-2 items-start min-w-[120px]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 inline-block flex-shrink-0" />
                Lending
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full inline-block flex-shrink-0" />
                Scale
              </span>
            </div>
            {/* Arrow pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
          </span>
        )}
      </Link>
      {' '}for owners who want to scale instead of sell.
    </>
  );
}

