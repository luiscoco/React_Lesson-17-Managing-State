import React, { useState } from 'react'

function Panel({ title, isActive, onShow, children }) {
  return (
    <div className="stack">
      <div className="row" style={{justifyContent:'space-between'}}>
        <h3 style={{margin:0}}>{title}</h3>
        {!isActive && <button onClick={onShow}>Show</button>}
      </div>
      {isActive && <div className="badge">Panel content active</div>}
      {isActive && children}
    </div>
  )
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="stack">
      <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        <p className="small">This panel demonstrates state lifted to the parent Accordion.</p>
      </Panel>
      <Panel title="History" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        <p className="small">Clicking &quot;Show&quot; updates the parent&apos;s active index.</p>
      </Panel>
    </div>
  )
}
