import { defineComponent } from 'vue';
export const Bar = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>Bar12</div>
    )
  }
})