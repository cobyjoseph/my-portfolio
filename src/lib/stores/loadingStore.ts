import { writable } from 'svelte/store';

const loadingStore = writable(true);

export default loadingStore;