const BackGroundImage = ({ img, img2 }) => {
  return (
    <div className='relative w-full h-full'>
      <img src={img} alt='Picture of kitchen' className="object-cover w-full h-full" />
      {img2 && <img src={img2} alt='Picture of kitchen' className='absolute top-0 object-cover w-full h-full' />}
    </div>
  )
}

export default BackGroundImage
