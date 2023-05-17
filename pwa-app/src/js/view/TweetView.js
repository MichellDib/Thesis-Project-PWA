import React from "react";

function TweetView({ loading, error, onSubmit, setStateTime, renderTime, results: result }) {


    if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

    
    //const { text, creation_date, media_url } = results[0];
    //If result isn't null, then it's an array with one object
    if (result !== null) {
        const { continuation_token, results } = result;


        return (
          <div>
            <form>
              <button type="submit" onClick={onSubmit}>Search</button>
            </form>
            <p>Render time: 13.699999997764826 ms</p>
            {results.map(tweet => (
              <div key={tweet.tweet_id}>
                <p>{tweet.text}</p>
                <p>{tweet.creation_date}</p>
                <p>{tweet.user.name}</p>
                <p>{tweet.user.username}</p>
              </div>
            ))}
          </div>
        );
      }
    
      return (
        <div>
          <form>
            <button type="submit" onClick={onSubmit}>Search</button>
          </form>
        </div>
      );
    }
    

export default TweetView;
