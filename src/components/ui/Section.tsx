'use client';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  grid?: boolean;
  row?: boolean;
  nopadding?: boolean;
}

export function Section({
  children,
  grid,
  row,
  nopadding,
  className = '',
  ...props
}: SectionProps) {
  return (
    <section
      className={`
        max-w-[1040px] mx-auto relative overflow-hidden box-content
        ${grid ? 'grid grid-cols-2' : 'flex'} ${row ? 'flex-row' : 'flex-col'}
        ${nopadding ? 'p-0' : 'pt-8 px-12 md:pt-6 md:px-12 sm:pt-4 sm:px-4'}
        md:flex-col sm:w-[calc(100vw-32px)] sm:flex-col
        ${className}
      `}
      {...props}
    />
  );
}

export function SectionTitle({
  children,
  main,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { children: React.ReactNode; main?: boolean }) {
  return (
    <h2
      className={`
        font-extrabold max-w-full mb-4 bg-gradient-to-br from-white from-[18.77%] to-white/66 to-[60.15%] bg-clip-text text-transparent
        ${main ? 'text-[65px] leading-[72px] pt-[58px] pb-4' : 'text-[56px] leading-[56px]'}
        md:${main ? 'text-[56px] leading-[56px] mb-3 pt-10 pb-3' : 'text-5xl leading-[48px]'}
        sm:${main ? 'text-[28px] leading-8 mb-2 pt-4 pb-2' : 'text-3xl leading-10'} sm:max-w-full
        ${className}
      `}
      {...props}
    />
  );
}

export function SectionText({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { children: React.ReactNode }) {
  return (
    <p
      className="max-w-[800px] text-2xl leading-10 font-light pb-14 text-white/50 md:max-w-[670px] md:text-xl md:leading-8 md:pb-6 sm:text-base sm:leading-6 sm:pb-4"
      {...props}
    />
  );
}

export function SectionDivider({
  colorAlt,
  divider,
  className = '',
}: {
  colorAlt?: boolean;
  divider?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`
        w-16 h-1.5 rounded-lg
        ${colorAlt ? 'bg-gradient-to-r from-[#F46737] to-[#945DD6]' : 'bg-gradient-to-r from-[#13ADC7] to-[#945DD6]'}
        ${divider ? 'my-16' : ''}
        md:w-12 md:h-1
        sm:w-8 sm:h-0.5
        ${className}
      `}
    />
  );
}
