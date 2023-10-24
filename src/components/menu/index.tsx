'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

export const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className='flex flex-row justify-between items-center max-w-screen-xl mx-auto'>
      <button onClick={() => setIsOpenMenu(true)}>
        <Image
          alt='Menu'
          width={28}
          height={25}
          src='/menu.svg'
          className='hidden max-md:block'
        />
      </button>

      <Image alt='Logo' width={222} height={73} src='/logo.png' />

      <div className='flex flex-row items-center gap-11 max-md:hidden'>
        <Link href='#identity'>Nossa identidade</Link>

        <Link href='#materials'>Materiais didáticos</Link>

        <Link href='#solutions'>Soluções educacionais</Link>

        <Link className='rounded-lg bg-white text-primary px-6 py-2' href='#'>
          Login
        </Link>
      </div>

      {isOpenMenu && (
        <div className='flex flex-col gap-4 fixed inset-0 bg-primary h-[100%] z-10 p-10'>
          <button 
            className='absolute top-4 right-4'
            onClick={() => setIsOpenMenu(false)}
          >
            <Image
              alt='Close'
              width={24}
              height={24}
              src='/close.svg'
              className='hidden max-md:block'
            />
          </button>

          <Image alt='Logo' width={222} height={73} src='/logo.png' />

          <Link href='#identity' onClick={() => setIsOpenMenu(false)}>Nossa identidade</Link>

          <Link href='#materials' onClick={() => setIsOpenMenu(false)}>Materiais didáticos</Link>

          <Link href='#solutions' onClick={() => setIsOpenMenu(false)}>Soluções educacionais</Link>

          <Link className='rounded-lg bg-white text-primary px-6 py-2 w-min' href='#' onClick={() => setIsOpenMenu(false)}>
            Login
          </Link>
        </div>
      )}
    </header>
  );
};
