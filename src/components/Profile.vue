<template>
{{ user }}
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import UserRepository from "../repositories/UserRepository";

export default defineComponent({
    props:{id: String},
    data() {
        return{
            user: null
        }
    },
    async mounted()
    {
        this.user = await UserRepository.getUser(this.id);
    }
})
</script>