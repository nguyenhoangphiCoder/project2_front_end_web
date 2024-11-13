import LayoutSidebar from "@/components/layout/sidebar";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PageHome = () => {
  const { isAuth } = useAuthStore();

  useEffect(() => {
    if (!isAuth) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <LayoutSidebar>
      <Outlet />
    </LayoutSidebar>
  );
};

export default PageHome;
