<template>
  <div :class="getClass()">
      <div class="us-panel-header">
        <slot name="header"></slot>
      </div>
      <div class="us-panel-body">
        <slot></slot>
      </div>
      <div class="us-panel-footer" v-show="$slots.footer">
        <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
/**
 * Props
 * :type 面板样式 String  可选值 default|primary|success|info|warning|danger 默认:default
 * :padding-size String 内边距大小 可选值：small|midium|large|none  默认：large
 *
 * Slots
 * default
 * header
 * footer
 */
export default {
  name: 'Panel',
  data() {
    return {
    }
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    paddingSize: {
      type: String,
      default: "large"
    },
  },
  methods: {
    getClass() {
      var c = "us-panel us-panel-" + this.type;
      if (!this.emptyString(this.paddingSize)) {
        c = c + " us-panel-padding-" + this.paddingSize;
      }
      return c;
    }
  }
}
</script> 

<style type="text/css">
  .us-panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 10px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-sizing:border-box;
  }

  .us-panel > .us-panel-header {
    color: #333;
    border-top-left-radius: 8px;
    border-top-right-radius:  8px;
    border-bottom: 1px solid #f2f2f2;
  }

  .us-panel-default {
    border-color: #fff;
  }

  .us-panel-default > .us-panel-header {
    background-color: #fff;
  }

  .us-panel.us-panel-primary {
    border-color: #3280fc;
  }

  .us-panel-primary > .us-panel-header {
    color: #fff;
    background-color: #3280fc;
    border-color: #3280fc;
  }

  .us-panel-success {
    border-color: #bae8b6;
  }

  .us-panel-success > .us-panel-header {
    color: #38b03f;
    background-color: #ddf4df;
    border-color: #bae8b6;
  }

  .us-panel-warning {
    border-color: #ffdcbc;
  }

  .us-panel-warning > .us-panel-header {
    color: #f1a325;
    background-color: #fff0d5;
    border-color: #ffdcbc;
  }

  .us-panel-danger {
    border-color: #ffc6c7;
  }

  .us-panel-danger > .us-panel-header {
    color: #ea644a;
    background-color: #ffe5e0;
    border-color: #ffc6c7;
  }

  .us-panel-info {
    border-color: #a2e4de;
  }

  .us-panel-info > .us-panel-header {
    color: #03b8cf;
    background-color: #ddf3f5;
    border-color: #a2e4de;
  }

  .us-panel-footer {
    background-color: #f5f5f5;
    border-top: 1px solid #f2f2f2;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .us-panel-default > .us-panel-footer {
    background-color: #fff;
  }

  .us-panel-padding-small .us-panel-header, .us-panel-padding-small .us-panel-body, .us-panel-padding-small .us-panel-footer {
    padding:3px 5px;
  }

  .us-panel-padding-midium .us-panel-header, .us-panel-padding-midium .us-panel-body, .us-panel-padding-midium .us-panel-footer {
    padding:5px 8px;
  }

  .us-panel-padding-large .us-panel-header, .us-panel-padding-large .us-panel-body, .us-panel-padding-large .us-panel-footer {
    padding:8px 12px;
  }
</style>