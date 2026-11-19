import React, { useEffect, useRef, useState } from "react";
import readingModules from "./eufte/modules";

const BASE = `${process.env.PUBLIC_URL || ""}/eufte`;
const modules = [
  { id: 1, title: "Comprendre le règlement", detail: "Objectif, champ et définitions", articles: "Articles 1 à 4", duration: "5:35" },
  { id: 2, title: "Obligations des entités", detail: "Cadre, maturité, mesures et plan", articles: "Articles 5 à 9", duration: "6:07" },
  { id: 3, title: "IICB et respect des règles", detail: "Gouvernance et suivi de la conformité", articles: "Articles 10 à 12", duration: "5:23" },
  { id: 4, title: "Missions du CERT-UE", detail: "Services, responsabilités et coopération", articles: "Articles 13 à 18", duration: "6:04" },
  { id: 5, title: "Notifications et gestion des crises", detail: "Signalement, partage et coordination", articles: "Articles 19 à 23", duration: "6:06" },
  { id: 6, title: "Échéances et rédaction", detail: "Dates clés et préparation de la note", articles: "Articles 24 à 26 et repères transversaux", duration: "5:48" },
];

function Icon({ type }) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === "audio" ? <><path d="M4 14v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="12" width="4" height="8" rx="2" /><rect x="17" y="12" width="4" height="8" rx="2" /></> : <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></>}
    </svg>
  );
}

function FileLinks({ href, label, onRead }) {
  return <div className="eufte-file-actions">
    <button type="button" onClick={onRead} aria-label={`Lire ${label} dans l’application`}>Lire la fiche</button>
    <a href={href} download aria-label={`Télécharger ${label}`}>Télécharger ↓</a>
  </div>;
}

// Only the controlled bold/line-break formatting in our study content is parsed.
// All other source text is escaped by React, including any HTML-like text.
function richText(text) {
  return String(text).split(/(<b>.*?<\/b>|<br\s*\/?>)/g).map((part, i) => {
    if (/^<b>/.test(part)) return <strong key={i}>{part.slice(3, -4)}</strong>;
    if (/^<br/.test(part)) return <br key={i} />;
    return part;
  });
}

function StudyReader({ moduleId, onClose, onSelect }) {
  const dialog = useRef(null);
  const scrollArea = useRef(null);
  const module = readingModules.find((item) => item.id === moduleId);
  useEffect(() => {
    const el = dialog.current;
    el.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      el.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  useEffect(() => {
    scrollArea.current?.scrollTo({ top: 0 });
  }, [moduleId]);
  return <dialog ref={dialog} className="eufte-reader" aria-labelledby="eufte-reader-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <header className="eufte-reader-header">
      <div><p>LECTURE DANS L’APPLICATION</p><h2 id="eufte-reader-title">Module {moduleId} · {module.title}</h2></div>
      <button type="button" onClick={onClose} aria-label="Fermer la fiche">Fermer ×</button>
    </header>
    <div className="eufte-reader-scroll" ref={scrollArea}>
      <nav className="eufte-reader-modules" aria-label="Choisir une fiche">
        {modules.map((item) => <button type="button" key={item.id} aria-pressed={item.id === moduleId} onClick={() => onSelect(item.id)}>Module {item.id}</button>)}
      </nav>
      <article className="eufte-reading-content">
        {module.blocks.map((block, i) => {
          if (block.kind === "h") return <h3 key={i}>{block.text}</h3>;
          if (block.kind === "t") return <div key={i} className="eufte-reading-table"><table><thead><tr>{block.rows[0].map((cell,j) => <th key={j}>{richText(cell)}</th>)}</tr></thead><tbody>{block.rows.slice(1).map((row,j) => <tr key={j}>{row.map((cell,k) => <td key={k}>{richText(cell)}</td>)}</tr>)}</tbody></table></div>;
          return <p className={block.kind === "small" ? "eufte-reading-source" : undefined} key={i}>{richText(block.text)}</p>;
        })}
      </article>
      <footer className="eufte-reader-footer">
        <button type="button" disabled={moduleId === 1} onClick={() => onSelect(moduleId - 1)}>← Fiche précédente</button>
        <a href={`${BASE}/fiches/Module_${moduleId}_FR.pdf`} download>Télécharger le PDF ↓</a>
        <button type="button" disabled={moduleId === 6} onClick={() => onSelect(moduleId + 1)}>Fiche suivante →</button>
      </footer>
    </div>
  </dialog>;
}

export default function EufteStudy() {
  const [language, setLanguage] = useState("fr");
  const [readingModule, setReadingModule] = useState(null);
  const audioPanel = useRef(null);

  const selectLanguage = (value) => {
    audioPanel.current?.querySelectorAll("audio").forEach((audio) => audio.pause());
    setLanguage(value);
  };

  const playOneAtATime = (event) => {
    audioPanel.current?.querySelectorAll("audio").forEach((audio) => {
      if (audio !== event.currentTarget) audio.pause();
    });
  };

  return (
    <main className="eufte-page" lang="fr" id="main-content">
      <div className="eufte-intro">
        <p className="eufte-eyebrow">VOTRE ESPACE DE RÉVISION</p>
        <h1>EUFTE</h1>
        <p className="eufte-subtitle">Comprendre le règlement. Écouter, réviser, puis rédiger.</p>
        <div className="eufte-context">Règlement (UE, Euratom) 2023/2841 <span aria-hidden="true">·</span> Cybersécurité des entités de l’Union</div>
      </div>

      <div className="eufte-grid">
        <section className="eufte-card" aria-labelledby="eufte-audio-title" ref={audioPanel}>
          <div className="eufte-card-heading">
            <span className="eufte-icon"><Icon type="audio" /></span>
            <div><h2 id="eufte-audio-title">Audios de révision</h2><p>Un module à la fois, à votre rythme.</p></div>
          </div>
          <div className="eufte-languages" role="group" aria-label="Langue des audios">
            <button type="button" aria-pressed={language === "fr"} onClick={() => selectLanguage("fr")}>Français <span>6</span></button>
            <button type="button" aria-pressed={language === "en"} onClick={() => selectLanguage("en")}>English <span className="eufte-soon">À venir</span></button>
          </div>

          {language === "fr" ? <>
            <p className="eufte-audio-note">Environ 35 min · Voix française · Questions et pauses de rappel</p>
            <ol className="eufte-module-list">
              {modules.map((module) => <li key={module.id} className="eufte-audio-module">
                <div className="eufte-module-heading">
                  <span className="eufte-number">{String(module.id).padStart(2, "0")}</span>
                  <h3>{module.title}</h3>
                  <span className="eufte-duration">{module.duration}</span>
                </div>
                <audio controls preload="none" onPlay={playOneAtATime} aria-label={`Écouter le module ${module.id} : ${module.title}`}>
                  <source src={`${BASE}/audio/Module_${module.id}_FR.mp3`} type="audio/mpeg" />
                  Votre navigateur ne prend pas en charge la lecture audio. Utilisez le lien de téléchargement.
                </audio>
                <a className="eufte-download" href={`${BASE}/audio/Module_${module.id}_FR.mp3`} download>Télécharger le MP3 du module {module.id} ↓</a>
              </li>)}
            </ol>
            <div className="eufte-card-footer">
              <h3>Tous les audios, à emporter</h3>
              <div className="eufte-archive-links">
                <a href={`${BASE}/audio/Audios_FR_Modules_1_a_3.zip`} download>Modules 1 à 3 · ZIP ↓</a>
                <a href={`${BASE}/audio/Audios_FR_Modules_4_a_6.zip`} download>Modules 4 à 6 · ZIP ↓</a>
              </div>
            </div>
          </> : <div className="eufte-empty" role="status">
            <span className="eufte-icon"><Icon type="audio" /></span>
            <h3>Les audios anglais arrivent ensuite</h3>
            <p>Commencez par comprendre les six modules en français. Les versions anglaises seront ajoutées ici lorsqu’elles seront prêtes.</p>
            <button className="eufte-outline-button" type="button" onClick={() => selectLanguage("fr")}>Écouter en français</button>
          </div>}
        </section>

        <section className="eufte-card" aria-labelledby="eufte-files-title">
          <div className="eufte-card-heading">
            <span className="eufte-icon"><Icon type="file" /></span>
            <div><h2 id="eufte-files-title">Fiches de révision</h2><p>À lire ici, ou à imprimer pour réviser.</p></div>
          </div>
          <div className="eufte-complete-pack">
            <span className="eufte-badge">DOSSIER COMPLET</span>
            <h3>Les six modules en français</h3>
            <p>20 pages A4 · 10 feuilles en recto verso</p>
            <p>Explications, références aux articles, vocabulaire anglais, questions corrigées et échéances.</p>
            <button type="button" className="eufte-primary-link" onClick={() => setReadingModule(1)}>Lire les fiches dans l’application</button>
            <a className="eufte-download" href={`${BASE}/fiches/Revision_complete_6_modules_FR.pdf`} download>Télécharger le PDF complet ↓</a>
          </div>
          <h3 className="eufte-list-label">Ou choisir une fiche</h3>
          <ol className="eufte-module-list">
            {modules.map((module) => <li className="eufte-file-module" key={module.id}>
              <div className="eufte-module-heading">
                <span className="eufte-number">{String(module.id).padStart(2, "0")}</span>
                <h3>{module.title}</h3>
                <span className="eufte-pdf-tag">PDF</span>
              </div>
              <p>{module.detail}</p>
              <p className="eufte-articles">{module.articles}</p>
              <FileLinks href={`${BASE}/fiches/Module_${module.id}_FR.pdf`} label={`la fiche du module ${module.id}`} onRead={() => setReadingModule(module.id)} />
            </li>)}
          </ol>
          <div className="eufte-card-footer">
            <a className="eufte-download" href={`${BASE}/fiches/Modules_de_revision_FR_separes.zip`} download>Télécharger les six fiches séparées · ZIP ↓</a>
          </div>
        </section>
      </div>
      <p className="eufte-credit">Voix : Piper SIWIS · <a href="https://datashare.is.ed.ac.uk/handle/10283/2353" target="_blank" rel="noopener noreferrer">SIWIS French Speech Synthesis Database</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></p>
      {readingModule !== null && <StudyReader moduleId={readingModule} onClose={() => setReadingModule(null)} onSelect={setReadingModule} />}
    </main>
  );
}
