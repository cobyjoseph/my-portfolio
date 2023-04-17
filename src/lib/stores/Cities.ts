import { writable } from 'svelte/store';

export const cityStore = writable([
      {
            id: 1,
            cityName: 'SF Bay Area',
            years: '1992',
            text: 'I was born and raised in San Mateo, CA, outside of San Francisco.'
      },
      {
            id: 2,
            cityName: 'Ann Arbor, MI',
            years: '2010 - 14',
            text: 'At the University of Michigan I studied philosophy, politics, and economics. I also co-founded an organization that puts on charity concerts and raises $100k+ annually.'
      },
      {
            id: 3,
            cityName: 'Washington, DC',
            years: '2015 - 17',
            text: 'In DC I was a Project Manager for several $1m+ international development projects simultaneously. I also led business development trips and organized conferences in four different countries.'
      },
      {
            id: 4,
            cityName: 'Auckland, NZ',
            years: '2018 - 21',
            text: 'I played key role in analysis and design of transformative urban design and transport projects as a Sustainable Transport Planner.'
      }
 ])