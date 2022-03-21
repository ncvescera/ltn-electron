<template>
    <input v-model="testo" type="text" id="input" @keyup.enter="inputManager" autofocus>
</template>

<script>
export default {
    name: 'TextBox',
    data() {            // ora testo è mutabile e può essere modificato
        return {        // TODO: ricontrollare meglio col video
            testo: '',
        }
    },
    methods: {
        inputManager(event)  {
            const value = this.testo;
            const array_value = value.split(' ');

            const result = {room: array_value[0], items: array_value.slice(1)};
            this.testo = '';

            this.$emit('new-note', result);
            //console.log(result);
        },
    }
}
</script>

<style scoped>
input {
    width: 100%;
    padding: 5px 5px;
    margin: 8px 0;
    box-sizing: border-box;
}

input:focus{
    outline:none;
    border-color:blue;
    box-shadow:0 0 10px blue;
}
</style>