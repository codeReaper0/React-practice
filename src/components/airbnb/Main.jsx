import hero from "../../assets/images/hero.png";
function Main() {
  return (
    <main className="py-10 max-w-5xl p-4 sm:px-10 mx-auto font-poppins">
      <img
        src={hero}
        alt="hero image"
        className="mx-auto mb-32 max-w-[400px] lg:max-w-max"
      />
      <section>
        <h1 className="text-4xl font-semibold mb-2">Online Experiences</h1>
        <p className="font-light max-w-xs">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </main>
  );
}

export default Main;
