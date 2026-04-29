import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!showSidebar) return;

    document.documentElement.classList.add("page-scroll-lock");
    document.body.classList.add("page-scroll-lock");

    return () => {
      document.documentElement.classList.remove("page-scroll-lock");
      document.body.classList.remove("page-scroll-lock");
    };
  }, [showSidebar]);

  return (
    <div className={showSidebar ? "h-screen overflow-hidden bg-base-100" : "min-h-screen bg-base-100"}>
      <div className={showSidebar ? "flex h-full overflow-hidden" : "flex min-h-screen"}>
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

        <div className={showSidebar ? "flex-1 min-w-0 flex h-full flex-col overflow-hidden" : "flex-1 min-w-0 flex flex-col"}>
          <Navbar
            showMenuIcon={showSidebar}
            onMenuClick={() => setIsMobileMenuOpen(true)}
          />

          <main className={showSidebar ? "flex-1 min-h-0 overflow-y-auto bg-base-100" : "flex-1 min-h-0 bg-base-100"}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
