/**
 * @typedef {Object} startpageData
 * @property {number} id
 * @property {string} title
 * @property {string} icon
 * @property {{label: string, url: string}[]} links
 */

const startpageData = [
  {
    id: 0,
    title: "Communication",
    icon: "✉",
    links: [
      { label: "Protonmail", url: "https://mail.proton.me" },
      { label: "Tutanota", url: "https://app.tuta.com" },
      { label: "whatsapp", url: "https://web.whatsapp.com/" },
    ],
  },
  {
    id: 1,
    title: "Learning & Dev",
    icon: "⌨",
    links: [
      { label: "archWiki", url: "https://wiki.archlinux.org" },
      { label: "hyprWiki", url: "https://wiki.hypr.land/" },
      { label: "FMHY", url: "https://fmhy.pages.dev/" },
      {
        label: "HTML/CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web",
      },
      { label: "Tailwind", url: "https://tailwindcss.com/docs/" },
      { label: "Roadmap", url: "https://roadmap.sh/" },
      { label: "React", url: "https://react.dev/learn" },
    ],
  },
  {
    id: 2,
    title: "Media",
    icon: "♪",
    links: [
      { label: "ytMusic", url: "https://music.youtube.com/" },
      { label: "bandcamp", url: "https://bandcamp.com/" },
      { label: "letterboxd", url: "https://letterboxd.com/lostglory_/" },
      { label: "youtube", url: "https://www.youtube.com/" },
      { label: "lastfm", url: "https://www.last.fm/user/lostglory_" },
      { label: "rateyourmusic", url: "https://rateyourmusic.com/~lostglory_" },
    ],
  },
  {
    id: 3,
    title: "Gaming",
    icon: "⚔",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/" },
      { label: "steamdb", url: "https://steamdb.info/" },
      { label: "protondb", url: "https://www.protondb.com/" },
      { label: "epicGames", url: "https://store.epicgames.com/" },
      { label: "isTheirDeal", url: "https://isthereanydeal.com/" },
    ],
  },
  {
    id: 4,
    title: "Social & Misc",
    icon: "◆",
    links: [
      { label: "/g/", url: "https://4chan.org/" },
      { label: "lainchan", url: "https://lainchan.org/" },
      { label: "gemini", url: "https://gemini.google.com/" },
      { label: "monkeyType", url: "https://monkeytype.com/" },
      { label: "linkedin", url: "https://www.linkedin.com/in/4nubhav" },
      { label: "github", url: "https://github.com/4nubhav-v" },
      { label: "amazon", url: "https://amazon.in/" },
    ],
  },
  {
    id: 5,
    title: "Local & Services",
    icon: "⬡",
    links: [
      { label: "syncthing", url: "http://127.0.0.1:8384/#" },
      { label: "wifiRouter", url: "http://192.168.1.1/" },
      { label: "IRCTC", url: "https://www.irctc.co.in/" },
      { label: "googleDrive", url: "https://drive.google.com/drive/my-drive" },
    ],
  },
];

export default startpageData;
