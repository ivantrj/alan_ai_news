import React from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';

const alanKey = '324395a69ea6efa387196bbe9b63e0a42e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    console.log(articles)
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan AI News App</h1> 
        </div>
    )
}

export default App;