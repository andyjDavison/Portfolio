import { gallerySections } from "@/data/galleryData";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <div className="max-h-100 max-w-175 grid gap-6 md:grid-cols-2">
      {gallerySections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className={cn({
            "grid grid-cols-2 gap-6": section.type === "grid",
          })}
        >
          {section.images.map((image, imageIndex) => (
            <img
              key={imageIndex}
              src={image.src}
              alt={image.alt}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
