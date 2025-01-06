// import React from 'react';
// import CardView from '@/components/CardView';
// import Sidebar from '@/components/Sidebar';
// import { Link } from "react-router-dom";


// const EmployeeDashboard = () => {
//   return (
//     <>
//       <div className="flex min-h-screen">
//         {/* Sidebar */}
//         <Sidebar className="w-1/4 bg-gray-100 shadow-md" />
       
//         {/* Main Dashboard Content */}
//         <div className="flex-1 bg-gray-50 p-6">
//           <h1 className="text-2xl font-semibold mb-6 text-gray-700">
//             Employee Dashboard
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {/* Asset Request Card */}
//             <Link to="/request-asset">
//               <CardView
//                 description="Submit a request to acquire a new asset."
//                 title="Asset Request Form"
//                 buttonText="Open"
//               />
//             </Link>
 
//             {/* View Assets Card
//             <Link to="/employee/assets">
//               <CardView
//                 description="View all your assigned assets."
//                 title="My Assets"
//                 buttonText="View"
//               />
//             </Link>
//   */}
//             {/* Asset Replacement Card */}
//             <Link to="/replace-asset">
//               <CardView
//                 description="Request replacement of an existing asset."
//                 title="Replacement Form"
//                 buttonText="Open"
//               />
//             </Link>
 
//             {/* Maintenance Request Card */}
//             <Link to="/maintain-asset">
//               <CardView
//                 description="Track and request for maintenance."
//                 title="Maintenance Request"
//                 buttonText="Open"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default EmployeeDashboard;

import React from 'react';
import CardView from '@/components/CardView';
import Sidebar from '@/components/Sidebar';
import { Link } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar className="w-1/4 bg-gray-100 shadow-lg p-4" />
       
        {/* Main Dashboard Content */}
        <div className="flex-1 bg-gray-50 p-8">
          <h1 className="text-3xl font-semibold mb-8 text-gray-800">
            Employee Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Asset Request Card */}
            <Link to="/request-asset" className="transition-transform transform hover:scale-105">
              <CardView
                description="Submit a request to acquire a new asset."
                title="Asset Request Form"
                buttonText="Open"
              />
            </Link>
 
            {/* View Assets Card */}
            {/* 
            <Link to="/employee/assets" className="transition-transform transform hover:scale-105">
              <CardView
                description="View all your assigned assets."
                title="My Assets"
                buttonText="View"
              />
            </Link>
            */}
            
            {/* Asset Replacement Card */}
            <Link to="/replace-asset" className="transition-transform transform hover:scale-105">
              <CardView
                description="Request replacement of an existing asset."
                title="Replacement Form"
                buttonText="Open"
              />
            </Link>
 
            {/* Maintenance Request Card */}
            <Link to="/maintain-asset" className="transition-transform transform hover:scale-105">
              <CardView
                description="Track and request for maintenance."
                title="Maintenance Request"
                buttonText="Open"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
