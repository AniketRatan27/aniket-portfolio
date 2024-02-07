import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Styles from './index.module.css';
import AboutComponent from './components/AboutComponent';
import Skills from './components/Skills';
import ProjectComponent from './components/ProjectComponent';
import ContactPage from './components/ContactPage';
import FooterComponent from './components/FooterComponent';

function App() {

  return (
    <>
      <section className={Styles.sectionOne} >
        <Navbar />
        <MainPage />
      </section>

      <section className={Styles.sectionTwo} id='AboutSection'>
        <AboutComponent />
      </section>

      <section className={Styles.sectionThree} id="SkillSection">
        <Skills />
      </section>

      <section className={Styles.sectionFour}>
        <ProjectComponent />
      </section>

      <section className={Styles.sectionFive}>
        <ContactPage />
      </section>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export default App
