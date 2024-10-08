'use client';

import { BLOG_CATEGORIES } from '@/config';
import { useEffect, useRef, useState } from 'react';
import NavItem from './NavItem';
import { useOnClickOutside } from '@/hooks/use-onclick-outside';

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null));

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {BLOG_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            handleClose();
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;

        return <NavItem category={category} handleOpen={handleOpen} handleClose={handleClose} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen} />;
      })}
    </div>
  );
};

export default NavItems;
