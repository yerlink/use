// import { mount } from '@vue/test-utils';
// import { ref } from 'vue';
// import useScroll from '../index';

// describe('useScroll', () => {
//   it('define', async () => {
//     const elem = document.createElement('div');
//     elem.style.height = '100px';
//     if (document.body) {
//       document.body.appendChild(elem);
//     }
//     let scroll;
//     const wrapper = mount(
//       {
//         setup() {
//           scroll = useScroll(ref(elem));
//           return {};
//         },
//         render() {
//           return <h1 style={{ height: '999px' }}></h1>;
//         },
//       },
//       {
//         attachTo: elem,
//       },
//     );
//     await wrapper.vm.$nextTick();
//     // elem did not trigger scroll
//     elem.scrollTop = 120;
//     await wrapper.vm.$nextTick();
//     expect(scroll.value.left).toBe(0);
//     expect(scroll.value.top).toBe(0);
//   });
// });
