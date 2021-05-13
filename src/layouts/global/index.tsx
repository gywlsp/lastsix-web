import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import GlobalHeader from './header';
import GlobalSidebar from './sidebar';
import { LayoutProps } from '..';

export default function GlobalLayout({ children }: LayoutProps) {
  const router = useRouter();
  const { pathname } = router;

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setSidebarOpen(true);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleHeaderLeftButtonClick = isHome ? toggleSidebar : router.back;

  return (
    <>
      <GlobalHeader
        isHome={isHome}
        onLeftButtonClick={handleHeaderLeftButtonClick}
      />
      {isHome && (
        <GlobalSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      {children}
    </>
  );
}
