
<template>
  <div class="us-blank-row" :style="style">
  </div>
</template>

<script>
//supportted attributes: color height
export default {
  name: 'BlankRow',
  props: {
  	 color: {
  	 	type: String,
  	 },
  	 height: {
  	 	type: String,
  	 }
  },
  computed: {
  	style: function() {
      var s = this.appendStyle("", "background-color", this.color);
      return this.appendStyle(s, "height", this.fillPixelSuffix(this.height));
  	}
  },
}
</script>