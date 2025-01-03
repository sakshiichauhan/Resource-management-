import assets from '../assets/Alphericlogo.png'; 
import React, { useEffect } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover'; // Import Popover
import { User2, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // For routing
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/authSlice'; 
import { toast } from 'sonner'; 
import { USER_API_END_POINT } from '@/utils/constant';
import { Button } from './ui/button'; // Assuming you're using Radix for buttons

const Navbar = () => {
  const { user } = useSelector((store) => store.auth); // Access user from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirect to dashboard based on role (admin or employee)
  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admindash');
      } else if (user.role === 'employee') {
        navigate('/employeedash');
      }
    }
  }, [user, navigate]); // Re-run when `user` changes (after login or logout)

  // Logout handler
  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_END_POINT}/userlogout`, {}, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null)); // Remove user data from Redux
        navigate("/"); // Redirect to the home page or login
        toast.success(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data?.message || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={assets} alt="AlphericLogo.png" className="w-10 h-auto mr-4" />
          <h1 className="text-2xl text-white font-bold">AssetManagement</h1>
        </div>

        {/* Admin-specific Links */}
        {user && user.role === 'admin' && (
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard" className="hover:text-yellow-400 transition-colors duration-200">
              Admin Dashboard
            </Link>
            <Link to="/admin/users" className="hover:text-yellow-400 transition-colors duration-200">
              Users
            </Link>
            <Link to="/admin/assets" className="hover:text-yellow-400 transition-colors duration-200">
              Assets
            </Link>
          </div>
        )}

        {/* Navbar Links for both Admin and Employee */}
        {!user || user.role === 'employee' ? (
          <ul className="flex space-x-6 text-white">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/assetmanagement" className="hover:text-yellow-400 transition-colors duration-200">
                Asset Management
              </Link>
            </li>
            <li>
              <Link to="/foodcourt" className="hover:text-yellow-400 transition-colors duration-200">
                Food Court Menu
              </Link>
            </li>
            <li>
              <Link to="/alerts" className="hover:text-yellow-400 transition-colors duration-200">
                Alerts
              </Link>
            </li>
          </ul>
        ) : null}

        {/* Authentication Links */}
        {!user ? (
          <div className='flex items-center gap-2'>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="cursor-pointer">{user?.fullname}</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div>
                <div className='flex gap-2 space-y-2'>
                  <div>
                    <h4 className='font-medium'>{user?.fullname}</h4>
                    <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className='flex flex-col my-2 text-gray-600'>
                  {user && user.role === 'employee' && (
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <User2 />
                      <Link to="/profile">
                        <Button variant="link">View Profile</Button>
                      </Link>
                    </div>
                  )}
                  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
