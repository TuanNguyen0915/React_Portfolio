// npm modules
import { FaFacebookF, FaGithub, FaHome, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// css
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer} id='footerSection'>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div>
            <div>
              <p><FaHome className={`${styles.footerIcons} ${styles.leftIcons}`} /> <span className={styles.info}>Quincy, MA</span></p>
            </div>

            <div>
              <p>
                <FaMailBulk className={`${styles.footerIcons} ${styles.leftIcons}`} /> <span className={styles.info}>
                  <Link to="mailto:tuan.nat915@gmail.com?subject=Hello from your portfolio">tuan.nat915@gmail.com</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <h2>About Me</h2>
          <p>I&#39;m a full-stack software engineer who enjoys building apps for accessible and intuitive design to give the customer the best and simplest way solutions. Carefulness and responsibility are two skills I learned while working in my previous career, which helped me approach SWE more easily, and work more efficiently. I am interested in technology and techniques in the full-stack development field to keep my passion for it.
          </p>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div>
          <p>
            <FaLinkedinIn className={styles.footerIcons} /> <span className={styles.info}>
              <Link to='https://www.linkedin.com/in/tuan-nguyen0915/' />
            </span>
          </p>
        </div>
        <div>
          <p>
            <FaGithub className={styles.footerIcons} /> <span className={styles.info}>
              <Link to='https://github.com/TuanNguyen0915' />
            </span>
          </p>
        </div>
        <div>
          <p>
            <FaFacebookF className={styles.footerIcons} /> <span className={styles.info}>
              <Link to='https://github.com/TuanNguyen0915' />
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer