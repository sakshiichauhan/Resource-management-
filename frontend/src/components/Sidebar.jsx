import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-60 min-h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/employeedash" className="block hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/employee/assets" className="block hover:text-blue-400">
            My Assets
          </Link>
        </li>
        <li>
          <Link to="/employee/requests" className="block hover:text-blue-400">
            Asset Requests
          </Link>
        </li>
        <li>
          <Link to="/employee/maintenance" className="block hover:text-blue-400">
            Maintenance Requests
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
