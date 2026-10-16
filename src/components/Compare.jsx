function Compare() {
  const rows = [
    ['Energy source', 'Sunlight and gravity', 'Sunlight', 'Pressure pump power', 'Heat energy input'],
    ['Salt buildup', 'Brine drains away', 'Accumulates over time', 'Concentrate flushed', 'Brine discharged'],
    ['Output', 'Sustained, scalable', 'Low', 'High', 'High'],
    ['Portability', 'Boat to village scale', 'Highly portable', 'Fixed plant', 'Fixed plant'],
    ['Maintenance', 'Low', 'Regular cleaning', 'Membranes and pumps', 'Scaling and heat systems']
  ];
  const heads = ['', 'Blue-Zeis', 'Solar still', 'Reverse osmosis', 'Thermal distillation'];
  return (<section className="compare" id="compare"><div className="wrap">
    <div className="kicker">Compare</div>
    <h2>Where Blue-Zeis fits among desalination methods.</h2>
    <div className="tw"><table>
      <thead><tr>{heads.map((h, i) => (<th key={i} className={i === 1 ? 'us' : ''}>{h}</th>))}</tr></thead>
      <tbody>{rows.map(r => (<tr key={r[0]}>{r.map((c, i) => (<td key={i} className={i === 1 ? 'us' : ''}>{c}</td>))}</tr>))}</tbody>
    </table></div>
    <p className="note">Qualitative comparison based on typical characteristics of each method.</p>
  </div></section>);
}

export default Compare;
