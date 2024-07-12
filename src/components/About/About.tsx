import { Container } from "./styles";
import Shohan from "../../assets/ShohanLogo.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import flutterIcon from "../../assets/icons8-flutter.svg"; // Add Flutter icon
import pythonIcon from "../../assets/icons8-python.svg"; // Add Python icon
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hey there! I'm Shohan, a dynamic web and app developer specializing in <strong>Flutter with GetX</strong> and an enthusiastic data scientist. My toolkit includes the latest and greatest in web technologies like <strong>HTML, CSS, JavaScript, React, Node.js, and Vue</strong>, alongside a solid foundation in <strong>Python</strong> and <strong>Django</strong>.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I don't just build websites; I craft digital experiences. From sleek, responsive websites to powerful, feature-rich mobile apps, I bring a blend of creativity and technical prowess to every project. On top of that, I leverage advanced data science techniques like <strong>machine learning (NLP, ML, CNN)</strong> to deliver insightful solutions that drive success.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Whether you're launching a new site, refreshing your digital presence, or diving into data-driven decision-making, I'm here to help you succeed. Let's collaborate to transform your vision into a cutting-edge reality!
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my key skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          {[
            { src: reactIcon, alt: "React" },
            { src: typescriptIcon, alt: "TypeScript" },
            { src: vueIcon, alt: "Vue" },
            { src: nodeIcon, alt: "Node.js" },
            { src: flutterIcon, alt: "Flutter" },
            { src: htmlIcon, alt: "HTML" },
            { src: cssIcon, alt: "CSS" },
            { src: bootstrapIcon, alt: "Bootstrap" },
            { src: jsIcon, alt: "JavaScript" },
            { src: pythonIcon, alt: "Python" },
          ].map((icon, index) => (
            <div className="hability" key={index}>
              <ScrollAnimation animateIn="fadeInUp" delay={(0.10 + index * 0.02) * 1000}>
                <img src={icon.src} alt={icon.alt} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Shohan} alt="Shohan" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
