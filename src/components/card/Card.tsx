import "./Card.css";

// 1. Define the structure of a single link
interface SocialLink {
  label: string;
  url: string;
}

// 2. Define the expected structure of the 'info' object prop
interface CardProps {
  info?: {
    title: string;
    icon: string;
    socialsInfo: SocialLink[];
  };
}

function Card({
  info = { title: "Title", icon: "✉", socialsInfo: [] },
}: CardProps) {
  return (
    <>
      <div className="card-hover animate-slide-up delay-100 bg-gb-bg-soft rounded-xl border border-gb-bg1 lg:py-8 lg:px-5 p-5 hover:border-gb-yellow/50 w-full ">
        <div className="flex items-center gap-2 lg:gap-4 mb-4">
          <span className="text-gb-yellow" aria-hidden="true">
            {info.icon}
          </span>
          <h2 className="text-gb-fg2 text-xs uppercase tracking-wider font-bold">
            {info.title}
          </h2>
        </div>
        <ul className="grid lg:grid-cols-3 grid-cols-2 gap-2">
          {info.socialsInfo.map((link, index) => (
            <li key={index} className="links ">
              <a
                className="text-gb-fg hover:text-gb-green transition-colors duration-150 text-sm"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Card;
