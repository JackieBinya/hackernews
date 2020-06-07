import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then(setStoryIds);
  }, []);
  return (
    <>
      <h1>Hacker News</h1>
      {storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />)}

    </>
  );
};
