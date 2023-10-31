import React, { useState } from "react";

export default function ImgBox({imageId, imageSrc, handleCheckboxCount, setSelectedImages}) {
  const [isHovered, setHovered] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isChecked) {
      setHovered(false);
    }
  };

  const handleCheckboxChange = () => {
    const newIsChecked = !isChecked;
    setChecked(newIsChecked);
    handleCheckboxCount(newIsChecked);
  
    if (newIsChecked) {
      // Add the imageId to the selectedImages array
      setSelectedImages((prevSelectedImages) => [
        ...prevSelectedImages,
        imageId,
      ]);
    } else {
      // Remove the imageId from the selectedImages array
      setSelectedImages((prevSelectedImages) =>
        prevSelectedImages.filter((id) => id !== imageId)
      );
    }
  };
  
  

  return (
    <div
      className={`relative `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        className="rounded-md border border-slate-300"
        alt=""
        onClick={handleCheckboxChange}
      />

      <label
        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-md cursor-pointer ${
          isHovered || isChecked ? "opacity-100" : "opacity-0"
        }`}
      >
        <input
          type="checkbox"
          value={imageId}
          checked={isChecked}
          onChange={(e)=>handleCheckboxChange(e)}
          className="w-5 h-5 mt-2 ms-2 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </label>
    </div>
  );
}
