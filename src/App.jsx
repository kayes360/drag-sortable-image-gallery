import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import ImageData from "./ImgData";

function App() {
  const [checkedCount, setCheckedCount] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [filteredImageData, setFilteredImageData] = useState([]);
  const handleCheckboxCount = (isChecked) => {
    setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };
  const handleDelete = () => {
    console.log(selectedImages);

    const updatedImageData = ImageData.filter(
      (item) => !selectedImages.includes(item.imgId)
    );
    setFilteredImageData(updatedImageData);
    setSelectedImages([]);
    setCheckedCount(0);
  };
  useEffect(() => {
    setFilteredImageData(ImageData);
  }, [setFilteredImageData]);

  return (
    <div className="bg-slate-100 ">
      <div className=" flex justify-center items-center h-screen ">
        <div className=" wrapper container bg-white rounded-md shadow  my-5  w-6/12 divide-y-2">
          <Header
            className="p-5"
            checkedCount={checkedCount}
            handleDelete={handleDelete}
          />
          <Grid
            className="p-5"
            ImageData={filteredImageData}
            handleCheckboxCount={handleCheckboxCount}
            setSelectedImages={setSelectedImages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
