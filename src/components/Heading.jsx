import React, { createContext, useContext } from 'react'

const LevelContext = createContext(1)

export function LevelRoot({ children }) {
  return <LevelContext.Provider value={1}>{children}</LevelContext.Provider>
}

export function Section({ children }) {
  const level = useContext(LevelContext)
  return (
    <LevelContext.Provider value={level + 1}>
      <div className="stack">{children}</div>
    </LevelContext.Provider>
  )
}

export function Heading({ children }) {
  const level = useContext(LevelContext)
  const Tag = `h${Math.min(level, 6)}`
  const Comp = Tag
  return <Comp style={{margin:0}}>{children}</Comp>
}
