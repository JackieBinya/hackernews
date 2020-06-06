/* eslint-disable consistent-return */
import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  try {
    const {
      data: {
        title, time, url, by,
      },
    } = await axios.get(`${storyUrl + storyId}.json`);

    return {
      title, time, url, by,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStoryIds = async () => {
  try {
    const { data } = await axios.get(newStoriesUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
