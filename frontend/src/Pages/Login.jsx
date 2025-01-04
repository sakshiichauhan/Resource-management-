import React, { useState, useEffect } from "react";
import { setUser, setLoading } from "../redux/authSlice";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { RadioGroup } from "../components/ui/radio-group";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "employee", // Set a default role
  });
  const { loading } = useSelector((store) => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password || !input.role) {
      toast.error("All fields are required!");
      return;
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API_END_POINT}/userlogin`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        const dashboardPath = input.role === "admin" ? "/admindash" : "/employeedash";
        navigate(dashboardPath); // Redirect based on role
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/"); // Redirect to home if already logged in
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md border border-gray-200 rounded-md p-6 my-10"
      >
        <h1 className="font-bold text-2xl mb-6 text-center">Login</h1>
        <div className="my-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
            placeholder="example@gmail.com"
            className="w-full"
          />
        </div>
        <div className="my-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
            placeholder="**********"
            className="w-full"
          />
        </div>
        <div className="my-6">
          <Label>Role</Label>
          <RadioGroup className="flex items-center gap-4 my-4">
            <div className="flex items-center space-x-2">
              <Input
                id="employee"
                type="radio"
                name="role"
                value="employee"
                checked={input.role === "employee"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="employee">Employee</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                id="admin"
                type="radio"
                name="role"
                value="admin"
                checked={input.role === "admin"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="admin">Admin</Label>
            </div>
          </RadioGroup>
        </div>
        {loading ? (
          <Button disabled className="w-full flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in...
          </Button>
        ) : (
          <Button type="submit" className="w-full">
            Login
          </Button>
        )}
        <div className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
