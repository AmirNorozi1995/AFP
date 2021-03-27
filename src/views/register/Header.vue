<template>
    <header>
<!--        <img src="../assets/avi.png">-->
        <h1>{{title}}</h1>
    </header>
</template>

<script>

    export default {
        name: "Header",
        props:{
            title:String,
            showAddTask:Boolean
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        font-family: b nazanin;
        font-weight: bold;
        margin-top: 25px;
    }
</style>