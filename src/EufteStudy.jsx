import React, { useEffect, useRef, useState } from "react";
import { readingModulesByLanguage } from "./eufte/modules";
import { text, frenchModuleDetails } from "./eufte/interface";
import englishResources from "./eufte/resources.en.json";

const BASE = `${process.env.PUBLIC_URL || ""}/eufte`;
const LANGUAGE_KEY = "mcq-eufte-language-v1";
const resources = {
  fr: { pdfPages: 20, totalMinutes: 35, durations: { 1: "5:35", 2: "6:07", 3: "5:23", 4: "6:04", 5: "6:06", 6: "5:48" } },
  en: englishResources,
};

function Icon({ type }) {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "audio" ? <><path d="M4 14v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="12" width="4" height="8" rx="2" /><rect x="17" y="12" width="4" height="8" rx="2" /></> : <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></>}
  </svg>;
}

function LanguagePicker({ language, onChange, label }) {
  return <div className="eufte-languages eufte-language-picker" role="group" aria-label={label}>
    <button type="button" lang="fr" aria-pressed={language === "fr"} onClick={() => onChange("fr")}>FR <span>Français</span></button>
    <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => onChange("en")}>EN <span>English</span></button>
  </div>;
}

// Parse only our controlled bold/line-break notation; React escapes other text.
function richText(value) {
  return String(value).split(/(<b>.*?<\/b>|<br\s*\/?>)/g).map((part, i) => {
    if (/^<b>/.test(part)) return <strong key={i}>{part.slice(3, -4)}</strong>;
    if (/^<br/.test(part)) return <br key={i} />;
    return part;
  });
}

function ReadingBlock({ block, copy }) {
  if (block.kind === "h") return <h3>{block.text}</h3>;
  if (block.kind === "qa") return <div className="eufte-recall"><p><strong>{copy.question}: {block.question}</strong></p><p><strong>{copy.answer}:</strong> {block.answer}</p></div>;
  if (block.kind === "t") return <div className="eufte-reading-table"><table><thead><tr>{block.rows[0].map((cell,j) => <th key={j}>{richText(cell)}</th>)}</tr></thead><tbody>{block.rows.slice(1).map((row,j) => <tr key={j}>{row.map((cell,k) => <td key={k}>{richText(cell)}</td>)}</tr>)}</tbody></table></div>;
  return <p className={block.kind === "small" ? "eufte-reading-source" : undefined}>{richText(block.text)}</p>;
}

function StudyReader({ moduleId, language, onLanguageChange, onClose, onSelect }) {
  const dialog = useRef(null);
  const scrollArea = useRef(null);
  const copy = text[language];
  const modules = readingModulesByLanguage[language];
  const module = modules.find((item) => item.id === moduleId);
  const code = language.toUpperCase();
  useEffect(() => {
    const el = dialog.current;
    el.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { el.close(); document.body.style.overflow = previousOverflow; };
  }, []);
  useEffect(() => { scrollArea.current?.scrollTo({ top: 0 }); }, [moduleId, language]);
  return <dialog ref={dialog} className="eufte-reader" lang={language} aria-labelledby="eufte-reader-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <header className="eufte-reader-header">
      <div><p>{copy.reader}</p><h2 id="eufte-reader-title">Module {moduleId} · {module.title}</h2></div>
      <button type="button" onClick={onClose} aria-label={copy.closeLabel}>{copy.close}</button>
    </header>
    <div className="eufte-reader-scroll" ref={scrollArea}>
      <LanguagePicker language={language} onChange={onLanguageChange} label={copy.language} />
      <nav className="eufte-reader-modules" aria-label={copy.chooseModule}>
        {modules.map((item) => <button type="button" key={item.id} aria-pressed={item.id === moduleId} onClick={() => onSelect(item.id)}>Module {item.id}</button>)}
      </nav>
      <article className="eufte-reading-content">
        {module.blocks.map((block, i) => <ReadingBlock key={`${language}-${moduleId}-${i}`} block={block} copy={copy} />)}
      </article>
      <footer className="eufte-reader-footer">
        <button type="button" disabled={moduleId === 1} onClick={() => onSelect(moduleId - 1)}>{copy.previous}</button>
        <a href={`${BASE}/fiches/Module_${moduleId}_${code}.pdf`} download>{copy.readerDownload}</a>
        <button type="button" disabled={moduleId === 6} onClick={() => onSelect(moduleId + 1)}>{copy.next}</button>
      </footer>
    </div>
  </dialog>;
}

export default function EufteStudy() {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "fr"; } catch { return "fr"; }
  });
  const [readingModule, setReadingModule] = useState(null);
  const audioPanel = useRef(null);
  const copy = text[language];
  const code = language.toUpperCase();
  const pack = resources[language];
  const modules = readingModulesByLanguage[language].map((module, i) => ({ ...module, ...(language === "fr" ? frenchModuleDetails[i] : {}), duration: pack.durations[module.id] }));

  const selectLanguage = (value) => {
    if (value !== "fr" && value !== "en") return;
    audioPanel.current?.querySelectorAll("audio").forEach((audio) => audio.pause());
    setLanguage(value);
    try { localStorage.setItem(LANGUAGE_KEY, value); } catch { /* Keep the current session usable if storage is unavailable. */ }
  };
  const playOneAtATime = (event) => {
    audioPanel.current?.querySelectorAll("audio").forEach((audio) => { if (audio !== event.currentTarget) audio.pause(); });
  };

  return <main className="eufte-page" lang={language} id="main-content">
    <div className="eufte-intro">
      <p className="eufte-eyebrow">{copy.eyebrow}</p>
      <div className="eufte-title-row"><h1>EUFTE</h1><LanguagePicker language={language} onChange={selectLanguage} label={copy.language} /></div>
      <p className="eufte-subtitle">{copy.subtitle}</p>
      <div className="eufte-context">{copy.context} <span aria-hidden="true">·</span> {copy.subject}</div>
    </div>
    <div className="eufte-grid">
      <section className="eufte-card" aria-labelledby="eufte-audio-title" ref={audioPanel}>
        <div className="eufte-card-heading"><span className="eufte-icon"><Icon type="audio" /></span><div><h2 id="eufte-audio-title">{copy.audioTitle}</h2><p>{copy.audioSubtitle}</p></div></div>
        <p className="eufte-audio-note">{copy.audioNote(pack.totalMinutes)}</p>
        <ol className="eufte-module-list">
          {modules.map((module) => <li key={module.id} className="eufte-audio-module">
            <div className="eufte-module-heading"><span className="eufte-number">{String(module.id).padStart(2,"0")}</span><h3>{module.title}</h3><span className="eufte-duration">{module.duration}</span></div>
            <audio key={`${language}-${module.id}`} controls preload="none" onPlay={playOneAtATime} aria-label={copy.listen(module.id,module.title)}>
              <source src={`${BASE}/audio/Module_${module.id}_${code}.mp3`} type="audio/mpeg" />{copy.audioFallback}
            </audio>
            <a className="eufte-download" href={`${BASE}/audio/Module_${module.id}_${code}.mp3`} download>{copy.audioDownload(module.id)}</a>
          </li>)}
        </ol>
        <div className="eufte-card-footer"><h3>{copy.allAudio}</h3><div className="eufte-archive-links">
          {[1,4].map((first) => <a key={first} href={`${BASE}/audio/Audios_${code}_Modules_${first}_a_${first+2}.zip`} download>{copy.audioZip(first,first+2)}</a>)}
        </div></div>
      </section>
      <section className="eufte-card" aria-labelledby="eufte-files-title">
        <div className="eufte-card-heading"><span className="eufte-icon"><Icon type="file" /></span><div><h2 id="eufte-files-title">{copy.filesTitle}</h2><p>{copy.filesSubtitle}</p></div></div>
        <div className="eufte-complete-pack">
          <span className="eufte-badge">{copy.complete}</span><h3>{copy.packTitle}</h3>
          <p>{copy.packSize(pack.pdfPages)}</p><p>{copy.packDescription}</p>
          <button type="button" className="eufte-primary-link" onClick={() => setReadingModule(1)}>{copy.readAll}</button>
          <a className="eufte-download" href={`${BASE}/fiches/Revision_complete_6_modules_${code}.pdf`} download>{copy.downloadAll}</a>
        </div>
        <h3 className="eufte-list-label">{copy.choose}</h3>
        <ol className="eufte-module-list">
          {modules.map((module) => <li className="eufte-file-module" key={module.id}>
            <div className="eufte-module-heading"><span className="eufte-number">{String(module.id).padStart(2,"0")}</span><h3>{module.title}</h3><span className="eufte-pdf-tag">PDF</span></div>
            <p>{module.detail}</p><p className="eufte-articles">{module.articles}</p>
            <div className="eufte-file-actions"><button type="button" onClick={() => setReadingModule(module.id)} aria-label={copy.readLabel(module.id)}>{copy.read}</button><a href={`${BASE}/fiches/Module_${module.id}_${code}.pdf`} download aria-label={copy.downloadLabel(module.id)}>{copy.download}</a></div>
          </li>)}
        </ol>
        <div className="eufte-card-footer"><a className="eufte-download" href={`${BASE}/fiches/Modules_de_revision_${code}_separes.zip`} download>{copy.fileZip}</a></div>
      </section>
    </div>
    <p className="eufte-credit">{copy.voice}: {language === "fr" ? <>Piper SIWIS · <a href="https://datashare.is.ed.ac.uk/handle/10283/2353" target="_blank" rel="noopener noreferrer">SIWIS French Speech Synthesis Database</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></> : <>Piper Cori · British English · <a href="https://librivox.org" target="_blank" rel="noopener noreferrer">LibriVox public-domain recordings</a> · <a href="https://brycebeattie.com/files/tts/" target="_blank" rel="noopener noreferrer">Voice training</a></>}</p>
    {readingModule !== null && <StudyReader moduleId={readingModule} language={language} onLanguageChange={selectLanguage} onClose={() => setReadingModule(null)} onSelect={setReadingModule} />}
  </main>;
}
