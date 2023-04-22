import MyCarousel from './MyCarousel';

export default function ProjectCard({title, description, imagesSrc }) {
  return (
    <>
    <div className="w-full border-2 border-solid border-slate-300 dark:border-slate-500 rounded-lg">
          <MyCarousel images={imagesSrc} className="w-full" />
        <div className="text-center">
          <h2 className="text-xl font-bold p-1">
            {title}
          </h2>
          <p className="text-md text-left p-4 mb-4">{description}</p>
        </div>
      </div>
    </>
  );
}

