import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Skill {
    id: number;
    name: string;
    icon: string;
}

const skills: Skill[] = [
    { id: 1, name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/2048px-HTML5_logo_black.svg.png' },
    { id: 2, name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png' },
    { id: 3, name: 'JavaScript', icon: 'https://miladfathy.gallerycdn.vsassets.io/extensions/miladfathy/js-snippet/0.0.3/1620337479564/Microsoft.VisualStudio.Services.Icons.Default' },
    { id: 4, name: 'React', icon: 'https://dudusotero.gallerycdn.vsassets.io/extensions/dudusotero/vscode-extension-react-snippets/1.0.0/1554755468068/Microsoft.VisualStudio.Services.Icons.Default' },
    { id: 5, name: 'Node.js', icon: 'https://sumanta.gallerycdn.vsassets.io/extensions/sumanta/nodejs-developer-extension-pack/0.0.1/1674193532749/Microsoft.VisualStudio.Services.Icons.Default' },
    { id: 6, name: 'Python', icon: 'https://www.instituteiba.by/upload/medialibrary/63a/63a052fce949ec8a415b213ad03077e8.png' },
    { id: 7, name: 'BootStrap', icon: 'https://ajanuw.gallerycdn.vsassets.io/extensions/ajanuw/bs5/0.7.0/1646364353922/Microsoft.VisualStudio.Services.Icons.Default' },
    { id: 8, name: 'JQuery', icon: 'https://s3.amazonaws.com/media-p.slid.es/uploads/511081/images/2632820/logo.gif' },
    { id: 9, name: 'Figma', icon: 'https://steamuserimages-a.akamaihd.net/ugc/1841416169534456247/5220E4FA466C553AD5E786027C3F1E19FD9CA098/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false' },
    { id: 10, name: 'PhotoShop', icon: 'https://avatars.mds.yandex.net/get-mpic/1081556/img_id7421989937907068641.jpeg/orig' },
    { id: 11, name: 'Gulp', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gulp.js_Logo.svg/640px-Gulp.js_Logo.svg.png' },
    { id: 13, name: 'Tailwind CSS', icon: 'https://www.angularminds.com/tech-logos/tailwind-css-logo.svg' },
    { id: 14, name: 'Type Script', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png' },
];

const SkillsCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="skills-carousel"
        >
            <Slider {...settings}>
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-slide">
                        <img src={skill.icon} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </Slider>
        </motion.div>
    );
};

export default SkillsCarousel;
