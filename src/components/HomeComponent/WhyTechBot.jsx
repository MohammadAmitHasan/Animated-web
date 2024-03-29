import Button from '@/components/ui/Button';
import HeadingText from '@/components/ui/HeadingText';
import { fadeInUp } from '@/utils/framerAnimation';
import Image from 'next/image';
import { FaApple } from 'react-icons/fa';
import AnimatedComponent from '../ui/AnimatedComponent';

const WhyTechBot = () => {
  return (
    <div className="container mx-auto px-3 max-w-[1424px] font-semibold">
      <AnimatedComponent variants={fadeInUp}>
        <HeadingText
          text={
            <>
              Why is TechBot the <br />
              <span className="gradient-color">best GPT</span> app for you?
            </>
          }
        />
      </AnimatedComponent>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
        <div className="row-span-2 px-5 md:px-10 py-10 md:py-14 bg-white rounded-3xl shadow-lg">
          <AnimatedComponent variants={fadeInUp}>
            <div className="relative aspect-[2/3]">
              <Image
                loading="lazy"
                src={'/images/w3.png'}
                fill
                sizes="100%"
                alt="mobile"
              />
              <div className="h-[30%] absolute top-auto bottom-[0%] left-[0%] right-[0%] bg-gradient-to-b from-transparent to-white via-transparent"></div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-2xl md:text-3xl font-bold my-4">
                Prompt library
              </h3>
              <p className="leading-8 text-lg">
                Duis aute irure dolor reprehenderit in voluptate velit esse
                cillum dolore eu ut enim ad minim veniam quiscupidatat non
                proident.
              </p>
            </div>
          </AnimatedComponent>
        </div>

        <div className="py-10 text-center shadow-lg bg-white rounded-3xl">
          <AnimatedComponent variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold my-4">
              100+ plugins
            </h3>
            <p className="leading-8 text-lg px-3">
              Duis aute irure dolor in reprehenderit inolerol voluptate velit
              esse cillum dolore euut.
            </p>
            <div className="w-full relative h-24 xs:h-36 sm:h-48 md:h-36 xl:h-48 mt-5">
              <Image
                loading="lazy"
                src={'/images/w2.svg'}
                className="object-cover"
                fill
                sizes="100"
                alt="logos"
              />
            </div>
          </AnimatedComponent>
        </div>

        <AnimatedComponent
          variants={fadeInUp}
          className={
            'py-10 text-center shadow-lg rounded-3xl flex justify-center items-center gradient-bg-1 text-white h-80 md:h-full sm:h-96'
          }
        >
          <div>
            <h1 className="text-7xl sm:text-[120px] font-bold">GPT4</h1>
            <h6 className="text-3xl font-bold">Latest API model</h6>
          </div>
        </AnimatedComponent>

        <AnimatedComponent
          variants={fadeInUp}
          className={
            'py-10 text-center shadow-lg rounded-3xl flex justify-center items-center gradient-bg-2 text-white h-80 md:h-full sm:h-96'
          }
        >
          <div>
            <h1 className="text-7xl sm:text-[120px] font-bold">50K</h1>
            <h6 className="text-3xl font-bold">Token context</h6>
          </div>
        </AnimatedComponent>

        <AnimatedComponent variants={fadeInUp}>
          <div className="py-10 text-center shadow-lg bg-white rounded-3xl px-5 md:px-10">
            <div className="relative w-full aspect-[2/1.2]">
              <Image
                loading="lazy"
                fill
                sizes="100%"
                src={'/images/w1.png'}
                alt="conversation"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold my-4">
                Conversational history
              </h3>
              <p className="leading-8 text-lg">
                Duis aute irure dolor in reprehenderit inolerol voluptate velit
                esse cillum dolore
              </p>
            </div>
          </div>
        </AnimatedComponent>
      </div>

      <AnimatedComponent
        variants={fadeInUp}
        className={'flex justify-center mt-5'}
      >
        <Button className={'py-4 w-full sm:w-64'}>
          <FaApple className="mb-0.5" />
          <span>Download for iOS</span>
        </Button>
      </AnimatedComponent>
    </div>
  );
};
export default WhyTechBot;
