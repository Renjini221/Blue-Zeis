function Features() {
  const f = [
    ['No salt accumulation', 'Continuous brine drainage keeps the membrane working instead of fouling.'],
    ['Scales with need', 'One unit for a boat, more membrane area for a whole village supply.'],
    ['Off-grid by design', 'Runs on sunlight and gravity, ideal where power is unreliable.'],
    ['Built to last', 'An average tested run of 180 hours, well beyond a basic solar still.'],
    ['Doubles as a monitor', 'Add sensors and the same unit can track coastal water conditions.'],
    ['Low cost to run', 'Few moving parts, no pump, and nothing to replace after each run.']
  ];
  return (<section><div className="wrap">
    <div className="kicker">Why Blue-Zeis</div>
    <h2>Quietly engineered for the coast.</h2>
    <div className="fgrid">{f.map(([h, p]) => (<div className="feat" key={h}><h3>{h}</h3><p>{p}</p></div>))}</div>
  </div></section>);
}

export default Features;
