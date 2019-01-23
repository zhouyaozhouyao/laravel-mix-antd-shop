<template>
    <div>
        <h3>Hello Laravel!</h3>
        <p class="hello">{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "Hello",
        data() {
            return {
                msg: '我是 vue'
            }
        }
    }
</script>

<style scoped>
    .hello {
        font-size: 2em;
        color: green;
    }
</style>