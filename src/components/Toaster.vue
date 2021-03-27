<template>
    <div id="snackbar" :class=toasterclass>{{toasterText}}</div>
</template>

<script>
    export default {
        name: "Toaster",
        props:{
            toasterText:String,
            toasterclass:String
        }
    }
</script>

<style scoped>
    #snackbar {
        visibility: hidden;
        min-width: 250px;
        margin-left: -49%;
        background-color: #a02c2cad;
        color: #fff;
        text-align: center;
        padding: 16px;
        position: fixed;
        z-index: 99999;
        left: 50%;
        font-family: system-ui;
        bottom: 80%;
        font-size: 17px;
        border-radius: 15px;
    }

    #snackbar.show {
        visibility: visible;
        /*-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;*/
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @-webkit-keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }

    @keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }
</style>