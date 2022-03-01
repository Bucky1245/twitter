import axios from "axios";

export default
    {
        getAllTweets() {
            var variable;
            return axios.get("https://fges-twitter-clone.herokuapp.com/allTweets", {
                headers: {
                    "x-fges-user-key": "zD8CAcUtB2KlLPcBXX9j96twyxyLJFaX",
                },
            }).then(response => variable = response.data)
            .catch(response => variable = response.error);
        }
    }