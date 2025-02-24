import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import calculatorImage from './images/calculator.png';
import macaroonImage from './images/macaroon.png';
import pizza from './images/pizza.png';
import sushi from './images/sushi.png'

interface Project {
    id: number;
    title: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Macaroon Web-Site',
        image: macaroonImage,
        link: 'https://cyberart2718281.github.io/macaroon/',
    },
    {
        id: 2,
        title: 'Calculator JS',
        image: calculatorImage,
        link: 'https://cyberart2718281.github.io/calculator-project/',
    },
    {
        id: 3,
        title: 'Pizza Site',
        image: pizza,
        link: 'https://cyberart2718281.github.io/pizza-site/',
    },
    {
        id: 4,
        title: 'Sushi site',
        image: sushi,
        link: 'https://cyberart2718281.github.io/pizza-site/',
    },
];

const ProjectCarousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="project-carousel"
        >
            <Slider {...settings}>
                {projects.map((project) => (
                    <div key={project.id} className="project-slide">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                        </a>
                    </div>
                ))}
            </Slider>
        </motion.div>
    );
};

export default ProjectCarousel;