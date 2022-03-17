import axios from "axios";

export default
    {
        async getAllTweets() {
            let tweets = await (
                axios.get("https://fges-twitter-clone.herokuapp.com/allTweets", {
                headers: {
                    "x-fges-user-key": "zD8CAcUtB2KlLPcBXX9j96twyxyLJFaX",
                },
            }));
            console.log(tweets)
            return tweets.data;
        },

        async getTweet(id)
        {
            let tweet = await(axios.get("https://fges-twitter-clone.herokuapp.com/tweet/" + id, {
                headers: {
                    "x-fges-user-key": "zD8CAcUtB2KlLPcBXX9j96twyxyLJFaX",
                },
            }));
            return tweet.data;
        },

        async addTweet(tweet)
        {
            let tweetSave = await (axios.post("https://fges-twitter-clone.herokuapp.com/tweet",tweet, {
                headers: {
                    "x-fges-user-key": "zD8CAcUtB2KlLPcBXX9j96twyxyLJFaX",
                }
            }));
            return tweetSave.data;
        }
    }