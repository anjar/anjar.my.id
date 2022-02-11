function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-3 bg-gray-100 dark:bg-gray-600 ">
      <p className="text-center">
        {' '}
        &copy; Copyright
        {' '}
        {currentYear}
        {' '}
        Anjar Febrianto
      </p>
    </footer>
  );
}

export default Footer;
