import { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);
  const [v, setV] = useState({ name: '', email: '', msg: '' });
  const on = k => e => setV({ ...v, [k]: e.target.value });
  const submit = e => {
    e.preventDefault();
    setSent(true);
    try {
      const body = encodeURIComponent(v.msg + '\n\nFrom: ' + v.name + ' (' + v.email + ')');
      window.open('mailto:hello@bluezeis.example?subject=' + encodeURIComponent('Blue-Zeis demo request') + '&body=' + body);
    } catch (err) {}
  };
  return (<section className="contact" id="contact"><div className="wrap grid">
    <div>
      <div className="kicker">Get in touch</div>
      <h2>Bring Blue-Zeis to your coastline.</h2>
      <p className="sub">Tell us about your village, cooperative or fleet and we will talk through a pilot.</p>
    </div>
    {sent
      ? (<div className="sent" role="status">Thanks, {v.name || 'friend'}. Your email app should open with your message ready to send.</div>)
      : (<form onSubmit={submit}>
          <input required placeholder="Your name" value={v.name} onChange={on('name')} aria-label="Your name" />
          <input required type="email" placeholder="Email address" value={v.email} onChange={on('email')} aria-label="Email address" />
          <textarea required placeholder="Where would you use it?" value={v.msg} onChange={on('msg')} aria-label="Message"></textarea>
          <button className="pill" type="submit" style={{ padding: '15px 28px', fontSize: '.95rem', alignSelf: 'flex-start' }}>Send request</button>
        </form>)}
  </div></section>);
}

export default Contact;
