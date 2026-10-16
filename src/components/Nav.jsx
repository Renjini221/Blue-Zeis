function Nav({ toggle }) {
  return (<header className="nav"><div className="wrap">
    <a className="brand" href="#top">Blue<i>-</i>Zeis</a>
    <ul>
      <li><a href="#problem">The problem</a></li>
      <li><a href="#process">How it works</a></li>
      <li><a href="#estimate">Estimator</a></li>
      <li><a href="#compare">Compare</a></li>
    </ul>
    <div className="right">
      <button className="tbtn" onClick={toggle} aria-label="Toggle light and dark theme">◐</button>
      <a className="pill" href="#contact">Request a demo</a>
    </div>
  </div></header>);
}

export default Nav;
