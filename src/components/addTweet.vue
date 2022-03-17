<template>
    <form @submit.prevent>
        <input type="text" v-model="tweetSave.message" />
        <button @click="saveTweet">Tweeter</button>
    </form>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import TwitterCloneRepository from "../repositories/TwitterCloneRepository";

export default defineComponent({
    props: { idParent: String },
    data: () => {
        return {
            tweetSave:
            {
                message: null,
                parent: null,
            }
        }
    },
    methods:
    {
        async saveTweet() {
            if(this.idParent)
                this.tweetSave.parent = this.idParent;
            else
                this.tweetSave.parent = "";
            console.log(this.tweetSave)
            await TwitterCloneRepository.addTweet(this.tweetSave);
        }
    }
})
</script>