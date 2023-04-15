const BackGroundImage = ({ img, img2 }) => {
  return (
    <div className="relative w-full h-full">
      <img src={img} alt="Picture of kitchen" />
      {img2 && <img src={img2} alt="Picture of kitchen" className="absolute top-0" />}
    </div>
  );
};

export default BackGroundImage;
