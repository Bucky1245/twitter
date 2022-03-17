import axios from 'axios';

export default
{
    async getUser(id)
    {
        let user = await (
            axios.get("https://fges-twitter-clone.herokuapp.com/user/" + id, {
            headers: {
                "x-fges-user-key": "zD8CAcUtB2KlLPcBXX9j96twyxyLJFaX",
            },
        }));
        console.log(user)
        return user.data;
    }
}