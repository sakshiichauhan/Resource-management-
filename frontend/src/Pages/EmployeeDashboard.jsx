import React from 'react';
import CardView from '@/components/CardView';
import Sidebar from '@/components/Sidebar';
import {Link} from "react-router-dom"

const EmployeeDashboard = () => {
  return (
    <div className='flex'>
      <Sidebar className="w 1/4"/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
        {/* Card Components */}
        <Link to="/request-asset">
          <CardView description="Asset Management" title="Asset" buttonText="Open"/>
        </Link>
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
