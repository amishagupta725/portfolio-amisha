import classes from './About.module.css'
import developer from '/developer.png'

const About = () => {
  return (
    <div className={classes['about']}>
      <div className={classes['info-container']}>
        <div className={classes['dev-info']}>
          <div className={classes['hello']}>Hi I am </div>
          <div className={classes['name']}>Amisha Gupta</div>
          <div className={classes['about-me']}>Developer, Software Engineer</div>
          <div className={classes['description']}>Hello! I am a passionate software engineer navigating the digital realm.</div>
          <div className={classes['buttons']}>
            <button>Download CV</button>
            <button>Contact Me</button>
          </div>
        </div>
        <div className={classes['dev-pic']}>
          <img src={developer} alt='Amisha Gupta' />
        </div>
      </div>
    </div>
  )
}

export default About