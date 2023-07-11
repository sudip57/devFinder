const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <div>
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </div>
  );
};

export default Footer;
