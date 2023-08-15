"use client";

import React from "react";
import * as ReactNavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const NavigationMenu: React.FC<any> = ({ className }) => {
  return (
    <div className={cn("col-span-3 hidden items-center justify-center sm:flex", className)}>
      <ReactNavigationMenu.Root className="">
        <ReactNavigationMenu.List className="border border-neutral-700 backdrop-blur-xl bg-black/75 rounded-full center shadow-blackA7-1234 m-0 flex list-none rounded-[6px] bg-white-1234 py-1 px-2 shadow-[0_2px_10px]-1234">
          <ReactNavigationMenu.Item>
            <ReactNavigationMenu.Trigger className="text-violet11-1234 hover:bg-violet3-1234 text-white focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Products{" "}
              <CaretDownIcon
                className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </ReactNavigationMenu.Trigger>
            <ReactNavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="row-span-3 grid">
                  <ReactNavigationMenu.Link asChild>
                    <a
                      className="focus:shadow-violet7 from-black via-blue-800 to-blue-300 shadow-xl flex
                    h-full w-full select-none flex-col justify-start rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="/"
                    >
                      <svg
                        aria-hidden
                        width="38"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="white"
                      >
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                      </svg>
                      <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                        UPI in a Box
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Your end-to-end UPI solution.
                      </p>
                    </a>
                  </ReactNavigationMenu.Link>
                </li>

                <ListItem href="https://stitches.dev/" title="Hyper SDK">
                  A cross-platform, custom branded payment page solution.
                </ListItem>
                <ListItem href="/colors" title="Express Checkout">
                  100+ payment gateways to process your online payments.
                </ListItem>
                <ListItem
                  href="https://icons.radix-ui.com/"
                  title="Safe Browser"
                >
                  The Smoothest 1-Click Payment Experience.
                </ListItem>
              </ul>
            </ReactNavigationMenu.Content>
          </ReactNavigationMenu.Item>

          <ReactNavigationMenu.Item>
            <ReactNavigationMenu.Trigger className="text-violet11-1234 hover:bg-violet3-1234 text-white focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Developers{" "}
              <CaretDownIcon
                className="text-violet10-1234 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </ReactNavigationMenu.Trigger>
            <ReactNavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="row-span-3 grid">
                  <ReactNavigationMenu.Link asChild>
                    <a
                      className="focus:shadow-violet7 from-black via-blue-800 to-blue-300 shadow-xl flex
                    h-full w-full select-none flex-col justify-start rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="/"
                    >
                      <svg
                        aria-hidden
                        width="38"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="white"
                      >
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                      </svg>
                      <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                        API Reference
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        The complete guide to JusPay APIs.
                      </p>
                    </a>
                  </ReactNavigationMenu.Link>
                </li>

                <ListItem href="https://stitches.dev/" title="Release Notes">
                  The latest updates, announcements, and changes.
                </ListItem>
                <ListItem href="/colors" title="Integration Docs">
                  Integrate JusPay with your website or app.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="SDK Features">
                  A collection of features and SDKs.
                </ListItem>
              </ul>
            </ReactNavigationMenu.Content>
          </ReactNavigationMenu.Item>

          <ReactNavigationMenu.Item>
            <ReactNavigationMenu.Trigger className="text-violet11-1234 hover:bg-violet3-1234 text-white focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Resources{" "}
              <CaretDownIcon
                className="text-violet10-1234 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </ReactNavigationMenu.Trigger>
            <ReactNavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Blog"
                  href="/docs/primitives/overview/introduction"
                >
                  {/* blog description */}
                  The latest articles straight from the JusPay team.
                </ListItem>
                <ListItem
                  title="Newsroom"
                  href="/docs/primitives/overview/getting-started"
                >
                  The latest news straight from the JusPay team.
                </ListItem>
                <ListItem
                  title="Documentation"
                  href="/docs/primitives/guides/styling"
                >
                  Introductions, step-by-step tutorials, and deep dives.
                </ListItem>
                <ListItem
                  title="Customer Stories"
                  href="/docs/primitives/guides/animation"
                >
                  A collection of stories from our customers.
                </ListItem>
                <ListItem
                  title="Media Kit"
                  href="/docs/primitives/overview/accessibility"
                >
                    Logos, banners, and everything else you might need.
                </ListItem>
                <ListItem
                  title="Compliance"
                  href="/docs/primitives/overview/releases"
                >
                    Our commitment to security, privacy, and compliance.
                </ListItem>
              </ul>
            </ReactNavigationMenu.Content>
          </ReactNavigationMenu.Item>

          <ReactNavigationMenu.Item>
            <ReactNavigationMenu.Link
              className="text-violet11-1234 hover:bg-violet3-1234 text-white focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="https://github.com/radix-ui"
            >
              Pricing
            </ReactNavigationMenu.Link>
          </ReactNavigationMenu.Item>

          <ReactNavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white-1234" />
          </ReactNavigationMenu.Indicator>
        </ReactNavigationMenu.List>

        <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
          <ReactNavigationMenu.Viewport className="shadow-blackA7 shadow-[0_2px_10px] data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative -mt-4 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden bg-white rounded-[6px] transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </ReactNavigationMenu.Root>
    </div>
  );
};

const ListItem: React.FC<any> = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <ReactNavigationMenu.Link asChild>
        <a
          className={cn(
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3-1234 hover:bg-gray-100 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12-1234 text-black font-semibold mb-[5px] leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11-1234 text-gray-500 leading-[1.4]">
            {children}
          </p>
        </a>
      </ReactNavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";

export const CardSpotlightEffect: React.FC<any> = ({ children }) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative overflow-hidden rounded-xl border border-neutral-700 bg-neutral-950"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 50%)`,
        }}
      />
      {children}

    </div>
  );
};
