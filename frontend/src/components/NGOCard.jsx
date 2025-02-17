import React from "react";

const NGOCard = ({ name, address, images, link, city }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={images[0]}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">{address}</p>
      <p className="text-lg text-gray-600 mt-1">{city}</p> {/* Add the city display */}

      {/* Beautified Visit Website Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-300 to-pink-300 text-purple-900 text-sm px-3 py-2 rounded mt-3 font-semibold transition duration-300 hover:from-pink-500 hover:to-purple-500 shadow-md"
      >
        Visit Website
      </a>
    </div>
  );
};

export default NGOCard;
