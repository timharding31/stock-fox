export const newsSelector = response => {
  let newsArr = response.value;
  return newsArr.map(story => ({
    publishedAt: story.datePublished,
    url: story.url,
    title: story.name,
    source: story.provider[0].name,
    description: story.description,
    urlToImage: (story.image) ? story.image.thumbnail.contentUrl : null
  }));
}