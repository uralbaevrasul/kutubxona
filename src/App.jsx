import { useEffect, useState } from 'react';
import { books, task1Text, declension, verbs, task4Text } from './data.js';

// ---------- Yordamchi: {so'z|tahlil} belgilarini React elementlariga aylantirish ----------
function Marked({ text }) {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((p, i) => {
    const m = p.match(/^\{([^|}]+)(?:\|([^}]+))?\}$/);
    if (!m) return p;
    return m[2] ? (
      <mark key={i} className="adj" tabIndex={0} data-info={m[2]}>{m[1]}</mark>
    ) : (
      <mark key={i} className="vb">{m[1]}</mark>
    );
  });
}

// Matndagi sifatlardan jadval qatorlari
function adjRows(text) {
  return [...text.matchAll(/\{([^|}]+)\|([^}]+)\}/g)].map((m) => ({
    w: m[1],
    info: m[2].replace(/ \(.+\)$/, ''),
    noun: (m[2].match(/\((.+)\)/) || [])[1],
  }));
}

function AdjTable({ text }) {
  return (
    <table className="tbl">
      <thead><tr><th>№</th><th>Sifat</th><th>Kelishik, jins, son</th><th>Aniqlanayotgan so'z</th></tr></thead>
      <tbody>
        {adjRows(text).map((r, i) => (
          <tr key={i}><td>{i + 1}</td><td><b>{r.w}</b></td><td>{r.info}</td><td>{r.noun}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

function Hero({ tag, title, sub }) {
  return (
    <section className="hero"><span className="tag">{tag}</span><h1>{title}</h1><p>{sub}</p></section>
  );
}

// ---------- Katalog (sayt mavzusi: onlayn kutubxona) ----------
function Catalog() {
  const [q, setQ] = useState('');
  const [genre, setGenre] = useState('Hammasi');
  const [showTicket, setShowTicket] = useState(false);
  const [loans, setLoans] = useState(() => JSON.parse(localStorage.getItem('loans') || '[]'));
  useEffect(() => localStorage.setItem('loans', JSON.stringify(loans)), [loans]);

  const genres = ['Hammasi', ...new Set(books.map((b) => b.genre))];
  const list = books.filter(
    (b) => (genre === 'Hammasi' || b.genre === genre) && (b.title + b.author).toLowerCase().includes(q.toLowerCase())
  );
  const toggle = (id) => setLoans((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]));

  return (
    <>
      <Hero tag="Xush kelibsiz" title="«Bilim» onlayn kutubxonasi"
        sub="Rus klassikasini onlayn o'qing, kitoblarni o'quvchi biletiga oling va rus tili bo'yicha topshiriqlarni «O'qish zali», «Tuslash», «Fe'llar» va «Sayohat» bo'limlarida bajaring." />
      <div className="tools">
        <input type="search" placeholder="Nomi yoki muallifi bo'yicha qidirish…" value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          {genres.map((g) => <option key={g}>{g}</option>)}
        </select>
        <button className="btn ghost" onClick={() => setShowTicket(!showTicket)}>Mening biletim ({loans.length})</button>
      </div>
      <div className="grid">
        {list.length === 0 && <p className="muted">Hech narsa topilmadi.</p>}
        {list.map((b) => (
          <article className="book" key={b.id}>
            <div className="cover" style={{ background: b.color }}><span>{b.title}</span><small>{b.author}</small></div>
            <div className="meta">
              <b>{b.title}</b><span>{b.author} · {b.year}</span><em>{b.genre}</em><p>{b.desc}</p>
              <button className="btn" onClick={() => toggle(b.id)}>{loans.includes(b.id) ? 'Qaytarish' : 'Kitob olish'}</button>
            </div>
          </article>
        ))}
      </div>
      {showTicket && (
        <section className="card">
          <h3>O'quvchi bileti</h3>
          {loans.length ? (
            <ul>{loans.map((id) => { const b = books.find((x) => x.id === id); return <li key={id}>{b.title} — {b.author}</li>; })}</ul>
          ) : <p className="muted">Siz hali birorta kitob olmadingiz.</p>}
        </section>
      )}
    </>
  );
}

// ---------- 1-topshiriq: «Вариант 14» matni ----------
function Task1() {
  const [hl, setHl] = useState(true);
  return (
    <>
      <Hero tag="1-topshiriq · 14-variant" title="O'qish zali"
        sub="14-variant matni. Sifatlar belgilangan — kelishik, jins va sonni ko'rish uchun ustiga olib boring (yoki bosing)." />
      <section className="card paper">
        <h3>Вариант 14</h3>
        <p className={'text' + (hl ? '' : ' off')}><Marked text={task1Text} /></p>
        <label className="chk"><input type="checkbox" checked={hl} onChange={(e) => setHl(e.target.checked)} /> Sifatlarni belgilab ko'rsatish</label>
      </section>
      <section className="card"><h3>Sifatlar tahlili</h3><AdjTable text={task1Text} /></section>
    </>
  );
}

// ---------- 2-topshiriq: «высокий» sifatini tuslash ----------
const norm = (s) => s.trim().toLowerCase().replace(/ё/g, 'е');

function Task2() {
  const [vals, setVals] = useState(declension.map(() => ''));
  const [checked, setChecked] = useState(false);
  const set = (i, v) => setVals(vals.map((x, k) => (k === i ? v : x)));
  return (
    <>
      <Hero tag="2-topshiriq" title="«высокий» sifatini tuslash"
        sub="Sifatni kelishiklar bo'yicha tuslang: shaklni yozing va o'zingizni tekshiring." />
      <section className="card">
        <table className="tbl">
          <thead><tr><th>Kelishik</th><th>Savol</th><th>Shakl</th><th></th></tr></thead>
          <tbody>
            {declension.map((d, i) => (
              <tr key={d.abbr}>
                <td><b>{d.abbr}</b><br /><small>{d.name}</small></td>
                <td>{d.q}</td>
                <td><input value={vals[i]} placeholder="shaklni yozing" onChange={(e) => set(i, e.target.value)} /></td>
                <td className="res">
                  {checked && (norm(vals[i]) === norm(d.form) ? <span className="ok">✓</span> : <span className="bad">✗</span>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row">
          <button className="btn" onClick={() => setChecked(true)}>Tekshirish</button>
          <button className="btn ghost" onClick={() => { setVals(declension.map((d) => d.form)); setChecked(true); }}>Javoblarni ko'rsatish</button>
        </div>
      </section>
    </>
  );
}

// ---------- 3-topshiriq: fe'lning shaxsi va soni ----------
function Task3() {
  const [ans, setAns] = useState(verbs.map(() => ({ p: '', n: '' })));
  const [checked, setChecked] = useState(false);
  const [reveal, setReveal] = useState(false);
  const set = (i, k, v) => setAns(ans.map((a, j) => (j === i ? { ...a, [k]: v } : a)));
  const showAll = () => { setAns(verbs.map((v) => ({ p: String(v.p), n: v.n }))); setChecked(true); setReveal(true); };
  return (
    <>
      <Hero tag="3-topshiriq" title="Fe'lning shaxsi va soni" sub="Har bir gapda belgilangan fe'llarning shaxsi va sonini aniqlang." />
      <section className="card">
        {verbs.map((v, i) => {
          const ok = +ans[i].p === v.p && ans[i].n === v.n;
          return (
            <div className="vrow" key={i}>
              <p><span className="n">{i + 1}.</span> <Marked text={v.text} /></p>
              <div className="sel">
                <select value={ans[i].p} onChange={(e) => set(i, 'p', e.target.value)}>
                  <option value="">shaxs</option><option>1</option><option>2</option><option>3</option>
                </select>
                <select value={ans[i].n} onChange={(e) => set(i, 'n', e.target.value)}>
                  <option value="">son</option><option value="ед">birlik</option><option value="мн">ko'plik</option>
                </select>
                <span className="res">
                  {checked && (ok
                    ? <span className="ok">✓{reveal && ` ${v.p}-shaxs, ${v.n === 'ед' ? 'birlik' : 'ko\'plik'}`}</span>
                    : <span className="bad">✗</span>)}
                </span>
              </div>
            </div>
          );
        })}
        <div className="row">
          <button className="btn" onClick={() => { setChecked(true); setReveal(false); }}>Tekshirish</button>
          <button className="btn ghost" onClick={showAll}>Javoblarni ko'rsatish</button>
        </div>
      </section>
    </>
  );
}

// ---------- 4-topshiriq: sayohat matni ----------
function Task4() {
  return (
    <>
      <Hero tag="4-topshiriq" title="Unutilmas sayohat"
        sub="Tog'li o'lkaga sayohat haqidagi matn. Sifatlar belgilangan va kelishiklar bo'yicha tahlil qilingan." />
      <section className="card paper"><p className="text"><Marked text={task4Text} /></p></section>
      <section className="card"><h3>Sifatlar tahlili</h3><AdjTable text={task4Text} /></section>
    </>
  );
}

// ---------- Navigatsiya (hash orqali) ----------
const pages = {
  catalog: ['Katalog', Catalog],
  task1: ['O\'qish zali', Task1],
  task2: ['Tuslash', Task2],
  task3: ['Fe\'llar', Task3],
  task4: ['Sayohat', Task4],
};

export default function App() {
  const read = () => (pages[location.hash.slice(1)] ? location.hash.slice(1) : 'catalog');
  const [key, setKey] = useState(read);
  useEffect(() => {
    const on = () => { setKey(read()); window.scrollTo(0, 0); };
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  const Page = pages[key][1];

  // Kun / tun rejimi: tanlov saqlanadi, bo'lmasa tizim sozlamasi olinadi
  const [dark, setDark] = useState(() => {
    const t = localStorage.getItem('theme');
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Pastdan tepaga chiqaruvchi strelka tugmasi
  const [showUp, setShowUp] = useState(false);
  useEffect(() => {
    const on = () => setShowUp(scrollY > 300);
    addEventListener('scroll', on);
    return () => removeEventListener('scroll', on);
  }, []);
  return (
    <>
      <header className="top">
        <div className="wrap bar">
          <a href="#catalog" className="logo">📚 Bilim<small>onlayn kutubxona</small></a>
          <div className="right">
            <nav>
              {Object.entries(pages).map(([k, [t]]) => (
                <a key={k} href={'#' + k} className={k === key ? 'on' : ''}>{t}</a>
              ))}
            </nav>
            {/* Kun / tun rejimi tugmasi */}
            <button className="theme" onClick={() => setDark(!dark)} title="Kun / tun rejimi" aria-label="Kun / tun rejimi">
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>
      <main className="wrap"><Page key={key} /></main>
      <footer className="wrap foot">
        Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti · Kompyuter injiniringi fakulteti · «Web tizimlari» fani, 3-topshiriq · Bajardi: Uralbaev Rasul · Tekshirdi: Muxsinov Shamil · Toshkent – 2026
      </footer>
      <button className={'up' + (showUp ? ' show' : '')} aria-label="Tepaga" title="Tepaga"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </>
  );
}
