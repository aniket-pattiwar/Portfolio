'use client';
import {useState} from 'react';
import {Github,Globe,Code2} from 'lucide-react';
import {websites} from '../lib/websites';
export default function WebsiteCollection(){
  const [filter,setFilter]=useState('All');
  const shown=websites.filter(site=>filter==='All'||(filter==='Live websites'?!!site.url:site.category===filter));
  return <section className="website-collection container" id="websites">
    <div className="section-caption"><span>THE WEBSITE SHELF</span><a href="https://github.com/aniket-pattiwar" target="_blank" rel="noopener noreferrer">Find me on GitHub</a></div>
    <div className="work-heading"><h2>Made to be<br/><em>opened & explored.</em></h2><p>A few useful places on the internet. <br/>Built by me, ready for you.</p></div>
    <div className="filter-row"><div className="filters" role="group" aria-label="Website categories">{['All','Live websites','Learning','Tools'].map(label=><button key={label} aria-pressed={filter===label} className={filter===label?'active':''} onClick={()=>setFilter(label)}>{label}<sup>{websites.filter(s=>label==='All'||(label==='Live websites'?!!s.url:s.category===label)).length}</sup></button>)}</div><span className="collection-label" role="status">{shown.length} PROJECTS</span></div>
    <div className="website-grid">{shown.map(site=><article className={'website-card '+site.theme+(site.url?' featured':' compact')} key={site.slug}>
      <div className="website-art"><div className="website-art-top"><span>{site.category}</span><span className="site-mark" aria-hidden="true">{site.mark}</span></div><h3>{site.title}</h3><div className="website-art-foot"><span>{site.name}</span><Code2 size={18}/></div></div>
      <div className="website-card-body"><div className="website-meta"><span className={site.url?'is-live':''}>{site.url&&<Globe size={12}/>} {site.status}</span>{site.language&&<span>{site.language}</span>}</div><h4>{site.name}</h4><p>{site.description}</p><div className="website-actions">{site.url&&<a className="website-visit" href={site.url} target="_blank" rel="noopener noreferrer"><Globe size={15}/> Visit website</a>}<a href={site.repo} target="_blank" rel="noopener noreferrer"><Github size={15}/> View code</a></div></div>
    </article>)}</div>
  </section>
}

