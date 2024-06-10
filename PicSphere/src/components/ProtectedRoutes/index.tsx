import { Navigate, Outlet, useLocation } from "react-router-dom";

// type Props = {}

const ProtectedRoutes = () => {
  const isAuth = true;
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
