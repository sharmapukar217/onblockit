import type { Action } from "svelte/action";

export const clickOutside: Action<HTMLElement, () => void> = (node, callback) => {
  function handleClick(event: MouseEvent) {
    const target = event.target as Node;
    if (node && !node.contains(target)) callback();
  }

  document.addEventListener("click", handleClick);

  return {
    destroy() {
      document.removeEventListener("click", handleClick);
    }
  };
};
