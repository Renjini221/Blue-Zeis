import Readout from './Readout';

function Hero() {
  const wave = 'M0,70 C150,20 300,120 450,70 C600,20 750,120 900,70 C1050,20 1200,120 1350,70 C1500,20 1650,120 1800,70 C1950,20 2100,120 2250,70 C2400,20 2550,120 2700,70 L2700,150 L0,150 Z';
  return (<section className="hero" id="top" style={{ padding: '96px 0 0' }}>
    <div className="sun"></div>
    <div className="wrap">
      <div>
        <span className="tag">Solar-powered membrane desalination</span>
        <h1>Fresh water, drawn from the <em>same sea</em> that spoiled the well.</h1>
        <p className="lead">Blue-Zeis turns seawater into safe drinking water using sunlight and a hydrophobic membrane. No fuel, no grid power, no salt buildup. Built for coastal communities and the fishermen who sail from them.</p>
        <div className="ctas">
          <a className="pill" href="#contact">Request a demo</a>
          <a className="ghost" href="#process">See how it works</a>
        </div>
      </div>
      <Readout />
    </div>
    <div className="waves" aria-hidden="true">
      <svg className="w2" viewBox="0 0 2700 150" preserveAspectRatio="none"><path d={wave} fill="rgba(95,168,156,.18)"/></svg>
      <svg className="w1" viewBox="0 0 2700 150" preserveAspectRatio="none" style={{ transform: 'translateY(14px)' }}><path d={wave} fill="var(--bg)"/></svg>
    </div>
  </section>);
}

export default Hero;
