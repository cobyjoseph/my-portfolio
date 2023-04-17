import { writable } from 'svelte/store';

export const cityStore = writable([
      {
            cityName: '',
            years: '',
            text: ''
      },
      {
            cityName: '',
            years: '',
            text: ''
      },
      {
            cityName: 'Washington, DC',
            years: '2015 - 17',
            text: ''
      },
      {
            cityName: 'Auckland, NZ',
            years: '2018 - 21',
            text: 'Played key role in analysis and design of transformative urban design and transport projects as a Sustainable Transport Planner'
      }
 ])