function Diagram({ step }) {
  const c = (...n) => (n.includes(step) ? 'on' : 'dim');
  return (<svg viewBox="0 0 600 340" role="img" aria-label="Blue-Zeis system diagram">
    <g className={c(0)}>
      <circle cx="70" cy="50" r="22" fill="#E3B65C"/>
      <g stroke="#E3B65C" strokeWidth="3" strokeLinecap="round"><line x1="70" y1="12" x2="70" y2="2"/><line x1="104" y1="50" x2="116" y2="50"/><line x1="96" y1="26" x2="104" y2="18"/><line x1="44" y1="26" x2="36" y2="18"/></g>
      <polygon points="50,170 190,120 215,160 75,215" fill="#3F8FB8" stroke="#9CCBE0" strokeWidth="2"/>
      <text x="60" y="250" fill="#9CCBE0" fontSize="13" fontFamily="Manrope">Solar collector</text>
    </g>
    <g className={c(0, 1)}>
      <rect x="40" y="270" width="110" height="52" rx="8" fill="#0F3B4F" stroke="#5FA89C" strokeWidth="2"/>
      <text x="62" y="301" fill="#BFE0DA" fontSize="13" fontFamily="Manrope">Seawater tank</text>
    </g>
    <g className={c(1)}>
      <path d="M215,150 C270,150 280,165 320,165" fill="none" stroke="#E3B65C" strokeWidth="4" className="flow"/>
      <text x="240" y="138" fill="#E3B65C" fontSize="12" fontFamily="Manrope">gravity feed</text>
    </g>
    <g className={c(2)}>
      <rect x="320" y="90" width="190" height="150" rx="10" fill="#0F3B4F" stroke="#9CCBE0" strokeWidth="2"/>
      <rect x="326" y="96" width="87" height="138" rx="6" fill="#B5502F" opacity=".55"/>
      <rect x="417" y="96" width="87" height="138" rx="6" fill="#4FA3C7" opacity=".5"/>
      <line x1="415" y1="92" x2="415" y2="238" stroke="#F3F1EA" strokeWidth="3" strokeDasharray="3 5"/>
      <g stroke="#F3F1EA" strokeWidth="2.5" className="flow" fill="none"><path d="M395,130 L440,130"/><path d="M395,165 L440,165"/><path d="M395,200 L440,200"/></g>
      <text x="334" y="262" fill="#9CCBE0" fontSize="12" fontFamily="Manrope">hot feed | membrane | cool side</text>
    </g>
    <g className={c(3)}>
      <path d="M460,240 L460,285" stroke="#9CCBE0" strokeWidth="3" fill="none" className="flow"/>
      <path d="M365,240 L365,300 L330,300" stroke="#B5502F" strokeWidth="3" fill="none" className="flow"/>
      <path d="M430,285 L430,325 L505,325 L505,285 Z" fill="#4FA3C7" opacity=".6" stroke="#CFE8F3" strokeWidth="2"/>
      <text x="436" y="316" fill="#fff" fontSize="12" fontFamily="Manrope">clean water</text>
      <text x="262" y="318" fill="#E39B7C" fontSize="12" fontFamily="Manrope">brine out</text>
    </g>
  </svg>);
}

export default Diagram;
