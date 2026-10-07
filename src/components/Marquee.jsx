import { MARQUEE } from "../data/portfolio";

export default function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-in">
        {[0, 1].map((k) => (
          <div className="mq-set" key={k}>
            {MARQUEE.map((x) => <span key={x}>{x}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
