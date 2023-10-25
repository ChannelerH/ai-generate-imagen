"use client";


import { ReactNode, useState } from "react";
import Sidebar from "@/app/componets/shared/sidebar";
import { RiMenu2Line  } from "react-icons/ri";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
      <header className="flex">
        <button type="button" className="xl:hidden">
          <RiMenu2Line onClick={() => setShowMenu(true)} />
        </button>
        
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
