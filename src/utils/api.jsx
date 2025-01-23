const fetchImages = async () => {
  const apiKey = "B_ZJymbpsVeVOlWwMyeEytOZFpstKMmCkZIKTsjFByQ"; // Replace with your Unsplash API key
  const url = `https://api.unsplash.com/photos/random?count=12&client_id=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.map((item) => ({
      id: item.id,
      image: item.urls.small,
      title: item.alt_description || "Random Photo",
    }));
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    return [];
  }
};

export default fetchImages;
