import React from 'react';
import StoryCard from '../../components/cards/story-card';

function Home(props) {

    const stories = [1, 2, 3, 4]

    return (
        <div className="flex flex-nowrap auto-0 flex-col">
            {stories.map((item, index) => {
                return (
                    <StoryCard />
                )
            })}
        </div>
    );
}

export default Home;