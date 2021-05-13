import React, {
  ReactNode,
  ReactNodeArray,
  useState,
  useLayoutEffect,
} from 'react';

import GlobalHeader from './header';
import GlobalSidebar from './sidebar';

export type GlobalLayoutProps = {
  children: ReactNode | ReactNodeArray;
};

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useLayoutEffect(() => {
    if (window.innerWidth <= 1024) {
      setSidebarOpen(false);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <GlobalHeader toggleSidebar={toggleSidebar} />
      <GlobalSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {children}
    </>
  );
}
