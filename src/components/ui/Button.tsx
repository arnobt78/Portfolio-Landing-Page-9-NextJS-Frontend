'use client';

interface ButtonProps {
  children: React.ReactNode;
  alt?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ children, alt, disabled, onClick }: ButtonProps) {
  return (
    <div
      className={`
        rounded-[50px] font-semibold flex items-center justify-center text-white cursor-pointer transition-all duration-500 relative overflow-hidden
        ${alt ? 'w-[150px] h-[52px] text-xl' : 'w-[262px] h-16 text-2xl mb-20'}
        ${alt ? 'bg-gradient-to-r from-[#ff622e] to-[#B133FF]' : 'bg-gradient-to-r from-[#00DBD8] to-[#B133FF]'}
        ${disabled ? 'opacity-50' : ''}
        md:${alt ? '' : 'w-[184px] h-12 text-base mb-16'}
        sm:${alt ? '' : 'w-full h-8 text-sm mb-8'}
      `}
    >
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`
          absolute inset-0 rounded-[50px] text-white flex items-center justify-center font-semibold cursor-pointer transition-opacity duration-300 border-none
          ${alt ? 'bg-gradient-to-r from-[#F46737] to-[#945DD6] text-xl' : 'bg-gradient-to-r from-[#13ADC7] to-[#945DD6] text-2xl'}
          ${disabled ? 'opacity-50' : ''}
          hover:opacity-0 focus:outline-none
          md:${alt ? 'text-xl' : 'text-base'}
          sm:text-sm
        `}
      >
        {children}
      </button>
      <span className="invisible" aria-hidden>{children}</span>
    </div>
  );
}
