function Problem() {
  const items = [
    ['Contaminated wells', 'Seawater intrusion makes borewells and wells unfit for drinking and farming.'],
    ['Storage risk at sea', 'Fishermen carry freshwater on long trips, and it can spoil or run out before they return.'],
    ['Health impact', 'Unsafe water raises waterborne disease and weakens food security for whole villages.'],
    ['Damaged farmland', 'Saline water harms crops and soil, and yields fall season after season.']
  ];
  return (<section className="problem" id="problem"><div className="wrap grid">
    <div>
      <div className="kicker">The problem</div>
      <h2>The sea is moving into the water people drink.</h2>
      <p className="sub">As seawater pushes into coastal aquifers, the wells that once served families, farmers and fishermen turn saline. The communities most exposed are the ones with the least infrastructure to treat it.</p>
    </div>
    <ul className="plist">{items.map(([h, p]) => (<li key={h}><h3>{h}</h3><p>{p}</p></li>))}</ul>
  </div></section>);
}

export default Problem;
