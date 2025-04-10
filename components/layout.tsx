// components/layout.tsx
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './Sidebar';
import { Toaster } from '@/components/ui/Toaster'; // Certifique-se que o arquivo é "Toaster.tsx"
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Exemplo: buscar um estado inicial do localStorage (se existir)
    const initial = localStorage.getItem('sidebar-collapsed') === 'true';
    setIsSidebarCollapsed(initial);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('sidebar-collapsed', isSidebarCollapsed.toString());
    }
  }, [isSidebarCollapsed, isMounted]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev);
  }, []);

  // Define o padding com base no estado do sidebar
  const mainPaddingClass = isMounted ? (isSidebarCollapsed ? "pl-16" : "pl-60") : "pl-16";

  return (
    <div className="flex min-h-screen bg-[#0e1015]">
      {isMounted && <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />}
      <main className={`${mainPaddingClass} transition-all duration-300 flex-1`}>
        {children}
      </main>
      {/* Toaster para notificações */}
      <Toaster />
    </div>
  );
};

export default Layout;
