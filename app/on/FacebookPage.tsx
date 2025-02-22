import React, { useEffect } from 'react';

const FacebookPage: React.FC = () => {
    useEffect(() => {
        window.location.replace('https://www.facebook.com/arvind.nagalingam/');
    }, []);

    return null;
};

export default FacebookPage;