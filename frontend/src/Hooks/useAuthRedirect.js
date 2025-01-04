import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const dashboardPath = user.role === "admin" ? "/admindash" : "/employeedash";
      navigate(dashboardPath, { replace: true });
    }
  }, [user, navigate]);
};

export default useAuthRedirect;
