// import Image from 'next/image'

const HomeSection1 = ({ title, subtitle, imgSrc }) => (
  <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5">
    <div className="relative">
{/*       <Image
        className={'h-72'}
        src={imgSrc}
        alt={title}
        width={'1536'}
        height={'405'}
        objectFit="cover"
      /> */}
      <img src={imgSrc} alt={title} className="w-full h-72 md:h-80 object-cover" />
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 px-4 py-2 bg-neutral-100/80 dark:bg-neutral-700/70 rounded-bl-lg rounded-br-lg">
        <h1 className="text-3xl lg:text-5xl font-bold text-center">{title}</h1>
        <p className="text-md lg:text-xl mt-2 italic text-center">{subtitle}</p>
      </div>
    </div>
  </div>
)

export default HomeSection1
