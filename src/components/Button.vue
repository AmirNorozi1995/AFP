<template>
    <button @click="onClick()" :style="{background:color}" class="btn button-control">
        {{text}}
        <i :class=iconClass></i>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props:{
            text:String,
            color:String,
            iconClass:String
        },
        methods:{
            onClick() {
                this.$emit('btn-click')
            }
        }
    }
</script>

<style scoped>
    .button-control {
        width: 100%;
    }
</style>