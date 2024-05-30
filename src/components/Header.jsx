import logoImg from "../assets/logo.png";
export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Stylized globe" />
      <h1>PLACEPICKER</h1>
      <p>
        Create your personal collection of places you would like to visit or you
        have visited
      </p>
    </header>
  );
}
