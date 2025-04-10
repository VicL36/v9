// components/ui/Sidebar.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside
      className={cn(
        "bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border",
        isCollapsed ? "w-16" : "w-60",
        "transition-all duration-300"
      )}
    >
      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="mb-4 p-2 bg-sidebar-accent text-sidebar-accent-foreground rounded"
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </button>

        {/* Example navigation links */}
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;