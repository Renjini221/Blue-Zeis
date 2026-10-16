import { useState } from 'react';

function Estimator() {
  const [area, setArea] = useState(10);
  const [sun, setSun] = useState(6);
  const litres = Math.round(area * 1.5 * sun);
  return (<section id="estimate"><div className="wrap">
    <div className="kicker">Estimator</div>
    <h2>How much water could your site make?</h2>
    <p className="sub">Adjust membrane area and daily peak sunlight to see a planning estimate.</p>
    <div className="est">
      <div>
        <div className="ctl"><label htmlFor="a">Membrane area <b>{area} m²</b></label>
          <input id="a" type="range" min="1" max="60" value={area} onChange={e => setArea(+e.target.value)} /></div>
        <div className="ctl"><label htmlFor="s">Peak sunlight <b>{sun} h/day</b></label>
          <input id="s" type="range" min="3" max="9" step="0.5" value={sun} onChange={e => setSun(+e.target.value)} /></div>
        <p className="note">Assumes an illustrative average flux of 1.5 L/m²/h. This is a planning figure, not a measured Blue-Zeis result.</p>
      </div>
      <div className="result">
        <div className="big">{litres}<small>litres / day</small></div>
        <p>Roughly enough drinking water for {Math.floor(litres / 3)} people at 3 litres each per day.</p>
        <p className="note">Real output depends on temperature, salinity, membrane specification and weather.</p>
      </div>
    </div>
  </div></section>);
}

export default Estimator;
