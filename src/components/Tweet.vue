<template>
    <div v-if="tweet">
        {{ tweet.message }}
        <br />
        <br />
        <div v-if="tweet.children">
            Les réponses :
            <br />
            <br>
            <div v-for="child in tweet.children" :key="child._id">{{ child.message }}</div>
        </div>
    </div>
    <add-tweet :idParent="tweetId"></add-tweet>
    
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import TwitterCloneRepository from "../repositories/TwitterCloneRepository";
import addTweet from "../components/addTweet.vue";

export default defineComponent({
  components: { addTweet },
    props: { tweetId: String },
    data: () => {
        return {
            tweet: null,
            tweetSave:
            {
                message: null,
                parent: null,
            }
        }
    },
    async mounted() {
        this.tweet = await TwitterCloneRepository.getTweet(this.tweetId);
        if (this.tweet) {
            this.tweetSave.parent = this.tweetId;
        }
    },
    methods:
    {
        async saveTweet() {
            console.log(this.tweetSave)
            await TwitterCloneRepository.addTweet(this.tweetSave);
        }
    }
})
</script>