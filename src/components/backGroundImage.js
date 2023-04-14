import Image from 'next/image';

const BackGroundImage = ({ img }) => {
  return (
    <div className="base-img">
      <img src={img} alt="Picture of kitchen" layout="fill" objectFit="cover" />
    </div>
  );
};

export default BackGroundImage;
