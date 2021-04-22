import React from "react";
import "./images.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div>
      <h2>Image list here</h2>
      <p>Found {props.images.length} images</p>
      <div className="images-outer">{images}</div>
    </div>
  );
};
export default ImageList;
