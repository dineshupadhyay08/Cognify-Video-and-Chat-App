import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* DESKTOP SIDEBAR */}
        {showSidebar && (
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        )}

        {/* MOBILE SIDEBAR OVERLAY */}
        {showSidebar && isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* sidebar */}
            <div className="relative z-50">
              <Sidebar
                isMobile={true}
                onClose={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col">
          <Navbar
            showMenuIcon={showSidebar}
            onMenuClick={() => setIsMobileMenuOpen(true)}
          />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
