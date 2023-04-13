const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0de2a7b9ccmsh7673471c80f80c2p164149jsn52836f6b3351',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };
  
  // Define a function to fetch spelling check data
  export const fetchSpellCheck = async (text) => {
    try {
      const encodedText = encodeURIComponent(text); // Encode the text for URL
      const response = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/SpellCheck?text=${encodedText}`, options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch spelling check data');
    }
  };