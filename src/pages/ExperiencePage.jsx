import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaHandsHelping, FaBookReader, FaMedal, FaChalkboardTeacher,  } from 'react-icons/fa';
import Title from '../components/Title';

import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
    <section className='px-28 md:py-28 w-screen h-200rem'>
      <Title title='Experience'/>
        <VerticalTimeline className='mt-10 md:mt-24 w-full ssm:w-85 s450:w-100 s550:w-125 sm:w-125 s650:w-150 right-26 iphone:right-22 s400:right-18 s500:right-16 lg:right-0 md:right-0'>
          <VerticalTimelineElement
              className="mt-20"
              contentStyle={{ background:`radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)`, color: '#fff' }}
              contentArrowStyle={{ borderRight: `10px solid #fff` }}  
              shadowSize={ 'large' }
              iconStyle={{ background:`radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)`, color: '#fff' }}
              icon={<FaMedal />}
            >
              <div className='bg-black p-4 rounded-xl bg-opacity-50 backdrop-blur-lg shadow-lg hover:scale-102 duration-300 transition ease-in-out'>
                <h3 className="font-bold text-4xl mt-3 ml-3 paragraph mb-2">Awards</h3>
                <hr className=''></hr>
                <h4 className="paragraph text-lg mt-2 ml-3">Jan 2019 - Present</h4>
                <ul className='space-y-4 text-md md:text-lg px-4 py-10 list-disc -mt-10'>
                  <br></br>
                  <li>2024 Dean's Honour Roll, Simon Fraser University</li>
                  <li>Mountain Madness 2024, Simon Fraser University - <span className='paragraph underline font-bold'>5th Place</span></li>
                  <li>A Strange Programming Contest 2023, Simon Fraser University - <span className='paragraph underline font-bold'>Creativity Award</span></li>
                  <li>2020 Lanqiao Cup Competition: C/C++ Programming - <span className='paragraph underline font-bold'>Third Prize</span></li>
                  <li>Euclid Mathematics Contest 2019 - <span className='paragraph underline font-bold'>Top 25%</span> among 22169 applicants</li>
                </ul>
              </div>
            </VerticalTimelineElement>

          <VerticalTimelineElement
              className="mt-20"
              contentStyle={{ background:`radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)`, color: '#fff' }}
              contentArrowStyle={{ borderRight: `10px solid #fff` }}  
              shadowSize={ 'large' }
              iconStyle={{ background:`radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)`, color: '#fff' }}
              icon={<FaChalkboardTeacher />}>
              <div className='bg-black p-4 rounded-xl bg-opacity-50 backdrop-blur-lg shadow-lg hover:scale-102 duration-300 transition ease-in-out'>
                <h3 className="font-bold text-3xl mt-3 ml-3 paragraph mb-2">Deloitte Digital</h3>
                <hr className=''></hr>
                <h4 className="paragraph text-lg mt-2 ml-3">Aug 2021 - Nov 2021</h4>
                <ul className='space-y-4 text-md md:text-lg px-6 py-10 list-disc -mt-10'>
                  <br></br>
                    <li>Responsible for designing and developing components for Deloitte's component library, using technologies such as React, Material UI, and Redux Toolkit. My role involves conducting rigorous component testing using Jest to ensure code quality, maintainability, and robust functionality.</li>
                </ul>
              </div>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="mt-20"
              contentStyle={{ background:`radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)`, color: '#fff' }}
              contentArrowStyle={{ borderRight: `10px solid #fff` }}  
              shadowSize={ 'large' }
              iconStyle={{ background:`radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)`, color: '#fff' }}
              icon={<FaHandsHelping  />}>
              <div className='bg-black p-4 rounded-xl bg-opacity-50 backdrop-blur-lg shadow-lg hover:scale-102 duration-300 transition ease-in-out'>
                <h3 className="font-bold text-3xl mt-3 ml-3 paragraph mb-2">Fujian Zhimao Law Firm</h3>
                <hr className=''></hr>
                <h4 className="paragraph text-lg mt-2 ml-3">Aug 2023 - Dec 2023</h4>
                <ul className='space-y-4 text-md md:text-lg px-6 py-10 list-disc -mt-10'>
                  <br></br>
                    <li>Designed and developed advanced chatbots using the latest in Natural Language Processing (NLP) and AI technologies, including mainstream large language models (LLMs) like GPT-4. </li>
                    <li>Built user-friendly interfaces and integrating backend systems using Vue, Node.js, and REST APIs, leveraging Alibaba Cloud for database hosting to ensure scalability and efficiency</li>
                </ul>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="mt-20"
              contentStyle={{ background:`radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)`, color: '#fff' }}
              contentArrowStyle={{ borderRight: `10px solid #fff` }}  
              shadowSize={ 'large' }
              iconStyle={{ background:`radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)`, color: '#fff' }}
              icon={<FaBookReader />}>
              <div className='bg-black p-4 rounded-xl bg-opacity-50 backdrop-blur-lg shadow-lg hover:scale-102 duration-300 transition ease-in-out'>
                <h3 className="font-bold text-3xl mt-3 ml-3 paragraph mb-2">Simon Fraser University USRA Research Assistant</h3>
                <hr className=''></hr>
                <h4 className="paragraph text-lg mt-2 ml-3">May 2024 - Aug 2024</h4>
                <ul className='space-y-4 text-md md:text-lg px-6 py-10 list-disc -mt-10'>
                  <br></br>
                    <li>Optimized a polygon packing algorithm to enhance efficiency and designed a modular code structure for improved project maintainability.</li>
                    <li> Mentored a fellow research assistant by providing guidance on algorithm optimization and code
                    debugging, fostering better team collaboration.</li>
                </ul>
              </div>
            </VerticalTimelineElement>

    </VerticalTimeline>
    </section>
    );
}



export default Experience;