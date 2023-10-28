//npm modules
import { Link } from "react-router-dom"

// css
import styles from "./HomeInfo.module.css"
import homeIMG from "../../assets/images/home-img.jpg"

const HomeBG = () => {
  return (
    <div className={styles.homeBG}>
      <div className={styles.mask}>
        <img className={styles.introImg} src={homeIMG} alt="backgroundIMG" />
      </div>
      <div className={styles.content}>
        <p>HI, I&#39;M TUAN NGUYEN</p>
        <h1>Fullstack Developer.</h1>
        <div className={styles.homeLink}>
          <Link to='/project' className="btn">Project</Link>
          <Link to='/about'className="btn btn-light">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBG