import { Element } from "@/lib/ui";
import { cn, cva } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

import { Inter, Fraunces, DM_Sans, Rubik, IBM_Plex_Mono, Dancing_Script } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

// const font = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '700']
// });

// const font = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '700']
// });

const text = cva("text", {
  variants: {
    size: {
      "3xl": ["text-3xl"],
      "2xl": ["text-2xl"],
      xl: ["text-xl"],
      lg: ["text-lg"],
      md: ["text-md"],
      base: ["text-base"],
      sm: ["text-sm"],
      xs: ["text-xs"],
    },
    font:{
      rubik: [rubik.className],
      inter: [inter.className],
      ibm: [ibmPlexMono.className],
      script: [dancingScript.className]
    }
  },
  compoundVariants: [{ size: "base" }],
  defaultVariants: {
    size: "base",
    font: 'inter',
  },
});

export const Text: React.FC<any> = ({ as = "p", size, font, className, ...rest }) => (
  <Element as={as} className={twMerge(text({ size, font }), className )} {...rest} />
);

export const Button: React.FC<any> = ({ className, ...rest }) => {
  return (
    <button {...rest} className={cn("flex flex-row items-center px-4 py-2 rounded-full border text-sm font-medium", className)} />
  );
};

export const Brand: React.FC<any> = ({...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    // fill="none"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9136 33.9137V29.4972H19.9132C17.6015 29.4972 15.4783 28.6743 13.8207 27.3056C13.7788 27.2715 13.7395 27.2348 13.6986 27.1997C13.6227 27.1353 13.5463 27.0711 13.4727 27.0044C11.5427 25.2499 10.329 22.7207 10.329 19.9133C10.3294 15.2489 12.8584 10.8788 19.9136 5.91262V10.3289C21.1743 10.3291 22.378 10.5764 23.4813 11.0209C25.8473 11.9736 27.7495 13.8416 28.7429 16.186C29.2285 17.3325 29.4973 18.5918 29.4973 19.9133C29.4973 24.5772 26.9679 28.9473 19.9136 33.9137ZM0 19.9133C0 26.0574 2.79786 31.5603 7.18588 35.2159C7.31786 35.3261 7.45155 35.4352 7.58674 35.5419C7.60021 35.5524 7.61326 35.5631 7.6261 35.574C11.0133 38.2367 15.2811 39.8264 19.9132 39.8268C20.0851 39.8268 20.2558 39.8247 20.4265 39.8202C31.1358 39.5477 39.7696 30.7785 39.8252 20.0172C39.8255 19.9826 39.8267 19.9477 39.8267 19.9128C39.8263 8.93251 30.893 0.000106812 19.9132 0.000106812C8.93326 0.000106812 0 8.93294 0 19.9133Z"
      // fill="#FDFDFD"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9132 29.4971C17.6015 29.4971 15.4783 28.6742 13.8207 27.3057C13.7788 27.2717 13.7395 27.2349 13.6986 27.1998C13.6227 27.1352 13.5463 27.071 13.4727 27.0045C11.5427 25.2498 10.329 22.7206 10.329 19.9132C10.3294 15.2488 12.8584 10.8789 19.9136 5.91273V0H19.9132C8.93326 0 0 8.93283 0 19.9132C0 26.0575 2.79786 31.5604 7.18588 35.2158C7.31786 35.326 7.45155 35.4353 7.58674 35.542C7.60021 35.5525 7.61326 35.563 7.6261 35.5739C11.0133 38.2366 15.2811 39.8263 19.9132 39.8267H19.9136V29.4971H19.9132Z"
      // fill="#EFEFEF"
    />
  </svg>
);