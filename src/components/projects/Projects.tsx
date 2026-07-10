import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRightIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import projectData from "@/data/projectData";

export type MenuData = {
  id: number;
  img: string;
  imgAlt: string;
  userAvatar: string;
  userComment: string;
};

export function Projects() {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [commentsApi, setCommentsApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!mainApi) {
      return;
    }

    setCurrent(mainApi.selectedScrollSnap());
    mainApi.on("select", () => {
      const selectedIndex = mainApi.selectedScrollSnap();

      setCurrent(selectedIndex);

      // Sync all carousels with main carousel
      thumbApi?.scrollTo(selectedIndex);
      commentsApi?.scrollTo(selectedIndex);
    });
  }, [mainApi, thumbApi, commentsApi]);

  useEffect(() => {
    if (!thumbApi) {
      return;
    }

    thumbApi.on("select", () => {
      const selectedIndex = thumbApi.selectedScrollSnap();

      setCurrent(selectedIndex);

      // Sync main and comments carousel with thumbnail carousel
      mainApi?.scrollTo(selectedIndex);
      commentsApi?.scrollTo(selectedIndex);
    });
  }, [thumbApi, mainApi, commentsApi]);

  useEffect(() => {
    if (!commentsApi) {
      return;
    }

    commentsApi.on("select", () => {
      const selectedIndex = commentsApi.selectedScrollSnap();

      setCurrent(selectedIndex);

      // Sync main and thumbnail carousel with comments carousel
      mainApi?.scrollTo(selectedIndex);
      thumbApi?.scrollTo(selectedIndex);
    });
  }, [commentsApi, mainApi, thumbApi]);

  const handleThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
    },
    [mainApi],
  );

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="flex-1 flex justify-between">
      <div className="flex h-full max-w-screen flex-col gap-6 ">
        <div className="flex flex-row h-120 items-center gap-2 gap-y-12 mx-20">
          <div className="flex w-full flex-col justify-center align-middle gap-5 max-lg:items-center lg:col-span-3 h-full">
            <h1 className="text-4xl leading-[1.29167] font-semibold text-balance max-lg:text-center sm:text-4xl lg:text-5xl">
              Projects
            </h1>

            <p className="text-muted-foreground max-w-xl text-xl max-lg:text-center">
              My collection of Software/Cyber Security/Data Science projects.
              All source code and information can be found on my github!
            </p>

            <div className="flex items-center gap-4">
              <Button
                asChild
                size="lg"
                className="group relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
              >
                <a href="https://github.com/andyjDavison">
                  <img
                    src="assets/github-white-icon.webp"
                    className="h-4 w-4"
                  />
                  Github
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>

          <Carousel
            className="w-full lg:col-span-2 justify-center"
            setApi={setMainApi}
            plugins={[plugin.current]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {projectData.map((item) => (
                <CarouselItem
                  key={item.header}
                  className="flex w-full items-center justify-center hover:cursor-pointer"
                >
                  <a href={item.github}>
                    <img
                      src={item.socialImgSource}
                      className="obeh size-150 object-contain"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 gap-24 gap-y-12 md:gap-y-16 lg:grid-cols-5 -mt-10">
          <Carousel
            className="relative w-full max-lg:order-2 lg:col-span-3"
            setApi={setThumbApi}
            opts={{
              loop: true,
            }}
          >
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-25 bg-linear-to-r via-85% to-transparent" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-25 bg-linear-to-l via-85% to-transparent" />
            <CarouselContent className="my-1 flex">
              {projectData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "basis-1/2 cursor-pointer sm:basis-1/3 md:basis-1/4 lg:basis-1/3 xl:basis-1/4",
                  )}
                  onClick={() => handleThumbClick(index)}
                >
                  <div className="relative flex h-33 items-center justify-center">
                    <div
                      className={cn(
                        "absolute bottom-0 -z-1",
                        current === index ? "text-primary" : "text-border",
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="161"
                        height="92"
                        viewBox="0 0 161 92"
                        fill="none"
                      >
                        <path
                          d="M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <img src={item.imgSource} className="size-25" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            className="flex w-full items-center justify-center lg:col-span-2"
            setApi={setCommentsApi}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {projectData.map((item) => (
                <CarouselItem
                  key={item.desc}
                  className="flex h-full min-h-14 w-full justify-center gap-4 px-6 lg:items-center"
                >
                  <img
                    src={item.imgSource}
                    className="border-background size-10 rounded-full border-4 drop-shadow-lg"
                  />
                  <Separator
                    orientation="vertical"
                    className="bg-primary hidden h-10! w-0.5! rounded-full! sm:block mt-4"
                  />
                  <div className="flex flex-col">
                    <p className="text-card-foreground text-lg font-bold">
                      {item.header}
                    </p>
                    <p className="text-card-foreground">{item.desc}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
