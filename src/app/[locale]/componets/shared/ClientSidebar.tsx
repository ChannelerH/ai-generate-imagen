"use client";

import { useState } from "react";
import Sidebar from "@/app/[locale]/componets/shared/sidebar";

const ClientSidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />;
};

export default ClientSidebar;