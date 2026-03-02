'use client';

import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

export default function Header() {
  return (
    <header
      className="grid grid-cols-5 grid-rows-1 gap-x-8 py-8 px-4
        sm:grid-rows-[60px_60px] sm:gap-x-2 sm:gap-y-2"
    >
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-row items-center sm:col-end-3">
        <Link
          href="/"
          className="flex items-center text-white no-underline hover:text-white"
        >
          <DiCssdeck size={48} /> <span>Portfolio</span>
        </Link>
      </div>
      <nav
        className="col-start-2 col-end-4 row-start-1 row-end-2 flex justify-around items-center sm:col-start-2 sm:col-end-5 sm:row-start-2 sm:row-end-3"
        aria-label="Main navigation"
      >
        <a
          href="#projects"
          className="text-[2rem] leading-8 text-white/75 transition-colors duration-[0.4s] hover:text-white sm:p-2"
        >
          Projects
        </a>
        <a
          href="#tech"
          className="text-[2rem] leading-8 text-white/75 transition-colors duration-[0.4s] hover:text-white sm:p-2"
        >
          Technologies
        </a>
        <a
          href="#about"
          className="text-[2rem] leading-8 text-white/75 transition-colors duration-[0.4s] hover:text-white sm:p-2"
        >
          About
        </a>
      </nav>
      <div className="col-start-5 col-end-6 row-start-1 row-end-2 flex justify-around items-center sm:col-start-4 sm:col-end-6">
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
    </header>
  );
}
