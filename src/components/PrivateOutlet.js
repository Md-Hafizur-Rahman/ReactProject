import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContex";

export default function PrivateOutlet() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
