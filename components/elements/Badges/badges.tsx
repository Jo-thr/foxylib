import { XMarkIcon } from "@heroicons/react/24/outline";
import cn from "clsx";
import { useState } from "react";

export type BadgesProps = {
  point?: boolean;
  close?: boolean;
  aspect: "rounded" | "circular";
  children: string;
};

export const Badges = ({
  children,
  aspect,
  point = false,
  close = false,
}: BadgesProps) => {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className={cn(
        `cursor-pointer items-center bg-primary bg-opacity-70 py-2 px-4 text-sm font-medium uppercase text-white hover:bg-opacity-100 
          ${aspect === "circular" && "rounded-full"} 
          ${aspect === "rounded" && "rounded-lg"}
          ${visible === true ? "flex" : "hidden"}`
      )}
    >
      {point && <span className="mr-2 text-xs">●</span>}
      {children}
      {close && (
        <XMarkIcon
          onClick={() => setVisible(false)}
          className="ml-2 h-4 w-4 stroke-2"
        />
      )}
    </div>
  );
};
