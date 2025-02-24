import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <motion.section
            id='about'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-section"
        >
            <h2>Обо мне</h2>
            <p>
                Привет! Меня зовут Артём, и я занимаюсь разработкой веб-приложений. У меня есть опыт работы с современными технологиями, такими как React, Node.js и TypeScript. Я люблю создавать красивые и функциональные интерфейсы.
            </p>
        </motion.section>
    );
};

export default About;