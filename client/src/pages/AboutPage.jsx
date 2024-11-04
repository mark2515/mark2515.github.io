import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '../components/Title';
import ProfileImage from '../assets/profile.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({
        duration: 500,
        once: false, 
    });
  }, []);

    return (
      <section id='about' className='px-16 md:p-28 w-screen h-full'>
        <Title title="About Me"></Title>
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col md:flex-row mt-14 lg:px-20 xl:px-28 items-center">
          <div className='space-y-10 mt-0 md:mt-10'>
            <p className="text-center md:text-left text-xl md:text-3xl">
              I am a <span className="gradient bg-gradient-to-b from-blue-300 to-blue-700 bg-clip-text text-transparent font-bold">Computer Science</span> student at Simon Fraser University, 
              continuously learning new skills in <span className="gradient bg-gradient-to-b from-blue-300 to-blue-700 bg-clip-text text-transparent font-bold">software development</span>.
              My dream is to bring innovation and change to the world.
            </p>

            <div className="flex justify-center md:justify-start space-x-8"> 
                <a href="https://www.linkedin.com/in/mark-he-235573293/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="tech-icons"/>
                </a>
                <a href="https://github.com/mark2515/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="tech-icons"/>
                </a>
                <a href="https://www.instagram.com/kunlong_he/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="tech-icons"/>
                </a>
            </div>

            <div className="flex justify-center md:justify-start">
              <div className='card-wrapper-button font-bold h-[5rem] w-[15rem] hover:scale-105 transition ease-in-out duration-500'>
                <a href={'https://mark2515.github.io/Kunlong_He_Resume.pdf'} target="_blank" rel="noopener noreferrer">
                  <button className='card-content-button rounded-3xl cursor-pointer'>
                    <p className="text-center text-xl font-bold">Check My Resume</p>
                  </button>
                </a> 
              </div>
            </div>
          </div>

          <div className='hover:scale-105 transition ease-in-out duration-300'>
            <img className="floating rounded-3xl w-50 h-50 md:w-4/5 md:h-4/5 mt-10 ml-0 md:ml-20 lg:ml-40" 
            src={ProfileImage}></img>
          </div>

        </div>  
      </section>
    );
}



export default About;