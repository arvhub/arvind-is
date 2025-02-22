import React, { useEffect } from 'react';

const GithubPage: React.FC = () => {
    useEffect(() => {
        window.location.replace('https://github.com/arvhub');
    }, []);

    return null;
};

export default GithubPage;