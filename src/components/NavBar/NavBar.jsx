// modules
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

// css
import styles from './NavBar.module.css'

const NavBar = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString())
  const [click, setClick] = useState(false)

  const handleOnClick = () => setClick(!click)

  // update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])


  return (
    <div id={styles.navbar}>
      <div id={styles.navbarTime}>
        <Link to='/'>
          <h1>{hour}</h1>
        </Link>
      </div>
      <ul className={click ? `${styles.navbarMenu} ${styles.active}` : styles.navbarMenu}>
        <li>
          <HashLink smooth to='/#homeSection' onClick={handleOnClick}>Home</HashLink>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <HashLink  to='/about'>About</HashLink>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className={styles.navbarIcons} onClick={handleOnClick}>
        {click
          ? <FaTimes className={styles.icons} size={20} style={{ color: '#fff' }} />
          : <FaBars className={styles.icons} size={20} style={{ color: '#fff' }} />
        }
      </div>
    </div>
  )
}

export default NavBar