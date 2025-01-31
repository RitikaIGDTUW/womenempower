import React from "react";

const SuccessStoryCard = ({ story }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-lilac-300 flex flex-col items-center">
      <div className="w-full">
        <img
          src={story.imageUrl}
          alt={story.name}
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="p-6 w-full">
        <h3 className="text-2xl font-semibold text-pink-600">{story.name}</h3>
        <p className="mt-4 text-gray-600">{story.story}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
