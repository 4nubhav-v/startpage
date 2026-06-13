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
      { label: "github", url: "https://github.com/4nubhav-v" },
      { label: "linkedin", url: "https://www.linkedin.com/in/4nubhav" },
      { label: "gmail", url: "https://mail.google.com/mail/u/0/#inbox" },
      { label: "protonmail", url: "https://mail.proton.me" },
      { label: "tutanota", url: "https://app.tuta.com" },
      { label: "whatsapp", url: "https://web.whatsapp.com/" },
    ],
  },
  {
    id: 1,
    title: "Wiki & Reference",
    icon: "⌨",
    links: [
      { label: "archWiki", url: "https://wiki.archlinux.org" },
      { label: "FMHY", url: "https://fmhy.pages.dev/" },
      {
        label: "HTML/CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web",
      },
      { label: "tailwind", url: "https://tailwindcss.com/docs/" },
      { label: "roadmap", url: "https://roadmap.sh/" },
      { label: "react", url: "https://react.dev/learn" },
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
      { label: "rym", url: "https://rateyourmusic.com/~lostglory_" },
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
      { label: "googleDrive", url: "https://drive.google.com/drive/my-drive" },
      { label: "IRCTC", url: "https://www.irctc.co.in/" },
      { label: "lainchan", url: "https://lainchan.org/" },
      { label: "gemini", url: "https://gemini.google.com/" },
      { label: "amazon", url: "https://amazon.in/" },
    ],
  },
  {
    id: 5,
    title: "Server",
    icon: "⬡",
    links: [
      { label: "syncthing", url: "http://127.0.0.1:8384/#" },
      { label: "wifiRouter", url: "http://192.168.1.1/" },
      { label: "statusPage", url: "https://status.startpage.gq/" },
      { label: "jellyfin", url: "http://127.0.0.1:8096/" },
      { label: "navidrome", url: "http://127.0.0.1:4533/" },
      { label: "nextcloud", url: "http://127.0.0.1:8080/" },
    ],
  },
];

export default startpageData;
