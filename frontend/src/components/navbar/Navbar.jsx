import { Link, useLocation } from "react-router-dom";
import { navigation } from "./navigation";
import { Container } from "../ui";

function Navbar() {
  const location = useLocation();
  console.log(location);

  return (
    <nav className="bg-zinc-950">
      <Container className="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl">PERN Tasks</h1>
        </Link>

        <ul className="flex gap-x-2">
          {navigation.map(({ path, name }) => (
            <li
              className={`text-slate-300 ${
                location.pathname === path && "bg-sky-500 px-3 py-1"
              }`}
              key={path}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
