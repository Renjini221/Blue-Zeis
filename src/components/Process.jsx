import { useState } from 'react';
import Diagram from './Diagram';

const steps = [
  { t: 'Solar heating', d: 'A solar collector absorbs sunlight and warms incoming seawater. No electricity, no fuel.' },
  { t: 'Gravity feed', d: 'Warm water flows from the collector into the membrane module by gravity alone, so there is no pump to maintain or power.' },
  { t: 'Membrane separation', d: 'A hydrophobic membrane blocks liquid water but lets vapor cross from the hot side to the cool side, leaving salt behind.' },
  { t: 'Condense and collect', d: 'Vapor condenses into clean water on the cool side. Leftover brine drains away instead of crusting the membrane.' }
];

function Process() {
  const [s, setS] = useState(0);
  return (<section className="process" id="process"><div className="wrap">
    <div className="kicker">How Blue-Zeis works</div>
    <h2>Sunlight in. Clean water out.</h2>
    <p className="sub">Four stages, no moving parts that need power. Select a stage to see where it happens in the system.</p>
    <div className="pgrid">
      <div className="tabs" role="tablist">{steps.map((st, i) => (
        <button key={i} className="tab" role="tab" aria-selected={s === i} onClick={() => setS(i)}>
          <h3>{i + 1}. {st.t}</h3><p>{st.d}</p>
        </button>))}
      </div>
      <div className="diagram"><Diagram step={s} /></div>
    </div>
  </div></section>);
}

export default Process;
