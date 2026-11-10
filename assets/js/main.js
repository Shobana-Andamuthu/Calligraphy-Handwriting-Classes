(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const root = document.documentElement;
  const apply = () => { root.dataset.theme = get('theme') || 'light'; root.dir = get('dir') || 'ltr'; };
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    const L = (href, key, label) => `<li><a href="${href}" class="${page === key ? 'on' : ''}" ${page === key ? 'aria-current="page"' : ''}>${label}</a></li>`;
    const homeOn = page === 'home1' || page === 'home2';
    $('#site-nav').innerHTML = `<nav class="nav" aria-label="Main"><div class="wrap">
      <a class="logo" href="index.html" aria-label="Inkwell Calligraphy Academy home"><img class="d" src="assets/images/logo.png" alt="Inkwell Calligraphy Academy"><img class="l" src="assets/images/logo-light.png" alt="" aria-hidden="true"></a>
      <button class="icon-btn burger" id="burger" aria-label="Toggle menu" aria-expanded="false"><svg class="m" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg><svg class="x" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div class="panel" id="panel"><ul class="links">
        <li class="dd" id="dd"><button class="dd-btn ${homeOn ? 'on' : ''}" aria-expanded="false">Home <span aria-hidden="true">▾</span></button>
          <ul class="dd-menu"><li><a href="index.html" class="${page === 'home1' ? 'on' : ''}">Home 1<small>Style explorer</small></a></li><li><a href="home-2.html" class="${page === 'home2' ? 'on' : ''}">Home 2<small>Class matcher</small></a></li></ul></li>
        ${L('about.html', 'about', 'About')}${L('courses.html', 'courses', 'Courses')}${L('schedule.html', 'schedule', 'Schedule')}${L('contact.html', 'contact', 'Contact')}
      </ul><div class="actions">
        <button class="icon-btn" id="theme" aria-label="Toggle light/dark mode" title="Light / dark"></button>
        <button class="icon-btn dir" id="dir" aria-label="Toggle LTR/RTL" title="Text direction"></button>
        <a class="btn btn-p" href="contact.html#enroll">Enroll Now</a></div></div></div></nav>`;
    $('#site-footer').innerHTML = `<footer class="foot"><div class="wrap"><div class="cols">
      <div><a class="logo" href="index.html" aria-label="Inkwell Calligraphy Academy home"><img src="assets/images/logo-light.png" alt="Inkwell Calligraphy Academy"></a><p>Calligraphy and handwriting classes for children, teens and adults in Chennai.</p>
        <div class="soc"><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/></svg></a><a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/></svg></a><a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="3.5"/><path d="M10 9.5l5 2.5-5 2.5z"/></svg></a><a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 8 19.3z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z"/></svg></a></div></div>
      <div><h4>Pages</h4><ul><li><a href="index.html">Home 1</a></li><li><a href="home-2.html">Home 2</a></li><li><a href="about.html">About</a></li><li><a href="courses.html">Courses</a></li><li><a href="schedule.html">Schedule</a></li><li><a href="contact.html">Contact</a></li></ul></div>
      <div><h4>Contact</h4><ul class="ct"><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span>24, Cathedral Road, Gopalapuram, Chennai 600086</span></li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg><a href="tel:+914455501234">+91 44 5550 1234</a></li><li><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:hello@inkwell-studio.example">hello@inkwell-studio.example</a></li><li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>Mon–Sat, 9 AM – 6 PM</span></li></ul></div>
      <div><h4>Open-day dates</h4><p>A free demo class each month. Leave your email and we send the next date.</p>
        <form class="news" id="news" novalidate><input id="news-e" type="email" placeholder="Email address" aria-label="Email address"><button class="btn btn-p" type="submit">Send dates</button></form><div class="news-m" id="news-m" role="status"></div></div>
    </div><div class="copy">© 2026 Inkwell Calligraphy Academy. All rights reserved. · Privacy · Terms · Fee refund policy</div></div></footer>
    <button class="top" id="top" aria-label="Back to top">↑</button>`;
    const panel = $('#panel'), burger = $('#burger'), dd = $('#dd');
    const closeDD = () => { dd.classList.remove('open'); $('.dd-btn', dd).setAttribute('aria-expanded', 'false'); };
    const closeMenu = () => { panel.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); closeDD(); };
    burger.onclick = () => { const o = panel.classList.toggle('open'); burger.setAttribute('aria-expanded', o); if (!o) closeDD(); };
    $('.dd-btn', dd).onclick = e => { e.stopPropagation(); const o = dd.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o); };
    panel.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('click', e => { if (!dd.contains(e.target)) closeDD(); if (!e.target.closest('.nav')) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    const t = $('#theme'), d = $('#dir');
    const label = () => { const dk = root.dataset.theme === 'dark'; t.innerHTML = dk ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5a8.5 8.5 0 1 0 10.8 10.8z"/></svg>'; t.setAttribute('aria-label', dk ? 'Switch to light mode' : 'Switch to dark mode'); d.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h13M14 5l3 3-3 3"/><path d="M20 16H7M10 13l-3 3 3 3"/></svg>'; d.setAttribute('aria-label', root.dir === 'rtl' ? 'Switch to left-to-right' : 'Switch to right-to-left'); };
    t.onclick = () => { set('theme', root.dataset.theme === 'dark' ? 'light' : 'dark'); apply(); label(); };
    d.onclick = () => { set('dir', root.dir === 'rtl' ? 'ltr' : 'rtl'); apply(); label(); };
    label();
    const top = $('#top');
    addEventListener('scroll', () => top.classList.toggle('show', scrollY > 400), { passive: true });
    top.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

    const f = $('#enroll');
    if (f) f.addEventListener('submit', e => {
      e.preventDefault(); let ok = true;
      const chk = (id, test, m) => { const el = $('#' + id), er = $('#' + id + '-e'); const v = el.value.trim(); const bad = !test(v); el.classList.toggle('bad', bad); er.textContent = bad ? m : ''; if (bad) ok = false; };
      chk('name', v => v.length > 1, 'Please enter your name.');
      chk('email', v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v), 'Enter a valid email.');
      chk('age', v => v >= 4 && v <= 99, 'Enter an age from 4 to 99.');
      chk('course', v => v !== '', 'Select a course.');
      const m = $('#msg'); m.classList.add('show');
      m.textContent = ok ? 'Demo only: your details are valid, but no backend is connected so nothing was sent.' : 'Please fix the highlighted fields.';
    });

    const nf = $('#news'); nf.addEventListener('submit', e => { e.preventDefault(); const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test($('#news-e').value.trim()); $('#news-m').textContent = ok ? 'Demo only: no backend is connected, so nothing was sent.' : 'Please enter a valid email address.'; });
    document.querySelectorAll('.tabs').forEach(t => t.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; t.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); t.parentElement.querySelectorAll('.tp').forEach(p => p.classList.toggle('on', p.id === b.dataset.t)); }));
    const mt = $('#matcher');
    if (mt) { const R = { a: 'Little Hands (ages 6–9): Saturday 10:00–11:00, ₹6,500 per term.', b: 'Cursive Club (ages 10–13): Saturday 11:30–12:30, ₹7,000 per term.', c: 'Italic Studio (ages 14–17): Sunday 10:00–11:30, ₹8,500 per term.', d: 'Copperplate (adults): Wednesday 18:30–20:00, ₹12,000 per term.', e: 'Brush Lettering Weekend (adults): Friday 18:30–20:00, ₹4,500 for 6 weeks.' };
      mt.addEventListener('submit', e => { e.preventDefault(); const a = $('#m-age').value, g = $('#m-goal').value; $('#m-out').textContent = !a ? 'Choose an age group first.' : 'Suggested: ' + (a === 'd' && g === 'brush' ? R.e : R[a]) + ' (sample fees)'; }); }

    const nl = $('#nlf'); if (nl) nl.addEventListener('submit', e => { e.preventDefault(); const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test($('#nl-e').value.trim()); $('#nl-m').textContent = ok ? 'Demo only: no backend is connected, so nothing was sent.' : 'Please enter a valid email address.'; });
    document.querySelectorAll('.tcar').forEach(c => { const it = [...c.querySelectorAll('.ts')]; let i = 0; const show = n => { i = (n + it.length) % it.length; it.forEach((x, k) => x.classList.toggle('on', k === i)); };
      c.querySelector('.tprev').onclick = () => show(i - 1); c.querySelector('.tnext').onclick = () => show(i + 1); });

    document.querySelectorAll('details').forEach(d => d.addEventListener('toggle', () => { if (d.open) document.querySelectorAll('details').forEach(o => { if (o !== d && o.parentElement === d.parentElement) o.open = false; }); }));

    const LD = document.getElementById('loader');
    if (LD) { const t0 = performance.now(); let gone = false;
      const done = () => { if (gone) return; gone = true; setTimeout(() => { LD.classList.add('hide'); setTimeout(() => LD.remove(), 600); }, Math.max(0, 800 - (performance.now() - t0))); };
      if (document.readyState === 'complete') done(); else addEventListener('load', done);
      setTimeout(done, 3500); }
    document.querySelectorAll('img[data-px]').forEach(i => {
      const id = i.dataset.px;
      i.src = `assets/images/pexels-photo-${id}.jpg`;
      i.loading = i.dataset.eager ? 'eager' : 'lazy';
    });
  });
})();
