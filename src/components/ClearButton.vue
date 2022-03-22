<template>
    <span class="tooltip click" @click="clear">📋
        <span class="tooltiptext tooltipbottom">Clear all</span>
    </span>
</template>

<script>
export default {
    name: 'ClearButton',
    methods: {
        clear() {
            this.$emit('clear');
        },
    },
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}


.tooltip .tooltiptext {
  visibility: hidden;
  width: 80px;
  background-color: rgb(52, 51, 54);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 15px;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -40px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
.click {
        cursor: pointer;
        width: auto;
        height: auto;
        padding: 2px;
    }
    .click:hover {
        background: red;    /* todo: modificale rolore */
    }
</style>