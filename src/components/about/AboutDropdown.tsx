import { Button } from "../ui/button";

export function AboutDropdown() {
  return (
    <div className="flex flex-row flex-wrap">
      <Button variant="ghost" className="rounded-lg size-20">
        <a
          href="https://www.linkedin.com/in/davison-andrewj/"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <img src="assets/linked_in.svg" className="size-8" />
          <span className="text-xs">LinkedIn</span>
        </a>
      </Button>
      <Button variant="ghost" className="rounded-lg size-20">
        <a
          href="https://github.com/andyjDavison"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <img src="assets/github.png" className="size-7" />
          GitHub
        </a>
      </Button>
      <Button variant="ghost" className="rounded-lg size-20">
        <a
          href="mailto:AndrewJDavison@thedavisonfamily.org"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <img src="assets/mail.webp" className="size-8" />
          Email
        </a>
      </Button>
      <Button variant="ghost" className="rounded-lg size-20">
        <a
          href="assets/AndrewDavisonResume.pdf"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <img src="assets/pdf.png" className="size-8" />
          Resume
        </a>
      </Button>
    </div>
  );
}
