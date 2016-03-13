/* eslint arrow-body-style: [2, "always"]*/

export default function getTimeline(token) {
  const api = `https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=${token}`;
  fetch(api)
    .then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
    }).catch((err) => {
      console.log(`Error: ${err}`);
    });
}
