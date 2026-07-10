export function Footer() {
  return (
    <div className="flex justify-center sticky bottom-2 z-40">
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/davison-andrewj/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/andyjdavison"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Github
          </a>
          <a
            href="mailto:AndrewJDavison@thedavisonfamily.org"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Email
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
