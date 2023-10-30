import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

// images
import simonHomepage from '../../assets/images/projects/simon.png'
import tictactoe from '../../assets/images/projects/tictactoe.png'
import gamePost from '../../assets/images/projects/gamepost.png'


const ProjectCard = () => {
  return (
    <div className={styles.cardContainer}>
      {/* Project 1 */}
      <div className={styles.projectContent}>
        <div className={styles.projectImg} >
          <img src={simonHomepage} alt="simon game" />
        </div>
        <div>
          <h2 className={styles.projectTitle}>
            Simon game/ JavaScript - HTML - CSS
          </h2>
        </div>
        <div className={styles.projectMask}>
          <p>This is a platform where gaming enthusiasts can share their expertise and strategies for any game.</p>
          <div className={styles.projectBtns}>
            <Link to='https://tuanng-simon.netlify.app/' className={styles.projectBtn} ß>View</Link>
            <Link className={styles.projectBtn}>Source</Link>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className={styles.projectContent}>
        <div className={styles.projectImg} >
          <img src={tictactoe} alt="tictactoe" />
        </div>
        <div>
          <h2 className={styles.projectTitle}>
            Tic tac toe/ JavaScript - HTML - CSS
          </h2>
        </div>
        <div className={styles.projectMask}>

          <p>This is a platform where gaming enthusiasts can share their expertise and strategies for any game.</p>
          <div className={styles.projectBtns}>
            <Link to='https://tuanng-simon.netlify.app/' className={styles.projectBtn} ß>View</Link>
            <Link className={styles.projectBtn}>Source</Link>
          </div>
        </div>


      </div>
      {/* Project 3 */}
      <div className={styles.projectContent}>
        <div className={styles.projectImg} >
          <img src={gamePost} alt="game post" />
        </div>
        <div>
          <h2 className={styles.projectTitle}>
            Game blog/ MEN stack - HTML - CSS
          </h2>
        </div>
        <div className={styles.projectMask}>

          <p>This is a platform where gaming enthusiasts can share their expertise and strategies for any game.</p>
          <div className={styles.projectBtns}>
            <Link to='https://tuanng-simon.netlify.app/' className={styles.projectBtn} ß>View</Link>
            <Link className={styles.projectBtn}>Source</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard