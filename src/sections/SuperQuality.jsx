import { mishty5 } from "../assets/images";
import  Button  from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          She Loves To Play Everytime
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Energetic </span> 
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Mishty have a playful nature that lasts well into their adulthood. She enjoy games of fetch, playing with toys, and interacting with their owners and other dogs. Her playfulness often makes them great companions for families with active lifestyles.
        </p>
   
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={mishty5}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
