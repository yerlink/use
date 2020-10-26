import { Ref, ref } from 'vue';
import useEventListener from '../useEventListener';

interface Position {
  left: number;
  top: number;
}
export default function useFullScroll() {
  let position = ref({ left: 0, top: 0 } as Position);

  const updatePosition = () => {
    const newPosition = {
      left: window.pageXOffset,
      top: window.pageYOffset,
    };
    position.value = newPosition;
  };

  const listener = () => {
    updatePosition();
  };

  useEventListener(window, {
    type: 'scroll',
    listener,
  });

  return position;
}
