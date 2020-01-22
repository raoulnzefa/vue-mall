<template>
  <!-- 底层背景 -->
  <div class="us-under-layer" :style="getStyle()"></div>
</template>

<script>
/**
 * Props
 *
 * :image String,  background image, optional，
 * :background String, background color, optional, 
 * :z-index Number, z-index attribute, optional, default:-1
 */
export default {
  name: 'UnderLayer',
  data() {
    return {
    }
  },
  props: {
    image: String,
    background: String,
    zIndex: {
      type: Number,
      default: -1
    }
  },
  methods: {
    getStyle() {
      var style = "";
      if (!this.emptyString(this.image)) {
        style = this.appendStyle(style, "background-image", 'url("' + this.image + '")');
        style = this.appendStyle(style, "background-size", "100%");
        style = this.appendStyle(style, "background-repeat", "no-repeat");
      }
      if (!this.emptyString(this.background)) {
        style = this.appendStyle(style, "background-color", this.background);
      } else {
        if (this.emptyString(this.image)) {
          style = this.appendStyle(style, "background-color", "#f2f2f2");
        }
      }
      style = this.appendStyle(style, "z-index", this.zIndex);
      return style;
    }
  }
}
</script>    

<style type="text/css">
  .us-under-layer {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
</style>>                                          
