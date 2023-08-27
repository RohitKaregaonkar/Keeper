import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <footer>
            <p>Copyrights Reserved @ {year}</p>
        </footer>
    );
}

export default Footer;