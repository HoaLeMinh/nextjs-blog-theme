import Image from 'next/image'

export default function MediaCard({imageSrc, title, description, podcastSrc }) {
  return (
    <>
    <div className="w-full border-1 border-solid border-slate-200 dark:border-slate-700 rounded-lg">
        {/* <div className="w-full aspect-square"> */}
          <Image
            src={imageSrc}
            alt={title}
            width={640}
            height={524}
            fit="contain"
            position="center"
            className="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        {/* <img src={imageSrc} alt={title} className="w-full aspect-square object-cover" /> */}
        {/* </div> */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold p-4">
            {title}
          </h2>
          <p className="text-md text-left p-4 ">{description}</p>
          <center className={'aspect-video'}><iframe loading="lazy" className="w-full h-full overflow-hidden" scrolling="no" allow="accelerometer; autoplay;" src={podcastSrc} title={title} height={170} ></iframe></center>
        </div>
      </div>
    </>
  );
}

