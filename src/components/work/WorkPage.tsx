import { ArrowRightIcon, HardHatIcon } from "lucide-react";
import { Button } from "../ui/button";

export function Work() {
  return (
    <section className="flex-1 flex justify-between">
      <div className="flex h-full max-w-screen flex-col">
        <div className="flex flex-row h-full items-center gap-y-12">
          <div className="flex flex-col w-full h-full items-center justify-center align-middle gap-2 lg:gap-5 max-lg:items-center lg:col-span-3">
            <h1 className="text-2xl lg:text-5xl leading-[1.29167] font-bold text-balance">
              Work
            </h1>

            <p className="text-center text-muted-foreground max-w-xl text-[10px] lg:text-xl">
              I am a Software Engineer and Consultant at LiminalArc. Currently I
              work at our Consumers Energy client in Jackson, MI, where I work
              on Agile transformation and help build better software. Some of
              the principles we push at LiminalArc are SOLID Principles, Clean
              Coding Techniques, Test Driven Development, and Domain Driven
              Design.
            </p>

            <div className="flex justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="flex items-center group relative lg:hover:scale-105 w-1/2 lg:w-fit h-7 lg:h-10 overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] lg:has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
              >
                <a
                  href="https://www.liminalarc.co/"
                  className="text-xs lg:text-lg"
                >
                  <img src="assets/liminalarc.png" className="h-4 w-2" />
                  LiminalArc
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="flex items-center group relative lg:hover:scale-105 w-1/2 lg:w-fit h-7 lg:h-10 overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] lg:has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
              >
                <a
                  href="https://www.consumersenergy.com/residential"
                  className="text-xs lg:text-lg"
                >
                  <HardHatIcon className="size-4" />
                  Consumers Energy
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
