import React, { useState } from 'react';
import { fetchSpellCheck } from './api';
const SpellCheckForm = () => {
  const [text, setText] = useState('teylor swiift');
  const [correctedText, setCorrectedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetchSpellCheck(text); // Call your fetchSpellCheck function
      const correctedText = response && response.Corrections && response.Corrections[0].CorrectedTerm;
      setCorrectedText(correctedText || 'No corrections found');
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleTextChange} />
        <button type="submit" disabled={loading}>
          Check Spelling
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {correctedText && <p>Corrected Text: {correctedText}</p>}
    </div>
  );
};

export default SpellCheckForm;