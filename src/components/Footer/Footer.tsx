'use client';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <section
      className="w-[calc(100vw-96px)] max-w-[1040px] py-8 px-12 pb-10 mx-4 my-4 box-content
        sm:w-[calc(100vw-32px)] sm:px-4 sm:pb-12"
    >
      <ul
        className="border-t border-white/10 grid grid-cols-[repeat(3,minmax(85px,220px))] gap-10 py-10 pt-10
          lg:py-8 lg:pb-4
          md:w-full md:py-8 md:pb-4 md:gap-4
          sm:w-full sm:py-8 sm:px-1 sm:pb-4 sm:gap-1"
      >
        <div className="flex flex-col max-w-[220px] w-full">
          <h4 className="font-semibold text-xs leading-6 uppercase text-white/40 mb-4 sm:text-[10px] sm:leading-3 sm:mb-2">
            Call
          </h4>
          <a
            href="tel:123-456-7890"
            className="text-lg leading-[30px] text-white/75 mb-4 transition-all duration-300 relative left-0 hover:text-white hover:left-1.5 md:text-base md:leading-7 md:flex sm:text-[8px] sm:leading-[14px] sm:mb-2 sm:items-center"
          >
            123-456-7890
          </a>
        </div>
        <div className="flex flex-col max-w-[220px] w-full">
          <h4 className="font-semibold text-xs leading-6 uppercase text-white/40 mb-4 sm:text-[10px] sm:leading-3 sm:mb-2">
            Email
          </h4>
          <a
            href="mailto:contact@johndoe.com"
            className="text-lg leading-[30px] text-white/75 mb-4 transition-all duration-300 relative left-0 hover:text-white hover:left-1.5 md:text-base md:leading-7 md:flex sm:text-[8px] sm:leading-[14px] sm:mb-2 sm:items-center"
          >
            contact@johndoe.com
          </a>
        </div>
      </ul>
      <div
        className="max-w-[1040px] flex justify-between
          md:justify-center md:pr-4 md:flex-wrap
          sm:w-full sm:flex-col"
      >
        <div
          className="flex items-baseline flex-wrap mr-auto
            md:flex-col md:items-baseline
            sm:flex-col sm:mx-0 sm:mb-8 sm:items-center"
        >
          <p className="text-white/50 min-w-[280px] tracking-wide text-lg leading-[30px] p-4 md:text-base md:leading-7 sm:leading-[22px] sm:text-sm sm:min-w-[100px]">
            Innovating one project at a time
          </p>
        </div>
        <div className="flex items-center md:justify-center md:pr-4 md:flex-wrap">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-white rounded-full p-2 transition-all duration-300 hover:bg-[#212d45] hover:scale-125"
            aria-label="GitHub"
          >
            <AiFillGithub size={48} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-white rounded-full p-2 transition-all duration-300 hover:bg-[#212d45] hover:scale-125"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={48} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-white rounded-full p-2 transition-all duration-300 hover:bg-[#212d45] hover:scale-125"
            aria-label="Instagram"
          >
            <AiFillInstagram size={48} />
          </a>
        </div>
      </div>
    </section>
  );
}
