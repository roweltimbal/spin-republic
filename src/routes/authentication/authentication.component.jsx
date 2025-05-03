import { Outlet, Navigate, useLocation } from "react-router-dom";

const Authentication = () => {
  const location = useLocation();
  if (location.pathname === "/auth") {
    return <Navigate to="/auth/signup" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Authentication;
