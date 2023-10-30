// css
import styles from './BaseInfo.module.css'


const BaseInfo = (props) => {
  return (
    <div className={styles.projectBG}>
      <div className={styles.mask}>
        <img className={styles.introImg} src={props.baseBG} alt="ProjectBG" />
      </div>
      <div className={styles.content}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default BaseInfo