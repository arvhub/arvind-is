import React, { useEffect } from 'react';

const InstagramPage: React.FC = () => {
    useEffect(() => {
        window.location.replace('https://www.instagram.com/arvadarv/');
    }, []);

    return null;
};

export default InstagramPage;