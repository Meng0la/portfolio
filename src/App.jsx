import { LangProvider } from './i18n'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Stack, Competencies, Education, Contact } from './components/Sections'
import { Featured, AllProjects, ProjectsProvider } from './components/Projects'
import CaseStudy from './components/CaseStudy'

export default function App() {
  return (
    <LangProvider>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <About />
        <Stack />
        <ProjectsProvider>
          {({ onOpen }) => (
            <>
              <Featured onOpen={onOpen} />
              <AllProjects onOpen={onOpen} />
            </>
          )}
        </ProjectsProvider>
        <CaseStudy />
        <Competencies />
        <Education />
        <Contact />
      </main>
    </LangProvider>
  )
}
