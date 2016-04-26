function instagramAPI(url) {
  return $.ajax({
    url,
    dataType: 'jsonp',
  })
  .then(response => response);
}

export function getProfile(token, userId) {
  const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${token}`;

  return instagramAPI(url);
}

export function getUserPhotos(token, userId) {
  const url = `https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${token}`;

  return instagramAPI(url);
}

export function getPhotoCommentInfo(token, mediaId) {
  const url = `https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${token}`;

  return instagramAPI(url);
}
