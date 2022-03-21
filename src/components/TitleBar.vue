<template>
    <header id="titlebar">
    <div id="drag-region">

        <div id="window-title">
          <span>{{title}}</span>
        </div>

        <div id="window-controls">
          <div class="button" id="min-button" @click="winMin()">
              <img class="icon" srcset="../assets/icon/windowIcons/min-w-10.png 1x, ../assets/icon/windowIcons/min-w-12.png 1.25x, ../assets/icon/windowIcons/min-w-15.png 1.5x, ../assets/icon/windowIcons/min-w-15.png 1.75x, ../assets/icon/windowIcons/min-w-20.png 2x, ../assets/icon/windowIcons/min-w-20.png 2.25x, ../assets/icon/windowIcons/min-w-24.png 2.5x, ../assets/icon/windowIcons/min-w-30.png 3x, ../assets/icon/windowIcons/min-w-30.png 3.5x" draggable="false" />
          </div>
          <div class="button" id="max-button" @click="winMax()">
              <img class="icon" srcset="../assets/icon/windowIcons/max-w-10.png 1x, ../assets/icon/windowIcons/max-w-12.png 1.25x, ../assets/icon/windowIcons/max-w-15.png 1.5x, ../assets/icon/windowIcons/max-w-15.png 1.75x, ../assets/icon/windowIcons/max-w-20.png 2x, ../assets/icon/windowIcons/max-w-20.png 2.25x, ../assets/icon/windowIcons/max-w-24.png 2.5x, ../assets/icon/windowIcons/max-w-30.png 3x, ../assets/icon/windowIcons/max-w-30.png 3.5x" draggable="false" />
          </div>
          <div class="button" id="close-button" @click="winClose()">
              <img class="icon" srcset="../assets/icon/windowIcons/close-w-10.png 1x, ../assets/icon/windowIcons/close-w-12.png 1.25x, ../assets/icon/windowIcons/close-w-15.png 1.5x, ../assets/icon/windowIcons/close-w-15.png 1.75x, ../assets/icon/windowIcons/close-w-20.png 2x, ../assets/icon/windowIcons/close-w-20.png 2.25x, ../assets/icon/windowIcons/close-w-24.png 2.5x, ../assets/icon/windowIcons/close-w-30.png 3x, ../assets/icon/windowIcons/close-w-30.png 3.5x" draggable="false" />
          </div>
        </div>
    </div>
    </header>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: {
      type: String,
      default: 'Title ...'
    }
  },
  methods: {
    winClose: () => { window.windowButtonsAPI.close() },
    winMax  : () => { window.windowButtonsAPI.max() },
    winMin  : () => { window.windowButtonsAPI.min() }
  }
}
</script>

<style scoped>
  #titlebar {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    background: #030f18;
    width: auto;
    height: 32px;
  }

  #titlebar #drag-region {
    width: 100%;
    height: 100%;
    -webkit-app-region: drag;
    display: grid;
    grid-template-columns: auto 138px;
  }

  #window-title {
    grid-column: 1;
    display: flex;
    align-items: center;
    margin-left: 8px;
    overflow: hidden;
    font-family: "Segoe UI", sans-serif;
    font-size: 12px;
  }

  #window-title span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.5;
  }

  #window-controls {
    display: grid;
    grid-template-columns: repeat(3, 46px);
    
    top: 0;
    right: 0;
    height: 100%;
    -webkit-app-region: no-drag;

  }

  #window-controls .button {
    grid-row: 1 / span 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    user-select: none;
  }

  @media (-webkit-device-pixel-ratio: 1.5), (device-pixel-ratio: 1.5),
  (-webkit-device-pixel-ratio: 2), (device-pixel-ratio: 2),
  (-webkit-device-pixel-ratio: 3), (device-pixel-ratio: 3) {
    #window-controls .icon {
      width: 10px;
      height: 10px;
    }
  }

  #window-controls .button:hover {
    background: rgba(255,255,255,0.1);
  }

  #window-controls .button:active {
    background: rgba(255,255,255,0.2);
  }

  #close-button:hover {
    background: #E81123 !important;
  }

  #close-button:active {
    background: #F1707A !important;
  }
  #close-button:active .icon {
    filter: invert(1);
  }

  #min-button {
    grid-column: 1;
  }
  #max-button, #restore-button {
    grid-column: 2;
  }
  #close-button {
    grid-column: 3;
  }
</style>