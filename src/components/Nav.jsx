import { NAV, PROFILE } from "../data/portfolio";

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <b>{PROFILE.name}</b>
        <ul>
          {NAV.map((x) => (
            <li key={x}><a href={"#" + x.toLowerCase()}>{x}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
