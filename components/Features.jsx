import { TiLocationArrow } from "react-icons/ti";


const BentoCard = ({ src, title, desc, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {desc && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{desc}</p>
          )}
        </div>
      </div>

      {isComingSoon && <p>is Coming Soon</p>}
    </div>
  )
};

const Features = () => {
  return (
    <section id='features' className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:-px-10'>
        <div className='px-5 py-32'>
          <p className="font-circular-web text-lg text-blue-50">Into the Game</p>

          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
            Immerse yourself in a rich and expansive universe. Experience your own adventure in a new and vibrant world. Explore and stay curious.
          </p>
        </div>
        <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radi<b>n</b>t</>}
            desc="A cross-platform app, turning your activities into a rewarding adventure"
            isComingSoon
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              desc="An anime and gaming-inspired collection"
            />
          </div>
          <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>n<b>e</b>xus</>}
              desc="A gamified social hub"
            />
          </div>
          <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>Az<b>u</b>l</>}
              desc="A crossworld and interactive platform"
            />
          </div>

          <div className="bento-tilt-2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">M<b>o</b>re co<b>m</b>ing soon</h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className=" size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features