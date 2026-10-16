import { useState, useEffect } from 'react';

function Readout() {
  const [t, setT] = useState(0);
  useEffect(() => { const id = setInterval(() => setT(x => x + 1), 1200); return () => clearInterval(id); }, []);
  const temp = 61 + 5 * Math.sin(t / 5);
  const flux = 1.6 + 0.35 * Math.sin(t / 5 + 0.4);
  const water = 12 + t * 0.045 * flux;
  return (<aside className="readout" aria-label="Simulated demo readout">
    <h4><span>Module A1</span><b><span className="dot"></span>Simulated demo</b></h4>
    <div className="row"><span>Feed temperature</span><div><strong>{temp.toFixed(1)}</strong><small>°C</small></div></div>
    <div className="row"><span>Vapor flux</span><div><strong>{flux.toFixed(2)}</strong><small>L/m²/h</small></div></div>
    <div className="row"><span>Clean water today</span><div><strong>{water.toFixed(1)}</strong><small>L</small></div></div>
  </aside>);
}

export default Readout;
