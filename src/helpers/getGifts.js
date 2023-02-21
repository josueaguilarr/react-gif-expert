export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key={YOUR_API_KEY}&limit=10&q=${category}`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gif = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));
  return gif;
};
