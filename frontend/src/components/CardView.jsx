import React from 'react';

const CardView = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Card Image */}
      <div>
        <img 
          src="https://via.placeholder.com/400x250" 
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="font-semibold text-xl text-gray-800">Asset Management</div>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium, velit eu interdum.
        </p>
      </div>

      {/* Card Footer (Optional) */}
      <div className="px-4 py-2 bg-gray-100 text-right">
        <button className="text-blue-600 font-semibold hover:underline">
          Edit 
        </button>
      </div>
    </div>
  );
};

export default CardView;
