import React from "react";
import { Brand, Button, NavigationMenu, PageContainer, Text } from "@/lib/ui";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { NAV_MENU } from "@/content";

export const Header: React.FC = () => {
  return (
    <header className="sticky w-full top-0 z-50">
      <PageContainer className="h-24 w-full grid grid-cols-5 justify-between items-center">
        <div className="col-span-1 items-center">
          <Brand className="h-10 fill-white border-0 rounded-full" />
        </div>
        <NavigationMenu />
        <div className="col-span-1 justify-end flex items-end">
          <Button className="bg-black/75 border backdrop-blur-xl border-gray-700 text-white ">
            Contact Sales&nbsp;
            <ArrowRightIcon />{" "}
          </Button>
        </div>
      </PageContainer>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className=" flex flex-col">
      <div className="mt-24 border-t border-t-neutral-800"></div>
      <PageContainer className="py-24 grid grid-cols-2 sm:grid-cols-5">
        <div className="col-span-1 flex flex-col items-start gap-8">
          <Brand className="h-10 fill-white" />
          <Text size="sm" className="text-neutral-400">
            One stop solution for all your payment needs
          </Text>
          <Link href="https://status.juspay.in/">
            <div className="h-7 border border-neutral-500 bg-neutral-900 flex flex-row rounded-full items-center px-3">
              <div className="relative flex h-2 w-2 mr-2">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></div>
              </div>
              <Text size="xs" className="text-neutral-400">
                System Status
              </Text>
            </div>
          </Link>
        </div>
        <div className="col-span-3 col-start-3 flex flex-row justify-around">
          {NAV_MENU.map((o, i) => (
            <div key={i} className="flex flex-col">
              <Text
                size="sm"
                className="text-white font-semibold uppercase px-1 py-2"
              >
                {o.label}
              </Text>

              {o?.children?.map((l, i) => (
                <Link
                  key={i}
                  href="/"
                  className="text-sm font-normal px-1 py-2 text-neutral-400 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </PageContainer>
      <div className="border-t border-t-neutral-800"></div>
      <PageContainer className=" py-12 flex flex-row items-center justify-between">
        <Text size="sm" className="text-neutral-400">
          © 2023 <span className="text-white">JusPay Technologies</span> Pvt.
          Ltd. All Rights Reserved.
        </Text>
        <Text size="sm" className="text-neutral-400">
          Powered by <span className="text-white">Pure Functions</span>
        </Text>
      </PageContainer>
    </footer>
  );
};
