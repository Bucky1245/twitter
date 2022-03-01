<template>
    <ul>
        <li v-for="tweet in tweets" :key="tweet.id" >
        {{ tweet.value }} 
        </li>
    </ul>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import TwitterCloneRepository from "../repositories/TwitterCloneRepository";

export default defineComponent({
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