<template>
    <ul v-if="tweets.length > 0">
        <li v-for="tweet in tweets" :key="tweet._id" >
        {{ tweet.message }} <router-link :to='"/tweet/" + tweet._id'>lien</router-link> <router-link :to='"/profile/" + tweet.owner'>le poto</router-link>
        </li>
    </ul>
    <add-tweet></add-tweet>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import TwitterCloneRepository from "../repositories/TwitterCloneRepository";
import addTweet from "./addTweet.vue";

export default defineComponent({
    components:{addTweet},
    data: () => {
        return {
            tweets: [],
        }
    },
    async mounted()
    {
        this.tweets = await TwitterCloneRepository.getAllTweets();
        console.log(this.tweets);
    }
})
</script>