/* jf-core: gedeelde basis voor alle jf.tools (inloggen, thema, apps-menu, hulpjes) */
(function () {
  'use strict';
  var SUPABASE_URL = 'https://azzhruqhvmxqwsyatlju.supabase.co';
  var APPS = [
    { key: 'office', name: 'jf.office', url: '../jf-office/', color: '#15161a', label: 'Startscherm' },
    { key: 'pages', name: 'jf.pages', url: '../jf-pages/', color: '#3b6cff', label: 'Documenten' },
    { key: 'cells', name: 'jf.cells', url: '../jf-cells/', color: '#2f9e44', label: 'Spreadsheets' },
    { key: 'pres', name: 'jf.presentations', url: '../jf-presentations/', color: '#fab005', label: 'Presentaties' },
    { key: 'notes', name: 'jf.notes', url: '../jf-notes/', color: '#e03131', label: 'Notities' },
    { key: 'planner', name: 'jf.planner', url: '../jf-planner/', color: '#7048e8', label: 'Planner' },
    { key: 'forms', name: 'jf.forms', url: '../jf-forms/', color: '#f76707', label: 'Formulieren' },
    { key: 'draw', name: 'jf.draw', url: '../jf-draw/', color: '#e64980', label: 'Whiteboard' },
    { key: 'drive', name: 'jf.drive', url: '../jf-drive/', color: '#0ca678', label: 'Bestanden' }
  ];

  var ICONS = {
    planner: '<svg viewBox="40 40 220 220"><rect x="40" y="40" width="220" height="220" rx="48" fill="#15161a"/><rect x="78" y="80" width="144" height="146" rx="12" fill="#fff"/><path d="M78 92q0-12 12-12h120q12 0 12 12v20H78z" fill="#7048e8"/><rect x="104" y="68" width="10" height="26" rx="5" fill="#d0bfff"/><rect x="186" y="68" width="10" height="26" rx="5" fill="#d0bfff"/><text x="90" y="106" font-size="20" font-weight="700" font-family="system-ui,sans-serif" fill="#fff">jf<tspan fill="#d0bfff">.</tspan></text><g fill="#e5dbff"><rect x="92" y="124" width="22" height="18" rx="4"/><rect x="120" y="124" width="22" height="18" rx="4"/><rect x="148" y="124" width="22" height="18" rx="4"/><rect x="176" y="124" width="22" height="18" rx="4"/><rect x="92" y="150" width="22" height="18" rx="4"/><rect x="148" y="150" width="22" height="18" rx="4"/><rect x="176" y="150" width="22" height="18" rx="4"/><rect x="92" y="176" width="22" height="18" rx="4"/><rect x="120" y="176" width="22" height="18" rx="4"/><rect x="148" y="176" width="22" height="18" rx="4"/></g><rect x="120" y="150" width="22" height="18" rx="4" fill="#7048e8"/><rect x="176" y="176" width="22" height="18" rx="4" fill="#ffd8a8"/><rect x="92" y="204" width="70" height="7" rx="3.5" fill="#7048e8"/></svg>',
    forms: '<svg viewBox="420 40 220 220"><rect x="420" y="40" width="220" height="220" rx="48" fill="#15161a"/><rect x="462" y="70" width="136" height="160" rx="12" fill="#fff"/><path d="M462 82q0-12 12-12h112q12 0 12 12v18H462z" fill="#f76707"/><text x="474" y="93" font-size="20" font-weight="700" font-family="system-ui,sans-serif" fill="#fff">jf<tspan fill="#ffd8a8">.</tspan></text><rect x="476" y="114" width="78" height="7" rx="3.5" fill="#15161a" opacity=".75"/><circle cx="484" cy="140" r="8" fill="none" stroke="#f76707" stroke-width="3"/><circle cx="484" cy="140" r="4" fill="#f76707"/><rect x="498" y="137" width="62" height="6" rx="3" fill="#ffd8a8"/><circle cx="484" cy="164" r="8" fill="none" stroke="#f76707" stroke-width="3"/><rect x="498" y="161" width="48" height="6" rx="3" fill="#ffe8cc"/><rect x="476" y="182" width="108" height="14" rx="4" fill="none" stroke="#ffd8a8" stroke-width="2.5"/><rect x="476" y="206" width="54" height="14" rx="7" fill="#f76707"/></svg>',
    draw: '<svg viewBox="40 40 220 220"><rect x="40" y="40" width="220" height="220" rx="48" fill="#15161a"/><rect x="72" y="72" width="156" height="156" rx="14" fill="#fff"/><text x="86" y="104" font-size="24" font-weight="700" font-family="system-ui,sans-serif" fill="#15161a">jf<tspan fill="#e64980">.</tspan></text><path d="M88 190C104 150 124 210 140 168S172 140 182 160" fill="none" stroke="#e64980" stroke-width="7" stroke-linecap="round"/><circle cx="186" cy="104" r="18" fill="none" stroke="#e64980" stroke-width="5"/><rect x="150" y="176" width="54" height="40" rx="5" fill="#ffe066" transform="rotate(-6 177 196)"/><path d="M98 132L136 132" stroke="#15161a" stroke-width="4" stroke-linecap="round"/><path d="M128 124L138 132L128 140" fill="none" stroke="#15161a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    drive: '<svg viewBox="420 40 220 220"><rect x="420" y="40" width="220" height="220" rx="48" fill="#15161a"/><path d="M454 102q0-12 12-12h40q8 0 12 6l8 10h64q12 0 12 12v88q0 12-12 12H466q-12 0-12-12z" fill="#fff"/><path d="M454 102q0-12 12-12h40q8 0 12 6l8 10h-72z" fill="#0ca678"/><text x="468" y="140" font-size="24" font-weight="700" font-family="system-ui,sans-serif" fill="#15161a">jf<tspan fill="#0ca678">.</tspan></text><path d="M538 196h44a16 16 0 0 0 2-32 22 22 0 0 0-42-6 14 14 0 0 0-4 38z" fill="#c3fae8"/><path d="M560 188v-24M550 172l10-10 10 10" fill="none" stroke="#0ca678" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><rect x="468" y="160" width="46" height="6" rx="3" fill="#96f2d7"/><rect x="468" y="174" width="34" height="6" rx="3" fill="#c3fae8"/></svg>'
  };

  var CSS = [
    '.jf-hidden{display:none!important}',
    '#jfAuth{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;background:var(--bg);color:var(--text)}',
    '#jfAuth .card{width:100%;max-width:390px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:32px}',
    '#jfAuth .brand{display:flex;align-items:center;gap:12px;font-size:22px;font-weight:650;letter-spacing:-.01em}',
    '#jfAuth .brand svg{width:44px;height:44px;display:block}',
    '#jfAuth .lead{color:var(--muted);font-size:14px;margin:10px 0 24px;line-height:1.5}',
    '#jfAuth label{display:block;margin-bottom:12px}',
    '#jfAuth label span{display:block;font-size:13px;font-weight:500;margin-bottom:6px}',
    '#jfAuth input{width:100%;height:44px;padding:0 13px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--text);font:inherit;outline:none}',
    '#jfAuth input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--tint)}',
    '#jfAuth .go{width:100%;height:44px;border:0;border-radius:10px;background:var(--accent);color:var(--onacc,#fff);font:inherit;font-weight:650;cursor:pointer;margin-top:4px}',
    '#jfAuth .go:disabled{opacity:.6;cursor:default}',
    '#jfAuth .msg{font-size:13px;min-height:18px;margin-top:12px;color:var(--danger)}',
    '#jfAuth .msg.ok{color:#2b8a3e}',
    '#jfAuth .row{margin-top:14px;font-size:13px;color:var(--muted)}',
    '#jfAuth .row button{background:none;border:0;color:var(--text);font:inherit;font-weight:600;text-decoration:underline;text-underline-offset:3px;cursor:pointer;padding:0}',
    '#jfAuth .theme{position:fixed;top:16px;right:16px}',
    '.jf-apps{position:relative}',
    '.jf-apps>summary{list-style:none;cursor:pointer}',
    '.jf-apps>summary::-webkit-details-marker{display:none}',
    '.jf-apps .pop{position:absolute;left:0;top:calc(100% + 8px);width:300px;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:8px;z-index:90;box-shadow:0 14px 36px rgba(0,0,0,.18);display:grid;grid-template-columns:1fr 1fr;gap:2px}',
    '.jf-apps .pop a{display:flex;align-items:center;gap:9px;padding:8px;border-radius:9px;color:var(--text);text-decoration:none;font-size:13px}',
    '.jf-apps .pop a:hover{background:var(--hover)}',
    '.jf-apps .pop a.cur{background:var(--tint)}',
    '.jf-apps .pop i{width:10px;height:10px;border-radius:3px;flex:0 0 auto}',
    '.jf-apps .pop a.home{grid-column:1/-1;font-weight:600;border-bottom:1px solid var(--line);border-radius:9px 9px 0 0;margin-bottom:4px}',
    '.jf-toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--text);color:var(--bg);padding:10px 16px;border-radius:10px;font-size:14px;z-index:300;box-shadow:0 8px 24px rgba(0,0,0,.2)}'
  ].join('\n');

  var JF = window.JF = {
    apps: APPS, icons: ICONS, sb: null, user: null,
    $: function (id) { return document.getElementById(id); },
    esc: function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); },
    uid: function () { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-3); },
    toast: function (t) { var d = document.createElement('div'); d.className = 'jf-toast'; d.textContent = t; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2300); },
    when: function (s) {
      var d = new Date(s), now = new Date(), t = d.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
      if (d.toDateString() === now.toDateString()) return 'Vandaag ' + t;
      var y = new Date(now); y.setDate(now.getDate() - 1);
      if (d.toDateString() === y.toDateString()) return 'Gisteren ' + t;
      return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: d.getFullYear() === now.getFullYear() ? undefined : 'numeric' });
    },
    download: function (name, content, type) { var a = document.createElement('a'); a.href = URL.createObjectURL(content instanceof Blob ? content : new Blob([content], { type: type })); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500); },
    safeName: function (s, fb) { return (String(s || '').trim() || fb || 'bestand').replace(/[\\/:*?"<>|]/g, ''); }
  };

  /* ---------- thema (gedeeld via localStorage 'jf-theme') ---------- */
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  JF.theme = function () { return localStorage.getItem('jf-theme') || 'auto'; };
  JF.applyTheme = function () {
    var p = JF.theme();
    document.documentElement.dataset.theme = (p === 'dark' || (p === 'auto' && mq.matches)) ? 'dark' : 'light';
    var label = p === 'auto' ? '◐ Auto' : p === 'light' ? '☀ Licht' : '☾ Donker';
    document.querySelectorAll('.themeBtn').forEach(function (b) { b.textContent = label; b.title = 'Weergave wisselen (Auto volgt je apparaat)'; });
    document.dispatchEvent(new Event('jf-theme'));
  };
  JF.cycleTheme = function () {
    var p = JF.theme(), n = p === 'auto' ? 'light' : p === 'light' ? 'dark' : 'auto';
    localStorage.setItem('jf-theme', n); JF.applyTheme();
    JF.toast(n === 'auto' ? 'Weergave volgt nu je apparaat' : n === 'light' ? 'Lichte weergave' : 'Donkere weergave');
  };
  mq.addEventListener('change', JF.applyTheme);
  window.addEventListener('storage', function (e) { if (e.key === 'jf-theme') JF.applyTheme(); });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.themeBtn'); if (t) JF.cycleTheme();
    document.querySelectorAll('details[open]').forEach(function (d) { if (!d.contains(e.target)) d.removeAttribute('open'); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') document.querySelectorAll('details[open]').forEach(function (d) { d.removeAttribute('open'); }); });

  /* ---------- apps-menu ---------- */
  JF.appsMenu = function (current) {
    var h = '<details class="jf-apps"><summary class="icon-btn">Apps ▾</summary><div class="pop">';
    APPS.forEach(function (a) {
      h += '<a href="' + a.url + '" class="' + (a.key === 'office' ? 'home ' : '') + (a.key === current ? 'cur' : '') + '"><i style="background:' + a.color + '"></i>' + (a.key === 'office' ? 'jf.office startscherm' : a.name) + '</a>';
    });
    return h + '</div></details>';
  };

  /* ---------- supabase-key (zelfde als jf.pages) ---------- */
  function getKey() {
    var cached = localStorage.getItem('jf-sb-key');
    return fetch('../jf-pages/index.html', { cache: 'no-store' }).then(function (r) { return r.text(); }).then(function (t) {
      var m = t.match(/const SUPABASE_KEY = '([^']+)'/);
      if (m && m[1].indexOf('PLAK_HIER') !== 0) { localStorage.setItem('jf-sb-key', m[1]); return m[1]; }
      return cached;
    }).catch(function () { return cached; });
  }

  function vertaal(m) {
    m = String(m || '');
    if (/failed to fetch|networkerror|load failed/i.test(m)) return 'Geen verbinding met de server. Check je internet of zet je adblocker voor deze site uit.';
    if (/invalid login/i.test(m)) return 'Dit e-mailadres en wachtwoord horen niet bij elkaar.';
    if (/already registered/i.test(m)) return 'Er bestaat al een account met dit e-mailadres. Log in.';
    if (/not confirmed/i.test(m)) return 'Bevestig eerst je e-mailadres via de link in je inbox.';
    if (/rate limit/i.test(m)) return 'Te veel pogingen. Wacht even en probeer het opnieuw.';
    if (/should be different/i.test(m)) return 'Kies een ander wachtwoord dan je huidige.';
    return m;
  }
  JF.vertaal = vertaal;

  /* ---------- inlogscherm ---------- */
  function buildAuth(opts) {
    var el = document.createElement('div'); el.id = 'jfAuth'; el.className = 'jf-hidden';
    el.innerHTML = '<button class="icon-btn themeBtn theme"></button><form class="card" id="jfAuthForm"><div class="brand">' + (ICONS[opts.app] || '') + '<span>' + JF.esc(opts.name) + '</span></div>' +
      '<p class="lead" id="jfAuthLead">' + JF.esc(opts.tagline || '') + ' Log in met je jf-account.</p>' +
      '<label><span>E-mailadres</span><input type="email" id="jfEmail" required autocomplete="email"></label>' +
      '<label><span>Wachtwoord</span><input type="password" id="jfPass" required autocomplete="current-password"></label>' +
      '<button class="go" id="jfGo" type="submit">Inloggen</button><div class="msg" id="jfMsg"></div>' +
      '<p class="row"><span id="jfSwT">Nog geen account?</span> <button type="button" id="jfSw">Account maken</button></p>' +
      '<p class="row"><button type="button" id="jfForgot">Wachtwoord vergeten</button></p></form>';
    document.body.insertBefore(el, document.body.firstChild);
    var mode = 'login';
    function msg(t, ok) { var m = JF.$('jfMsg'); m.textContent = t || ''; m.className = 'msg' + (ok ? ' ok' : ''); }
    JF.$('jfSw').onclick = function () {
      mode = mode === 'login' ? 'register' : 'login'; var r = mode === 'register';
      JF.$('jfGo').textContent = r ? 'Account maken' : 'Inloggen';
      JF.$('jfSwT').textContent = r ? 'Heb je al een account?' : 'Nog geen account?';
      JF.$('jfSw').textContent = r ? 'Inloggen' : 'Account maken';
      JF.$('jfPass').autocomplete = r ? 'new-password' : 'current-password'; msg('');
    };
    JF.$('jfAuthForm').onsubmit = function (e) {
      e.preventDefault(); if (!JF.sb) return;
      var email = JF.$('jfEmail').value.trim(), password = JF.$('jfPass').value;
      if (password.length < 6) return msg('Gebruik een wachtwoord van minstens 6 tekens.');
      JF.$('jfGo').disabled = true;
      var p = mode === 'login' ? JF.sb.auth.signInWithPassword({ email: email, password: password }) : JF.sb.auth.signUp({ email: email, password: password, options: { emailRedirectTo: location.origin + location.pathname } });
      p.then(function (res) {
        JF.$('jfGo').disabled = false;
        if (res.error) return msg(vertaal(res.error.message));
        if (mode === 'register' && !res.data.session) msg('Account gemaakt. Open de link in je e-mail om het te bevestigen.', true);
      }).catch(function (err) { JF.$('jfGo').disabled = false; msg(vertaal(err && err.message)); });
    };
    JF.$('jfForgot').onclick = function () {
      var email = JF.$('jfEmail').value.trim(); if (!email) { JF.$('jfEmail').focus(); return msg('Vul eerst je e-mailadres in.'); }
      JF.sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname }).then(function (r) { if (r.error) msg(vertaal(r.error.message)); else msg('We hebben je een link gestuurd om je wachtwoord opnieuw in te stellen.', true); }).catch(function (err) { msg(vertaal(err && err.message)); });
    };
  }

  JF.changePassword = function () {
    var np = prompt('Nieuw wachtwoord (minstens 6 tekens):'); if (!np) return;
    if (np.length < 6) return alert('Gebruik een wachtwoord van minstens 6 tekens.');
    JF.sb.auth.updateUser({ password: np }).then(function (r) { alert(r.error ? vertaal(r.error.message) : 'Je wachtwoord is gewijzigd.'); });
  };
  JF.logout = function () { return JF.sb.auth.signOut(); };

  /* ---------- start ----------
     opts: { app, name, tagline, appEl (id), public: bool (pagina werkt ook zonder login),
             onLogin(user), onLogout(), onPublic(sb) } */
  JF.start = function (opts) {
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    JF.applyTheme();
    if (!opts.public) buildAuth(opts);
    JF.applyTheme();
    var app = JF.$(opts.appEl || 'app');
    var started = false, curId;
    getKey().then(function (key) {
      var boot = JF.$('boot'); if (boot) boot.remove();
      if (!key || !window.supabase) {
        if (opts.public && opts.onPublic) return opts.onPublic(null, 'Kon geen verbinding maken met de server.');
        JF.$('jfAuth').classList.remove('jf-hidden'); JF.$('jfMsg').textContent = 'Kon geen verbinding maken met de server. Ververs de pagina.'; return;
      }
      JF.sb = window.supabase.createClient(SUPABASE_URL, key);
      if (opts.public) { opts.onPublic(JF.sb); return; }
      JF.sb.auth.onAuthStateChange(function (event, session) {
        setTimeout(function () {
          if (event === 'PASSWORD_RECOVERY') JF.changePassword();
          var u = session && session.user ? session.user : null, id = u ? u.id : null;
          if (started && id === curId) { JF.user = u || JF.user; return; }
          started = true; curId = id; JF.user = u;
          JF.$('jfAuth').classList.toggle('jf-hidden', !!u);
          if (app) app.classList.toggle('jf-hidden', !u);
          if (u) opts.onLogin(u); else { JF.$('jfPass').value = ''; if (opts.onLogout) opts.onLogout(); }
        }, 0);
      });
    });
  };
})();
