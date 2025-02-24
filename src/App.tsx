import React from 'react';
import {motion} from 'framer-motion';
import About from './components/About';
import ProjectCarousel from './components/ProjectCarousel';
import SkillsCarousel from './components/SkillsCarousel';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App" id='top'>
            <Header/>
            <main>
                <About/>
                <motion.h1
                    id='projects'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.6}}
                >
                    Мои проекты
                </motion.h1>
                <ProjectCarousel/>
                <motion.h1
                    id='skills'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.8}}
                >
                    Мои навыки
                </motion.h1>
                <SkillsCarousel/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;