<template>
  <span class="us-blank-span" :style="style">
  </span>
</template>

<script>
//supportted attributes: width
export default {
  name: 'BlankSpan',
  props: {
  	 width: {
  	 	type: String,
      default: "10"
  	 },
  },
  computed: {
  	style: function() {
      var s = this.appendStyle("", "width", this.fillPixelSuffix(this.width));
      console.log(s);
      return s;
  	}
  },
}
</script>