import React from 'react'
import { TasksProvider } from './context/TasksContext.jsx'
import AddTask from './components/AddTask.jsx'
import TaskList from './components/TaskList.jsx'
import Accordion from './components/Accordion.jsx'
import Messenger from './components/Messenger.jsx'
import { Section, Heading, LevelRoot } from './components/Heading.jsx'

export default function App() {
  return (
    <TasksProvider>
      <div className="app">
        <h1>React State Management Sample</h1>

        <div className="section">
          <p className="small">Reducers + Context (Global Tasks)</p>
          <div className="stack">
            <AddTask />
            <TaskList />
          </div>
        </div>

        <div className="section">
          <p className="small">Lifting State Up (Accordion)</p>
          <Accordion />
        </div>

        <div className="section">
          <p className="small">Preserving & Resetting State (Messenger with Contact-based key)</p>
          <Messenger />
        </div>

        <div className="section">
          <p className="small">Passing Data Deeply with Context (Headings)</p>
          <LevelRoot>
            <Section>
              <Heading>Title</Heading>
              <Section>
                <Heading>Subsection A</Heading>
                <Section>
                  <Heading>Sub-subsection A.1</Heading>
                </Section>
              </Section>
              <Section>
                <Heading>Subsection B</Heading>
              </Section>
            </Section>
          </LevelRoot>
        </div>
      </div>
    </TasksProvider>
  )
}
