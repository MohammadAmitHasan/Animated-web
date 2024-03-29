'use client';
import Button from '@/components/ui/Button';
import LinkComponents from '@/components/ui/LinkComponent';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { megaMenu } from '../../../utils/framerAnimation';
import GroupLinks from './GroupLinks';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [pageOpen, setPageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-medium">
      <div className="bg-neutral px-5 py-2 flex justify-between xl:grid grid-cols-5 items-center text-neutral-text relative z-50 max-w-[1400px] mx-auto pt-5">
        <Link
          className="w-[150px] h-[50px] hover:transform hover:translate-y-[-3px] transition-transform duration-200 relative"
          href={'/'}
        >
          <Image
            className="object-contain"
            fill
            src={'/images/logo.png'}
            alt="logo"
            sizes="100%"
            priority
          ></Image>
        </Link>

        {/* Menus */}
        <div className="space-x-10 col-span-3 lg:flex justify-center hidden text-neutral-text">
          <GroupLinks />
          <div
            onMouseEnter={() => setPageOpen(true)}
            onMouseLeave={() => setPageOpen(false)}
          >
            <div className="flex items-center space-x-0.5 hover:text-hover-colo cursor-pointer">
              <span>Pages</span>
              {pageOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {/* mega menu */}
            <AnimatePresence>
              {pageOpen && (
                <motion.div
                  className="absolute w-full left-0"
                  initial="hidden"
                  animate={pageOpen ? 'visible' : 'hidden'}
                  exit="hidden"
                  variants={megaMenu}
                >
                  <div
                    className="rounded-3xl shadow-lg p-8 pt-5 mx-auto max-w-[750px] mt-3 bg-white"
                    onMouseLeave={() => setPageOpen(false)}
                  >
                    <LinkComponents />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link className="hover:text-hover-color hidden md:block" href={'/'}>
            Cart (0)
          </Link>
        </div>

        <div className="flex justify-end items-center space-x-5">
          <Link className="hover:text-hover-color lg:hidden" href={'/'}>
            Cart (0)
          </Link>

          <div className="sm:block hidden">
            <Button className={'text-sm '}>
              <FaApple className="mb-0.5" />
              <span>Download for iOS</span>
            </Button>
          </div>
          <div
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.div
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </motion.div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <MobileMenu
        pageOpen={pageOpen}
        menuOpen={menuOpen}
        setPageOpen={setPageOpen}
      />
    </div>
  );
};
export default Header;
