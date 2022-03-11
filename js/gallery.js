import Gallery from '../svelte/Gallery.svelte';

let app = new Gallery({
  target: document.querySelector('#gallery-container')
});

export default app;