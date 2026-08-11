import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ClassesCarousel1 } from "./ClassesCarousel1";
import { ClassesCarouel2 } from "./ClassesCarousel2";
import { ClassesCarouel3 } from "./ClassesCarousel3";
import { BouncingImage } from "./BoucingImage";

export const colors = {
  red: "bg-rose-300/50 border-rose-950",
  white: "bg-white/50 border-stone-300",
  black: "bg-zinc-900/50 border-zinc-950",
};

export function Education() {
  return (
    <section className="flex-1 flex justify-between">
      <div className="flex h-full max-w-screen flex-col">
        <div className="flex flex-row h-3/4 items-center gap-y-12">
          <div className="flex flex-col w-full h-full items-center justify-center align-middle gap-2 lg:gap-5 max-lg:items-center lg:col-span-3">
            <h1 className="z-10 text-2xl lg:text-5xl leading-[1.29167] font-bold text-balance">
              Education
            </h1>

            <p className="text-center text-muted-foreground max-w-xl text-[10px] lg:text-xl">
              I studied Computer Science at the University of South Carolina
              from 2021 to 2025. Below are some of the classes I took while
              pursuing my Bachelor's degree!
            </p>

            <Button
              asChild
              size="lg"
              className="flex items-center group relative lg:hover:scale-105 w-1/2 lg:w-fit h-7 lg:h-10 overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] lg:has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
            >
              <a href="https://sc.edu" className="text-xs lg:text-lg">
                <img
                  src="assets/usc_white_icon.webp"
                  className="size-4 lg:size-6"
                />
                USC
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
          <BouncingImage />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <ClassesCarousel1 />
          <ClassesCarouel2 />
          <ClassesCarouel3 />
        </div>
      </div>
    </section>
  );
}
