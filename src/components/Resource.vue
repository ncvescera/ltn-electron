<template>
    <span v-if="!isImg">{{ _value }}</span>

    <span class="container" v-if="isImg">
        <ImageLoader :image="this._value"/>
        <div class="bottom-right">{{count}}</div>    
    </span>    
</template>

<script>
import ImageLoader from "./ImageLoader.vue";

export default {
    name: "Resource",
    data() {
        return {
            _value: "",
            count: 0,
            isImg: false,
        };
    },
    props: {
        value: String,
    },
    // si avvia quando la ui è stata creata (??)
    created() {
        console.log(this.value);
        switch (this.value){
            case "ammo":
            case "ammonition":
                this._value = "ammo";
                this.isImg = true;
                this.count++;
                break;

            case "tool":
            case "toolbox":
            case "refill":
            case "toolrefill":
                this._value = "tool";
                this.isImg = true;
                this.count++;
                break;
            
            case "dis":
            case "disinfection":
                this._value = "dis";
                this.isImg = true;
                this.count++;
                break;
            
            case "medic":
            case "med":
            case "kit":
            case "medikit":
                this._value = "med";
                this.isImg = true;
                this.count++;
                break;
            
            default:
                this._value = this.value;
                break;
        }
    },
    components: { ImageLoader }
}
</script>

<style scoped>


.bottom-right {
    position: absolute;
    bottom: 0px;
    right: 0px;
}

.container {
    position: relative;
    text-align: center;
    font-size: small;
    display: inline-block;
    vertical-align:middle;
    margin-left: 5px;
    margin-right: 5px;
    width: fit-content;
    height: fit-content;
  }
</style>