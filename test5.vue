<template>
  <div v-show="isVisible">
    <p>{{ value }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-vue-component",
  props: ["value", "show"],
  emit: ["onChange"],
  data: {
    isVisible: this.show;
  },
});

//Complete this component in order to make visible or not the DIV and let PARENT COMPONENT (out of test) knowing that
</script>
