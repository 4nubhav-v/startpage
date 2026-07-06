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
      <div className="card-hover animate-slide-up bg-gb-bg-soft border-gb-bg1 hover:border-gb-yellow/50 w-full rounded-xl border p-5 delay-100 lg:px-5 lg:py-8">
        <div className="mb-4 flex items-center gap-2 lg:gap-4">
          <span className="text-gb-yellow" aria-hidden="true">
            {info.icon}
          </span>
          <h2 className="text-gb-fg2 text-xs font-bold tracking-wider uppercase">
            {info.title}
          </h2>
        </div>
        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {info.socialsInfo.map((link, index) => (
            <li key={index} className="links text-sm font-semibold">
              <a
                className="text-gb-fg3/80 hover:text-gb-green text-sm transition-colors duration-150"
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
