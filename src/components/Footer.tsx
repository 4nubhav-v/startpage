function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-gb-bg text-gb-fg p-4 absolute bottom-0 w-full border-t border-gb-bg1 py-4 px-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Anubhav
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
