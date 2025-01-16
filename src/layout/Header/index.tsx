import { AtomPNG } from "../../../assets";
import "./Header.css"

export default function Header() {
  return (
    <header>
      <img src={AtomPNG} alt="Stylized atom" />
      <h1>Les fondamentaux de React</h1>
      <p>
        Les concepts React fondamentaux dont vous aurez besoin pour presque
        n'importe quelle application que vous allez construire!
      </p>
    </header>
  );
}