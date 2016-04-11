function instagramAPI(url, cb) {
  $.ajax({
    url,
    dataType: 'jsonp',
  })
  .then((payload) => {
    cb(payload);
  });
}

export function getProfile(token, userId, cb) {
  const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${token}`;

  return instagramAPI(url, cb);
}

export function getUserPhotos(token, userId, cb) {
  const url = `https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${token}`;

  return instagramAPI(url, cb);
}
