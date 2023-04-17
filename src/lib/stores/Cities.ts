import { writable } from 'svelte/store';

export const cityStore = writable([
      {
            id: 1,
            cityName: 'San Francisco Bay Area',
            years: '1992',
            text: 'Born and raised.'
      },
      {
            id: 2,
            cityName: 'Ann Arbor, MI',
            years: '2010 - 14',
            text: 'Studied philosophy/politics/economics at U-M.\nCo-founded organization that puts on charity concerts and raises $100k+ annually.'
      },
      {
            id: 3,
            cityName: 'Washington, DC',
            years: '2015 - 17',
            text: 'Project Manager for several $1m+ international development projects simultaneously.\nLed business development trips and organized conferences in four different countries.'
      },
      {
            id: 4,
            cityName: 'Auckland, NZ',
            years: '2018 - 21',
            text: 'Played key role in analysis and design of transformative urban design and transport projects as a Sustainable Transport Planner.'
      }
 ])