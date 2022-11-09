import logo from "../../assets/images/airbnb_logo.png";
function NavBar() {
  return (
    <header className="py-6 px-8 shadow-[0px_2.98256px_7.4564px_rgba(0,0,0,0.1)]">
      <img src={logo} alt="AirBnB Logo" />
    </header>
  );
}

export default NavBar;
