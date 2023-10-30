// components
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import BaseInfo from "../../components/BaseInfo/BaseInfo"

// css
// import styles from './Project.module.css'

// images
import aboutBG from '../../assets/images/about-img.jpg'

const Project = () => {
  return (
    <div>
      <NavBar />
      <BaseInfo title="About" text="I'm Tuan Nguyen" baseBG={aboutBG}/>
      < Footer />
    </div>
  )
}

export default Project