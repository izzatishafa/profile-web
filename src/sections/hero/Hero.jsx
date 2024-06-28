import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile-cv3.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcons = theme === 'light' ? instagramLight : instagramDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img src={heroImg} alt="Profile Picture of Izzati Shafa" className={styles.hero} />
                <img src={themeIcon} alt="Color mode icon" className={styles.colorMode} onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1 className='title'>Hi, I'm Izzati <span>Shafa</span></h1>
                <h2 className='title'>A Frontend Developer</h2>
                <span>
                    <a href="https://instagram.com/iztshf_" target='_blank'>
                        <img src={instagramIcons} alt="Instagram Icon" />
                    </a>
                    <a href="https://github.com/izzatishafa" target='_blank'>
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://linkedin.com/in/izzati-shafa" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    From Lines of Code <br /> to Lines of Elegance: Your Digital <br /> Journey Begins Here.
                </p>
                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>

        </section>
    )
}

export default Hero
