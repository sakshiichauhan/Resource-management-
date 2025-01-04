import React from "react";

const DashboardCard = ({ title, count, icon, onClick }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between cursor-pointer hover:shadow-xl transition"
      onClick={onClick}
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{count}</p>
      </div>
      <div className="text-gray-500 text-4xl">{icon}</div>
    </div>
  );
};

export default DashboardCard;
