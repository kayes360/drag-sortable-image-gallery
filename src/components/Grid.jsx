import React from "react";
import ImgBox from "./ImgBox";
import AddImage from "./AddImage";

export default function Grid({
  handleCheckboxCount,
  ImageData,
  setSelectedImages,
}) {
  return (
    <div className="p-5 grid grid-cols-5 gap-4 grid-wrapper">
      {ImageData.map((image) => (
        <ImgBox
          key={image.imgId}
          imageId={image.imgId}
          imageSrc={image.imgPath}
          handleCheckboxCount={handleCheckboxCount}
          setSelectedImages={setSelectedImages}
        />
      ))}
      <AddImage />
    </div>
  );
}
