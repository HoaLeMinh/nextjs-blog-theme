import Image from 'next/image'

const HomeSection1 = ({ title, subtitle, imgSrc }) => (
  <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5">
    <div className="relative">
      <Image
        className={'rounded-t-lg'}
        src={imgSrc}
        alt={title}
        width={'1920'}
        height={'560'}
        objectFit="cover"
      />
      {/* <img src={imgSrc} alt={title} className="w-full object-cover" height="560" /> */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 px-4 py-2 bg-gray-800 opacity-70">
        <h1 className="text-white font-bold text-center">{title}</h1>
        <p className="text-md mt-2 italic text-white text-center">{subtitle}</p>
      </div>
    </div>
  </div>
)

export default HomeSection1
