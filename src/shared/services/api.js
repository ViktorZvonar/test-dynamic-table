import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '',
    'Access-Control-Allow-Methods': '',
    'Access-Control-Allow-Headers': '',
    'Access-Control-Expose-Headers': '',
    'Access-Control-Allow-Credentials': 'false',
    'Access-Control-Max-Age': '0',
  },
});

export const getData = async () => {
  try {
    const res = await instance.get(`/`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

// export const updateData = async tweet => {
//   try {
//     const updatedData = {
//       ...tweet,
//       followers: tweet.followers,
//       isFollowing: !tweet.isFollowing,
//     };
//     const res = await instance.put(`/${tweet.id}`, updatedTweet);
//     return res;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
