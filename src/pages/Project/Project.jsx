// components
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import BaseInfo from "../../components/BaseInfo/BaseInfo"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
// css
import styles from './Project.module.css'

// images
import projectBG from '../../assets/images/projects-img.jpg'

const Project = () => {
  return (
    <div>
      <NavBar />
      <BaseInfo title="Projects" text="Some my most recent project" baseBG={projectBG} />
      <div className={styles.projectHeading}>
        <h1>Projects</h1>
      </div>
      <ProjectCard />
      < Footer />
    </div>
  )
}

export default Project