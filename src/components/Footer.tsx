import React from 'react';

const Footer: React.FC = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer>
            <p>&copy; {currentYear} портфолио</p>
        </footer>
    );
};

export default Footer;