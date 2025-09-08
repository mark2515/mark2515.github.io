import { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiExpress, SiCreatereactapp, SiNextdotjs, SiTypescript, SiMongodb, SiSpringboot, SiMysql, SiApachemaven, SiLangchain, SiTailwindcss, SiPython, SiPandas, SiScikitlearn, SiPytorch } from "react-icons/si";
import { ReactSVG } from 'react-svg';
import Title from '../components/Title';
import chatbot from '../assets/chatbot.jpg';
import monopoly from '../assets/monopoly.jpg';
import battleship from '../assets/battleship.png';
import cms from '../assets/cms.jpg';
import shopway from '../assets/shopway.jpg';
import fhc from '../assets/fhc.jpg';
import chatGPT from '../assets/ChatGPT.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const IconWithTooltip = ({ icon: Icon, label }) => {
    return (
      <div className="relative group flex items-center mx-1">
        <Icon className="text-3xl mb-3 group-hover:text-blue-500 transition-colors" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-max text-white text-xs font-medium p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      </div>
    );
  };

  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false, 
    });
}, []);

  return (
    <section id='projects' data-aos="fade-up" data-aos-delay="50" className='p-28'>
      <Title title="Projects"/>
      <div className='-ml-28 galaxy:-ml-24 iphone:-ml-21 s400:-ml-16 s450:-ml-8 s500:-ml-2 s550:ml-0 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-items-center'>
        <div className='card-wrapper h-[32rem] w-[20rem] hover:scale-105 transition ease-in-out mt-20'>
          <div className='card-content'>
              <div className="relative h-56">
                <img src={chatbot} alt="Chatbot" className="object-cover w-full h-full rounded-t-2xl" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mt-2">Corpus AI Coach</div>
                <p className="text-slate-500 text-base mt-2">
                  An English learning platform that provides high-frequency word alerts and integrates a GPT-powered chatbot for accurate translation and conversational practice.
                </p>
              </div>
              <div className="flex mt-3">
                <a href="https://www.corpusaicoach.com/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 hover:transition hover:ease-in-out text-white font-normal py-2 px-4 ml-5 rounded transition ease-in-out">
                    View Site
                  </button></a>
                  <div className="grid grid-cols-4 ml-4 -mt-3">
                    <IconWithTooltip icon={SiMongodb} label="MongoDB" />
                    <IconWithTooltip icon={SiExpress} label="Express.js" />
                    <IconWithTooltip icon={FaReact} label="React" />
                    <IconWithTooltip icon={SiNextdotjs} label="Next.js" />
                    <IconWithTooltip icon={SiTypescript} label="TypeScript" />
                    <IconWithTooltip icon={SiTailwindcss} label="Tailwind CSS" />
                    <IconWithTooltip icon={SiLangchain} label="LangChain" />
                    <div className="relative group flex items-center mx-1">
                      <ReactSVG src={chatGPT} className="text-3xl mb-3 group-hover:text-blue-500 transition-colors" />
                      <span className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-max text-white text-xs font-medium p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        OpenAI API
                      </span>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        
        <div className='card-wrapper h-[32rem] w-[20rem] hover:scale-105 transition ease-in-out mt-20'>
          <div className='card-content'>
              <div className="relative h-56">
                <img src={battleship} alt="Battleship" className="object-cover w-full h-full rounded-t-2xl" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mt-2">Battleship</div>
                <p className="text-slate-500 text-base mt-2">
                  Our team's Battleship game features AI algorithms and turn-based management to provide an engaging player experience and smooth gameplay logic.
                </p>
              </div>
              <div className="flex mt-3">
                <a href="https://board-game-project-snowy.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 hover:transition hover:ease-in-out text-white font-normal py-2 px-4 ml-5 rounded transition ease-in-out">
                    View Site
                  </button></a>
                  <div className="grid grid-cols-4 ml-4 mt-1">
                    <IconWithTooltip icon={SiCreatereactapp} label="React" />
                    <IconWithTooltip icon={FaJs} label="JavaScript" />
                    <IconWithTooltip icon={FaHtml5} label="HTML" />
                    <IconWithTooltip icon={FaCss3Alt} label="CSS" />
                  </div>
              </div>
          </div>
        </div>

        <div className='card-wrapper h-[32rem] w-[20rem] hover:scale-105 transition ease-in-out mt-20'>
          <div className='card-content'>
              <div className="relative h-56">
                <img src={monopoly} alt="Monopoly" className="object-cover w-full h-full rounded-t-2xl" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mt-2">Single-Player Monopoly</div>
                <p className="text-slate-500 text-base mt-2">
                  A React-based single-player Monopoly game where you buy goods, upgrade properties, and manage assets to reach the victory goal.
                </p>
              </div>
              <div className="flex mt-3">
                <a href="https://single-player-monopoly.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 hover:transition hover:ease-in-out text-white font-normal py-2 px-4 ml-5 rounded transition ease-in-out">
                    View Site
                  </button></a>
                  <div className="grid grid-cols-4 ml-4 mt-1">
                    <IconWithTooltip icon={SiCreatereactapp} label="React" />
                    <IconWithTooltip icon={FaJs} label="JavaScript" />
                    <IconWithTooltip icon={FaHtml5} label="HTML" />
                    <IconWithTooltip icon={FaCss3Alt} label="CSS" />
                  </div>
              </div>
          </div>
        </div>
       
        <div className='card-wrapper h-[32rem] w-[20rem] hover:scale-105 transition ease-in-out mt-20'>
          <div className='card-content'>
              <div className="relative h-56">
                <img src={cms} alt="CMS" className="object-cover w-full h-full rounded-t-2xl" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mt-2">Club Management System</div>
                <p className="text-slate-500 text-base mt-2">
                  A club management system supporting multi-format data import and Echarts integration for comprehensive membership data visualization.
                </p>
              </div>
              <div className="flex mt-3">
                <a href="https://github.com/mark2515/club-management-system" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 hover:transition hover:ease-in-out text-white font-normal py-2 px-4 ml-5 rounded transition ease-in-out">
                    Read More
                  </button></a>
                  <div className="grid grid-cols-4 ml-4 mt-1">
                    <IconWithTooltip icon={FaVuejs} label="Vue" />
                    <IconWithTooltip icon={SiSpringboot} label="Spring Boot" />
                    <IconWithTooltip icon={SiApachemaven} label="Maven" />
                    <IconWithTooltip icon={SiMysql} label="MySQL" />
                  </div>
              </div>
          </div>
        </div>

        <div className='card-wrapper h-[32rem] w-[20rem] hover:scale-105 transition ease-in-out mt-20'>
          <div className='card-content'>
              <div className="relative h-56">
                <img src={shopway} alt="Shopway" className="object-cover w-full h-full rounded-t-2xl" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mt-2">ShopWay Online Mall</div>
                <p className="text-slate-500 text-base mt-2">
                  An online mall built on the MERN stack with RESTful APIs, offering an intuitive user interface and a scalable architecture for efficient e-commerce functionality.
                </p>
              </div>
              <div className="flex mt-3">
                <a href="https://github.com/mark2515/shopway-online-mall" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 hover:transition hover:ease-in-out text-white font-normal py-2 px-4 ml-5 rounded transition ease-in-out">
                    Read More
                  </button></a>
                  <div className="grid grid-cols-4 ml-4 mt-1">
                    <IconWithTooltip icon={SiMongodb} label="MongoDB" />
                    <IconWithTooltip icon={SiExpress} label="Express.js" />
                    <IconWithTooltip icon={FaReact} label="React" />
                    <IconWithTooltip icon={FaNodeJs} label="Node.js" />
                  </div>
              </div>
          </div>
        </div>

        <div className='card-wrapper h-[32rem] w-[20rem] hover:scale-105 transition ease-in-out mt-20'>
          <div className='card-content'>
              <div className="relative h-56">
                <img src={fhc} alt="CTG" className="object-cover w-full h-full rounded-t-2xl" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mt-2">Fetal Health Classification</div>
                <p className="text-slate-500 text-base mt-2">
                  Our ML-based fetal health classification method using Cardiotocogram (CTG) data to predict normal, suspect, and pathological conditions for early intervention.
                </p>
              </div>
              <div className="flex mt-3">
                <a href="https://github.com/mark2515/fetal-health-classification" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 hover:transition hover:ease-in-out text-white font-normal py-2 px-4 ml-5 rounded transition ease-in-out">
                    Read More
                  </button></a>
                  <div className="grid grid-cols-4 ml-4 mt-1">
                    <IconWithTooltip icon={SiPython} label="Python" />
                    <IconWithTooltip icon={SiPandas} label="Pandas" />
                    <IconWithTooltip icon={SiScikitlearn} label="Scikit-learn" />
                    <IconWithTooltip icon={SiPytorch} label="Pytorch" />
                  </div>
              </div>
          </div>
        </div>

      </div>
    </section>
    );
}



export default Projects;

