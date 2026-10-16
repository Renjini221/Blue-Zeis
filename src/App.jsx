import Nav from './components/Nav';
import Hero from './components/Hero';
import Strip from './components/Strip';
import Problem from './components/Problem';
import Process from './components/Process';
import Estimator from './components/Estimator';
import Compare from './components/Compare';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  const toggle = () => {
    const el = document.documentElement;
    const dark = el.dataset.theme ? el.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    el.dataset.theme = dark ? 'light' : 'dark';
  };
  return (<>
    <Nav toggle={toggle} /><Hero /><Strip /><Problem /><Process /><Estimator /><Compare /><Features /><Contact />
    <footer><div className="wrap"><div>Blue-Zeis. Solar desalination, built for the coast.</div><div>hello@bluezeis.example</div></div></footer>
  </>);
}

export default App;
