import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { useInfiniteScroll } from '../hooks/infiniteScroll';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count }  = useInfiniteScroll();
  useEffect(() => {
    getStoryIds().then(setStoryIds);
  }, []);
  return (
    <>
      <h1>Hacker News</h1>
      {storyIds && storyIds.slice(0, count).map((storyId) => <Story key={storyId} storyId={storyId} />)}
    </>
  );
};
