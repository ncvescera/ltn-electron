<template>
    <AmmoImage v-if="this.ammo" />
    <ToolImage v-if="this.tool" />
    <MedicImage v-if="this.med" />
    <DisImage v-if="this.dis" />
</template>

<script>
import AmmoImage from "./imgComponents/AmmoImage.vue";
import ToolImage from "./imgComponents/ToolImage.vue";
import MedicImage from "./imgComponents/MedicImage.vue";
import DisImage from "./imgComponents/DisImage.vue";

export default {
    name: 'ImageLoader',
    props: {
        image: 'ammo'|'tool'|'dis'|'med',
    },
    data() {
        return {
            ammo: false,
            tool: false,
            dis: false,
            med: false,
        };
    },
    created() {
        this.ammo = this.image === 'ammo';
        this.tool = this.image === 'tool';
        this.dis = this.image === 'dis';
        this.med = this.image === 'med';
    },
    components: {
        AmmoImage,
        ToolImage,
        MedicImage,
        DisImage,
    },
}
</script>

<style>
.tool {
    width: 40px;
    height: 40px;
}
</style>