import { useEffect, useState } from "react";
import { STAGES } from "../data/portfolio";

export default function Pipeline() {
  const [n, setN] = useState(-1);
  const [run, setRun] = useState(0);

  useEffect(() => {
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= STAGES.length) clearInterval(id);
    }, 1100);
    return () => clearInterval(id);
  }, [run]);

  const cur = Math.min(Math.max(n, 0), STAGES.length - 1);
  const finished = n >= STAGES.length;

  return (
    <div className="pipe" role="region" aria-label="Release pipeline demo">
      <div className="pipe-h">
        <h2>How I ship a release</h2>
        <button className="btn" onClick={() => setRun(run + 1)}>Run pipeline again</button>
      </div>
      <ol className="stages">
        {STAGES.map(([name], i) => (
          <li key={name} className={"stage " + (i < n ? "done" : i === n ? "run" : "")}>
            <span className="dot" />
            {name}
          </li>
        ))}
      </ol>
      <p className="log" aria-live="polite">
        {finished ? "✓ pipeline passed: release deployed and verified" : "$ " + STAGES[cur][1]}
      </p>
    </div>
  );
}
