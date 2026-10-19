import { useTheme } from "./theme-provider.tsx";
import { useState, useEffect } from "react";
import HeaderSectionCenter from "./HeaderSectionCenter.tsx";
import Sun from "../assets/svgs/Sun.svg";
import Moon from "../assets/svgs/Moon.svg";
import Github from "../assets/svgs/Github.svg";
import GithubDark from "../assets/svgs/GithubDark.svg";

type MusicStatusDataTypes = {
  track: string;
  artist: string;
  album: string;
  mbid: string;
  img: string;
};

function Header() {
  const [data, setDate] = useState<MusicStatusDataTypes>();
  useEffect(() => {
    async function getMusicStatus() {
      try {
        /* LOCAL HOST
         * const response = await fetch("/api/recents");
         */
        /* PRODUCTION
         */ const response = await fetch(
          "https://first-fm-app.vercel.app/api/recents",
        );

        const getdata = await response.json();
        setDate(getdata);
      } catch (e) {
        console.log(e);
      }
    }
    getMusicStatus();
  }, []);
  const { theme, setTheme } = useTheme();
  return (
    <header className="navbar bg-gb-bg-hard/40 border-gb-bg1 sticky top-0 z-10 border-b shadow-sm backdrop-blur-sm">
      <div className="navbar-start pl-8">
        <p className="text-sm font-bold italic">
          ♪ {data?.track} - {data?.artist}
        </p>
      </div>
      <div className="navbar-center">
        <HeaderSectionCenter />
      </div>
      <div className="navbar-end pr-8">
        <div className="flex items-center gap-x-1">
          <div>
            <a
              target="_blank"
              aria-label="Link to my Github Repo"
              href="https://github.com/4nubhav-v/startpage"
            >
              <img src={Github} alt="" className="hidden h-5 w-5 dark:block" />
              <img
                src={GithubDark}
                alt=""
                className="block h-5 w-5 dark:hidden"
              />
            </a>
          </div>
          <div
            className="theme-controller-switch rotate-0 cursor-pointer p-2 transition-all dark:rotate-30"
            aria-label="theme-toogle-button"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            <img src={Sun} alt="" className="hidden h-5 w-5 dark:block" />
            <img src={Moon} alt="" className="block h-5 w-5 dark:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
