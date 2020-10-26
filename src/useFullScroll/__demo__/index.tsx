import { Component, ref } from 'vue';
import useFullScroll from '../index';
export default {
  setup() {
    const scroll = useFullScroll();
    return { scroll };
  },
  render(_ctx) {
    return (
      <div style="width: 2000px; height: 1000px;padding: 200px">{JSON.stringify(_ctx.scroll)}</div>
    );
  },
} as Component;
