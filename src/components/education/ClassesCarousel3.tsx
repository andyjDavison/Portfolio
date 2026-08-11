import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { classes3 } from "@/data/classesData";
import { colors } from "./Education";

export function ClassesCarouel3() {
  // Use React.useRef to instantiate the plugin once
  const plugin = useRef(Autoplay({ delay: 10, stopOnInteraction: true }));

  // 1. Create state to hold the API instance
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // 2. Use the API when it's available
  useEffect(() => {
    if (!api) return;

    // Example: Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      className="w-full lg:col-span-2 justify-center"
      setApi={setApi}
      plugins={[plugin.current]}
      opts={{
        loop: true,
        duration: 9000,
        direction: "ltr",
      }}
    >
      <CarouselContent>
        {classes3.map((item) => (
          <CarouselItem
            key={item.name}
            className={`flex items-center justify-center hover:cursor-pointer basis-38/100 lg:basis-1/5`}
          >
            <span
              className={`flex flex-col ${colors[item.color as keyof typeof colors]} w-45 lg:w-150 rounded-4xl border-2 justify-center lg:px-2 lg:py-0.5`}
            >
              <p
                className={`${item.color === "black" ? "text-white" : ""} whitespace-nowrap text-[10px] lg:text-sm px-5 font-semibold`}
              >
                {item.name}
              </p>
              <p
                className={`${item.color === "black" ? "text-white" : ""} text-[8px] lg:text-xs px-5 whitespace-nowrap`}
              >
                {item.desc}
              </p>
            </span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
