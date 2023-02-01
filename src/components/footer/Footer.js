import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      Built by Vaidas Šipelis
      <a href="https://shorturl.at/f3467">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>
      <a
        href="https://github.com/clawetoora
"
      >
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </footer>
  );
};

export default Footer;
