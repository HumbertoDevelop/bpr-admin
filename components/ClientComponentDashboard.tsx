"use client";
import { AuthProvider } from "Providers/AuthProvider";
import React, { useCallback, useState } from "react";
import NavbarVertical from "../layouts/navbars/NavbarVertical";
import NavbarTop from "../layouts/navbars/NavbarTop";

export function ClientComponentDashboard({ children }: { children: React.ReactNode }) {
    
  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu]);
  return (
    <AuthProvider>
        <div id="db-wrapper" className={`${showMenu ? "" : "toggled"}`}>
          <div className="postion-relative"></div>
          <div className="navbar-vertical navbar">
            <NavbarVertical
              showMenu={showMenu}
              onClick={(value) => setShowMenu(value)}
            />
          </div>
          <div id="page-content">
            <div className="header">
              <NavbarTop
                data={{
                  showMenu: showMenu,
                  SidebarToggleMenu: ToggleMenu,
                }}
              />
            </div>
            {children}
          </div>
        </div>
    </AuthProvider>
  );
}
