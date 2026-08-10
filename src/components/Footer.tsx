export function Footer() {
  return (
    <div className="flex justify-center sticky bottom-2 z-40 pt-15">
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/davison-andrewj/"
            target="_blank"
            rel="noreferrer"
            className="group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50"
          >
            <img
              src={"assets/linkedin-icon.png"}
              className="obeh size-7 object-contain"
            />
          </a>
          <a
            href="https://www.github.com/andyjdavison"
            target="_blank"
            rel="noreferrer"
            className="group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50"
          >
            <img
              src={"assets/github-icon.svg"}
              className="obeh size-6 object-contain"
            />
          </a>
          <a
            href="mailto:AndrewJDavison@thedavisonfamily.org"
            target="_blank"
            rel="noreferrer"
            className="group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50"
          >
            <img
              src={"assets/email-icon.png"}
              className="obeh size-8 object-contain"
            />
          </a>
          <a
            href="https://www.instagram.com/davison.andrewj/"
            target="_blank"
            rel="noreferrer"
            className="group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50"
          >
            <img
              src={"assets/instagram-icon.webp"}
              className="obeh size-6 object-contain"
            />
          </a>
        </div>
        <h6 className="text-xs font-semibold">
          Copyright © 2026 Andrew Davison
        </h6>
      </div>
    </div>
  );
}

export default Footer;
