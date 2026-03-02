'use client';

import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';

interface NavDropDownProps {
  isOpen?: boolean;
}

export default function NavDropDown({ isOpen }: NavDropDownProps) {
  return (
    <div
      className={`
        absolute flex flex-col -right-1/4 top-10 w-[280px] bg-white rounded-lg z-[100] py-1 overflow-hidden cursor-default
        transition-all duration-300 origin-top
        md:top-8 sm:top-6
        ${isOpen ? 'visible opacity-100 scale-y-100' : 'invisible opacity-0 scale-y-[0.3]'}
      `}
    >
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="w-full flex items-start cursor-pointer transition-all duration-300 py-3 px-4 hover:scale-105 hover:bg-gray-200 hover:shadow-md"
      >
        <div className="w-8 h-8 mr-4 flex items-center justify-center">
          <AiFillPhone />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#0f1624] text-lg leading-[26px] text-start">Phone</h2>
          <p className="text-[#0f1624] opacity-50 text-sm leading-[22px] text-start">
            Let&apos;s get together and have a chat?
          </p>
        </div>
      </a>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="w-full flex items-start cursor-pointer transition-all duration-300 py-3 px-4 hover:scale-105 hover:bg-gray-200 hover:shadow-md"
      >
        <div className="w-8 h-8 mr-4 flex items-center justify-center">
          <AiOutlineMail />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#0f1624] text-lg leading-[26px] text-start">Email</h2>
          <p className="text-[#0f1624] opacity-50 text-sm leading-[22px] text-start">
            If you want to talk just send a message and I&apos;ll get back
          </p>
        </div>
      </a>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="w-full flex items-start cursor-pointer transition-all duration-300 py-3 px-4 hover:scale-105 hover:bg-gray-200 hover:shadow-md"
      >
        <div className="w-8 h-8 mr-4 flex items-center justify-center">
          <FaLocationArrow />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#0f1624] text-lg leading-[26px] text-start">Address</h2>
          <p className="text-[#0f1624] opacity-50 text-sm leading-[22px] text-start">
            1405, Angelus Dr, Florissant. Mo
          </p>
        </div>
      </a>
    </div>
  );
}
