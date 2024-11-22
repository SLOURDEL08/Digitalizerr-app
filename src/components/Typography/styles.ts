// src/components/Typography/styles.ts
type TypographyVariant = {
  base: string;
  variants: {
    primary: string;
    secondary?: string;
    tertiary?: string;
  };
};

export const typography = {
  title: {
    base: "font-bold font-primary",
    variants: {
      primary: "text-7xl text-[#F6D663] max-lg:text-6xl leading-none max-sm:text-4xl",
      secondary: "text-6xl text-[#F6D663] max-lg:text-5xl leading-none max-sm:text-3xl",

    }
  } as TypographyVariant,
  
  subtitle: {
    base: "font-semibold font-primary",
    variants: {
      primary: "text-xl max-lg:text-lg max-md:text-base text-white text-[#F6D663] leading-tight",
    }
  } as TypographyVariant,
  
  paragraph: {
    base: "font-normal font-secondary",
    variants: {
      primary: "text-white/80 max-lg:text-xs max-md:leading-6 leading-loose font-rubik uppercase tracking-widest",
    }
  } as TypographyVariant
};