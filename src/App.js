import React from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';


import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '324395a69ea6efa387196bbe9b63e0a42e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles)
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan AI News App</h1> 
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App;