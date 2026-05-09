import { Button } from "../ui/button";
import { ClassesCarousel1 } from "./ClassesCarousel1";
import { ClassesCarouel2 } from "./ClassesCarousel2";
import { ClassesCarouel3 } from "./ClassesCarousel3";
import { Gallery } from "./Gallery";

export const colors = {
  red: "bg-rose-300/50 border-rose-950",
  white: "bg-white/50 border-stone-300",
  black: "bg-zinc-900/50 border-zinc-950",
};

export function Education() {
  return (
    <section className="flex-1 h-full">
      <div className="mx-auto flex h-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row h-120 items-center gap-2 gap-y-12">
          <div className="flex w-full flex-col justify-center align-middle gap-5 max-lg:items-center lg:col-span-3 h-full">
            <div className="flex gap-2 items-center">
              <h1 className="z-10 text-4xl leading-[1.29167] font-semibold text-balance max-lg:text-center sm:text-4xl lg:text-5xl">
                Education
              </h1>
              <img src="assets/university_img.png" className="size-10" />
            </div>

            <p className="text-muted-foreground max-w-xl text-xl max-lg:text-center">
              I studied Computer Science at the University of South Carolina
              from 2021 to 2025. Along with some of the classes I took heres
              some pictures of me there!
            </p>

            <div className="flex items-center gap-4">
              <Button
                asChild
                size="lg"
                className="group relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
              >
                <a href="https://sc.edu">Univeristy of South Carolina</a>
              </Button>
            </div>
          </div>
          <Gallery />
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
