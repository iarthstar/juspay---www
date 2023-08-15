import { cn } from "@/lib/utils/misc";

export { VectorMap } from "@/lib/ui/misc/vector-map";
export { ScrollView } from "@/lib/ui/misc/scroll-view";

export const PageContainer: React.FC<any> = ({ className, ...rest }) => (
  <div className={cn("w-full m-auto max-w-6xl px-4", className)} {...rest} />
);

export const ZStack: React.FC<any> = ({ children, className, ...rest }) => (
  <div className={cn("grid grid-cols-1 grid-rows-1", className)} {...rest}>
    {(Array.isArray(children) ? children : [children])?.map(
      (elem: React.ReactNode, i: number) => (
        <div
          key={i}
          style={{ zIndex: i }}
          className={"col-start-1 row-start-1 col-span-1 row-span-1"}
        >
          {elem}
        </div>
      )
    )}
  </div>
);

const generateGridStyles = (position: number[], size: number[]) => {
  return {
    gridArea: `${position?.[0] ?? "auto"} / ${position?.[1] ?? "auto"} / span ${
      size?.[0] ?? 1
    } / span ${size?.[1] ?? 1}`,
  };
};

export const Bento: React.FC<any> = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {data.map(({ position, size, className, view }: any, i: number) => (
        <div key={i} className={className} style={className ? {} : generateGridStyles(position, size)}>
          {view}
        </div>
      ))}
    </div>
  );
};

export const TextReveal: React.FC<any> = ({ text, initialDelay = 0 }) => (
  <>
    {text.match(/./gu)!.map((char: string, index: number) => (
      <span
        className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
        key={`${char}-${index}`}
        style={{ animationDelay: `${(index * 0.05) + initialDelay}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
);
