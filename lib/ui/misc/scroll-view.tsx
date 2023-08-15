"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import React from "react";

export const ScrollView: React.FC<any> = ({ children }) => {
  return (
    <ScrollArea.Root className="w-full rounded overflow-hidden ">
      <ScrollArea.Viewport className="w-full h-full rounded">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
};
