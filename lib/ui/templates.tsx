/* eslint-disable react/no-unescaped-entities */
import { CLIENTS, TESTIMONIALS } from "@/content";
import {
  Bento,
  Button,
  CardSpotlightEffect,
  PageContainer,
  ScrollView,
  Text,
  TextReveal,
  VectorMap,
  ZStack,
} from "@/lib/ui";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { Antonio, DM_Sans, Rubik } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
// const font = {};

export const Hero: React.FC<any> = ({ children, className, ...rest }) => (
  <PageContainer>
    <div className="py-44 grid grid-cols-2">
      <div className="flex flex-col justify-center items-start">
        <Text
          font="rubik"
          className={cn("ml-1 pt-8 text-4xl font-bold uppercase")}
        >
          INDIA's
        </Text>
        <Text
          as="h1"
          font="rubik"
          className={cn("text-8xl font-bold uppercase tracking-tighter")}
        >
          Payments Operating System
        </Text>
        <Text className={cn("ml-1 mt-16 max-w-[80%]")}>
          We unify payment gateways to give you a seamless, secure, reliable,
          end-to-end, enterprise-grade payment stack to achieve higher revenue
          at lower cost
        </Text>
        <Button className="mt-8">Get Started</Button>
      </div>
      <div className="h-[36rem] flex flex-col-reverse">
        <video
          className="invert dark:invert-0 -z-50"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="/globe-rotating-loop.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </PageContainer>
);

export const HeroOne: React.FC<any> = ({ children, className, ...rest }) => (
  <PageContainer>
    <div className="flex flex-col">
      <div className="pt-44 flex flex-col justify-center items-center text-center">
        <Text
          as="h1"
          font="rubik"
          className={cn("text-8xl font-bold uppercase tracking-tighter")}
        >
          INDIA'S Payments Operating System
        </Text>
        <Text className={cn("ml-1 mt-8 max-w-2xl")}>
          We unify payment gateways to give you a seamless, secure, reliable,
          end-to-end, enterprise-grade payment stack to achieve higher revenue
          at lower cost
        </Text>
        <Button className="mt-8">
          Get Started&nbsp;
          <ArrowRightIcon />{" "}
        </Button>
      </div>
      <ZStack>
        <div className="h-96 overflow-hidden">
          <video
            className="h-[72rem] -mt-12 invert dark:invert-0"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src="/globe-rotating-loop.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div className="h-96 w-full bg-gradient-to-t from-white dark:from-black" /> */}
      </ZStack>
    </div>
  </PageContainer>
);

export const HeroTwo: React.FC<any> = ({ children, className, ...rest }) => (
  <ZStack className="border-0 rounded-b-[8rem] overflow-hidden">
    <div className="h-full w-full bg-gradient-to-b from-black via-blue-500 from-[0%] to-[60%] to-white" />
    {/* <div className="h-full w-full bg-repeat bg-[url('https://arc.net/noise.png')] opacity-[10%]" /> */}
    <PageContainer>
      <div className="flex flex-col">
        <div className="py-44 flex flex-col justify-center items-center text-center">
          <Text
            as="h1"
            font="rubik"
            className={cn(
              "text-8xl font-bold uppercase tracking-tighter bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent drop-shadow-md"
            )}
          >
            INDIA'S Payments Operating System
          </Text>
          <Text className={cn("ml-1 mt-8 max-w-2xl drop-shadow-sm")}>
            We unify payment gateways to give you a seamless, secure, reliable,
            end-to-end, enterprise-grade payment stack to achieve higher revenue
            at lower cost
          </Text>
          <Button className="mt-8">
            Get Started&nbsp;
            <ArrowRightIcon />{" "}
          </Button>
        </div>
        <ZStack>
          <div className="h-96 overflow-hidden">
            <video
              className="h-[72rem] -mt-32 invert dark:invert-0"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src="/globe-rotating-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="h-96 w-full bg-gradient-to-t from-white dark:from-black" />
        </ZStack>
      </div>
    </PageContainer>
  </ZStack>
);

export const HeroThree: React.FC<any> = ({ children, className, ...rest }) => (
  <ZStack className="border-0 rounded-b-[4rem] overflow-hidden">
    <div className="h-full w-full bg-gradient-to-b from-black via-blue-500 to-blue-100" />
    <PageContainer>
      <div className="flex flex-col">
        <div className="py-44 flex flex-col justify-center items-center text-center text-white">
          <Text
            as="h1"
            font="rubik"
            className={cn(
              "text-8xl font-bold uppercase tracking-tighter bg-gradient-to-r from-white to-gray-400 from-[50%] bg-clip-text text-transparent drop-shadow-md"
            )}
          >
            <TextReveal text="INDIA'S Payments Operating System" />
          </Text>
          <Text className={cn("ml-1 mt-8 max-w-2xl drop-shadow-md")}>
            We unify payment gateways to give you a seamless, secure, reliable,
            end-to-end, enterprise-grade payment stack to achieve higher revenue
            at lower cost
          </Text>
          <Button className="mt-8 font-bold border-2 shadow-lg">
            Get Started&nbsp;&nbsp;
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </PageContainer>
  </ZStack>
);

export const HeroFour: React.FC<any> = ({ children, className, ...rest }) => (
  <ZStack className="border-0 rounded-b-[4rem] overflow-hidden">
    <div className="h-full w-full bg-gradient-to-b from-black via-blue-800 to-blue-300" />
    <div>
      <PageContainer>
        <div className="flex flex-col">
          <div className="pt-36 flex flex-col justify-center items-center text-center text-white">
            <Text
              as="h1"
              font="rubik"
              className={cn(
                "overflow-hidden text-8xl font-bold uppercase tracking-tighter px-2"
              )}
            >
              <TextReveal text="INDIA'S Payments" />
            </Text>
            <Text
              as="h1"
              font="rubik"
              className={cn(
                "overflow-hidden text-8xl font-bold uppercase tracking-tighter"
              )}
            >
              <TextReveal initialDelay={0.8} text="Operating System" />
            </Text>
            <Text className={cn("ml-1 mt-8 max-w-2xl drop-shadow-md")}>
              We unify payment gateways to give you a seamless, secure,
              reliable, end-to-end, enterprise-grade payment stack to achieve
              higher revenue at lower cost.
            </Text>
            <Button className="mt-8 font-semibold border-0 bg-white text-blue-500">
              Learn more&nbsp;&nbsp;
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </PageContainer>
      <Marquee className="mt-32 my-12" items={CLIENTS} view={Client2} />
    </div>
  </ZStack>
);

export const HeroFive: React.FC<any> = ({ children, className, ...rest }) => (
  <ZStack className="border-0 rounded-b-[4rem] overflow-hidden">
    <div className="h-full w-full bg-gradient-to-b from-black via-blue-800 to-blue-300" />
    <div>
      <PageContainer>
        <div className="flex flex-col">
          <div className="pt-36 flex flex-col justify-center items-center text-center text-white">
            <Text
              as="h1"
              font="rubik"
              className={cn(
                "overflow-hidden text-8xl font-bold uppercase tracking-tighter px-2"
              )}
            >
              <TextReveal text="INDIA'S Payments" />
            </Text>
            <Text
              as="h1"
              font="rubik"
              className={cn(
                "overflow-hidden text-8xl font-bold uppercase tracking-tighter"
              )}
            >
              <TextReveal initialDelay={0.8} text="Operating System" />
            </Text>
            <Text className={cn("ml-1 mt-8 max-w-2xl drop-shadow-md")}>
              We unify payment gateways to give you a seamless, secure,
              reliable, end-to-end, enterprise-grade payment stack to achieve
              higher revenue at lower cost.
            </Text>
            <Button className="mt-8 font-semibold border-0 bg-white text-blue-500">
              Learn more&nbsp;&nbsp;
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </PageContainer>
      <Marquee className="mt-32 my-12" items={CLIENTS} view={Client2} />
    </div>
  </ZStack>
);

export const CTAOne: React.FC<any> = ({ children, className, ...rest }) => (
  <ZStack className="border-0 rounded-b-[4rem] overflow-hidden">
    <div className="h-full w-full bg-gradient-to-b from-black via-blue-800 to-blue-300" />
    <div>
      <PageContainer>
        <div className="flex flex-col">
          <div className="py-24 flex flex-col justify-center items-center text-center text-white">
            <Text
              as="h1"
              font="rubik"
              className={cn(
                "text-5xl max-w-2xl font-bold uppercase tracking-tighter drop-shadow-2xl"
              )}
            >
              {/* Call to action description */}
              Never worry about payments again
            </Text>
            <Text className={cn("ml-1 mt-8 max-w-2xl drop-shadow-md")}>
              We unify payment gateways to give you a seamless, secure,
              reliable, end-to-end, enterprise-grade payment stack to achieve
              higher revenue at lower cost.
            </Text>
            <Button className="mt-8 font-semibold border-0 bg-white text-blue-500">
              Learn more&nbsp;&nbsp;
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  </ZStack>
);

export const StatsOne: React.FC<any> = ({ children, className, ...rest }) => (
  <PageContainer>
    <div className="flex flex-col items-center mt-48 text-white">
      <Text
        size="xs"
        className="border border-blue-700 font-medium text-white w-fit px-3 py-1 rounded-full uppercase mb-4"
      >
        STATS
      </Text>

      <Text
        as="h2"
        font="rubik"
        className={cn(
          "font-bold text-5xl text-center uppercase pb-12 bg-gradient-to-r from-white from-[30%] to-neutral-500 text-transparent bg-clip-text drop-shadow-2xl"
        )}
      >
        Built for Performance <br /> and Reliability
      </Text>
      <div className="mt-16 mb-16 w-full flex flex-row justify-between text-white">
        <div className="flex flex-col items-center">
          <Text font="rubik" className={cn("text-7xl font-thin")}>
            70<span className="text-blue-700 font-bold">M+</span>
          </Text>
          <Text className="uppercase font-bold bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text">
            Transactions
          </Text>
          <Text className="text-neutral-500">processed everyday</Text>
        </div>
        <div className="flex flex-col items-center">
          <Text font="rubik" className={cn("text-7xl font-thin")}>
            1.5<span className="text-blue-700 font-bold">B+</span>
          </Text>
          <Text className="uppercase font-bold bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text">
            App installs
          </Text>
          <Text className="text-neutral-500">with our SDKs</Text>
        </div>
        <div className="flex flex-col items-center">
          <Text font="rubik" className={cn("text-7xl font-thin")}>
            500<span className="text-blue-700 font-bold">B+</span>
          </Text>
          <Text className="uppercase font-bold bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text">
            ANNUALIZED
          </Text>
          <Text className="text-neutral-500">TPV</Text>
        </div>
        <div className="flex flex-col items-center">
          <Text font="rubik" className={cn("text-7xl font-thin")}>
            99.95<span className="text-blue-700 font-bold">%</span>
          </Text>
          <Text className="uppercase font-bold bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text">
            Uptime
          </Text>
          <Text className="text-neutral-500">Best in class</Text>
        </div>
      </div>
      <ZStack>
        <div className="h-96 overflow-hidden">
          <video
            className="h-[72rem] -mt-32 dark:invert"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src="/globe-rotating-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-full w-full bg-gradient-to-t from-black from-[10%] dark:from-black" />
      </ZStack>
    </div>
  </PageContainer>
);

export const TestimonialsOne: React.FC<any> = () => (
  <>
    <PageContainer className="flex flex-col items-center text-white mt-36 mb-12">
      <Text
        size="xs"
        className="border border-blue-700 font-medium w-fit px-3 py-1 rounded-full uppercase mb-4"
      >
        CUSTOMER STORIES
      </Text>
      <Text
        as="h2"
        font="rubik"
        className={cn(
          "font-bold text-5xl text-center uppercase pb-12 bg-gradient-to-r from-white from-[30%] to-neutral-500 text-transparent bg-clip-text drop-shadow-2xl"
        )}
      >
        Building Trust
        <br />
        One Client at a Time
      </Text>
    </PageContainer>
    <ScrollView>
      <div className="flex flex-row gap-8 mx-[calc(50vw_-_36rem)] ">
        {TESTIMONIALS.map((o, i) => (
          <CardSpotlightEffect key={i}>
            <div className="p-4">
            <div className="w-[36rem] h-96 p-4 bg-black flex flex-col rounded-lg border border-neutral-800">
              <Text font="ibm" size="lg" className="grow text-neutral-400 ">{o.quote}</Text>
              
              <Text className="self-end w-fit text-right text-2xl bg-gradient-to-r from-white from-[40%] to-neutral-500 text-transparent bg-clip-text drop-shadow-2xl" font="rubik">{o.client.split(",")[0]}</Text>
              <Text className="text-right text-neutral-400" size="sm">{o.client.split(",")[1]}</Text>
            </div>
            </div>
          </CardSpotlightEffect>
        ))}
      </div>
    </ScrollView>
    <PageContainer className="h-36" />
  </>
);

export const Client2: React.FC<any> = ({ src }) => {
  return <img className="text-white px-20" src={src} />;
};

export const Marquee: React.FC<any> = ({
  items = [],
  className,
  view: View,
  ...rest
}) => {
  const renderItems = items.map((o: any, i: number) => (
    <div className="flex flex-row items-center" key={i}>
      <View {...o} />
      <div className="h-2 w-2 bg-white rounded-full"></div>
    </div>
  ));
  return (
    <div
      className={cn(
        "pointer-events-none w-full flex overflow-hidden",
        className
      )}
      {...rest}
    >
      <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around">
        {renderItems}
      </div>
      <div
        aria-hidden="true"
        className="animate-marquee flex min-w-full shrink-0 items-center justify-around"
      >
        {renderItems}
      </div>
      <div
        aria-hidden="true"
        className="animate-marquee flex min-w-full shrink-0 items-center justify-around"
      >
        {renderItems}
      </div>
    </div>
  );
};

const CLIENT_NAMES = [
  "CRED",
  "OLA",
  "INDIGO",
  "BOOKMYSHOW",
  "CRED",
  "OLA",
  "INDIGO",
  "BOOKMYSHOW",
  "CRED",
  "OLA",
  "INDIGO",
  "BOOKMYSHOW",
];
