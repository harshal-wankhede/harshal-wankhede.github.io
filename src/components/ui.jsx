export function Section({ id, title, children }) {
  return (
    <section id={id}>
      <div className="wrap">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export const Chips = ({ items }) => (
  <ul className="chips">{items.map((x) => <li key={x}>{x}</li>)}</ul>
);

export const Points = ({ items }) => (
  <ul className="pts">{items.map((x) => <li key={x}>{x}</li>)}</ul>
);
