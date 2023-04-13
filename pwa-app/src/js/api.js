const API_KEY = '0de2a7b9ccmsh7673471c80f80c2p164149jsn52836f6b3351'; // Your API key
const API_HOST = 'contextualwebsearch-websearch-v1.p.rapidapi.com'; // API host
const API_ENDPOINT = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/SpellCheck'; // API endpoint

export const fetchImageSearch = async (query, numImages) => {
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${query}&pageSize=${numImages}
    
    `;
    console.log(numImages);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data.value; // Extract the image search results from the response
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export const fetchSpellCheck = async (text) => {
  const url = `${API_ENDPOINT}?text=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }


};