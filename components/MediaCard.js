import Image from 'next/image'

export default function MediaCard({imageSrc, title, description, podcastSrc }) {
  return (
    <>
    <div class="w-full border-1 border-solid border-slate-200 dark:border-slate-700 rounded-lg">
        <div class="w-full aspect-square">
{/*           <Image
            src={imageSrc}
            alt={title}
            sizes="(max-width: 800px) 100vw, 400px"
            widths={[200, 400]}
            aspectRatio="1:1"
            background="#ffffff"
            fit="cover"
            position="center"
            class="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          /> */}
        <img src={imageSrc} alt={title} className="w-full aspect-square object-cover" />
        </div>
        <div class="mt-4 text-center">
          <h2 class="font-bold">
            {title}
          </h2>
          <p class="text-left p-4">{description}</p>
          <center><iframe class="w-full overflow-hidden" scrolling="no" src={podcastSrc} title={title} height={170} ></iframe></center>
        </div>
      </div>
    </>
  );
}

