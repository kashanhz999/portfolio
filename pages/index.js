import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import Contact from "./components/Contact";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kashan's Portfolio</title>
        <meta name="description" content="Kashan's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-poppins text-xl font-semibold">Hello World!</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl "
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1fcLjCAE0lspTfFRYOlzTENiBNjv9ZT8F/view?usp=sharing" target='_blank'
                >
                  Resume
                </a>
              </li>
              
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Kashan Haider.
            </h2>

            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              <div className="App">
              <span class="type-s text-2xl py-2 dark:text-white md:text-3xl"></span>
              </div>
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl text-justify">
              I am a software engineering student with a passion for web development. I have experience in programming languages such as Python and JavaScript, and web development frameworks such as React and Node.js. I am a dedicated and motivated individual with a strong drive to learn and stay up-to-date with the latest industry trends. I am seeking a job opportunity where I can apply my skills and continue to grow as a Software Engineer.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/kashan_hz" target='_blank'><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/kashan-haider110/" target='_blank'><AiFillLinkedin /></a>
              <a href="https://github.com/kashanhz999" target='_blank'><AiFillGithub/></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
          
        </section>
        <section>
          <div className="py-11" >
            <h3 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-3xl text-center">Contact Me</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200  mx-auto md:text-xl text-justify">
            Thank you for visiting my portfolio website!If you have any questions or would like to hire me, please don't hesitate to reach out. You can contact me via email at <span className="text-teal-400">kashan.hz999@gmail.com</span>, by phone at <span className="text-teal-400">7607272745</span> ,or by filling out the form below. I look forward to hearing from you! 
            </p>
            <Contact/>
            
            
            
          </div>
          
         
        </section>
      </main>
    </div>
  );
}
