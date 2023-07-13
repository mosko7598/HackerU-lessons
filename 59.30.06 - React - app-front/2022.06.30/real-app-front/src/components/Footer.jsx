const Footer = () => {
  return (
    <footer>
      <p className="border-top pt-3 text-center">
        <span>
          Real<i className="bi bi-geo-fill"></i>App
        </span>
        <span className="mx-1">&copy;</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
