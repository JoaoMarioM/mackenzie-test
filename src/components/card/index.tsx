import Image from 'next/image';
import { CardProps } from './interface';

export const Card = ({
  text,
  image,
  button,
  children,
  className,
  classNameImage,
}: CardProps) => {
  return (
    <div
      className={`flex flex-row gap-8 mx-auto max-w-screen-xl px-4 justify-between max-[900px]:flex-col max-[900px]:items-center max-[900px]:flex-col-reverse ${className}`}
    >
      <p className='text-gray w-[50%] max-[900px]:w-[100%] '>
        {children}
        {text} <br />
        {button && (
          <button className='text-primary font-bold w-fit py-2'>
            SAIBA MAIS
          </button>
        )}
      </p>

      <div
        className={`relative max-w-xl w-[100%] max-[1205px]:max-w-[400px] max-[900px]:max-w-xl ${classNameImage}`}
      >
        <Image
          alt={image}
          fill
          src={`/images/${image}.png`}
          className='rounded-3xl max-w-xl !static object-cover object-center'
        />
      </div>
    </div>
  );
};
