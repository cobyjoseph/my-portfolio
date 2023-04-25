<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store'; // Import writable store
	import Accordion from './accordion-contents/Accordion.svelte';
	import AccordionSection from './accordion-contents/AccordionSection.svelte';
	import WhoAmI2 from '$lib/components/sections/accordion-contents/WhoAmI2.svelte';
	import WhatCanIDo from '$lib/components/sections/accordion-contents/WhatCanIDo.svelte';
	import ExampleProjects from '$lib/components/sections/accordion-contents/ExampleProjects.svelte';

	const activeSection = writable(null); // Use a writable store instead of a variable

	function setActiveSection(title) {
		activeSection.set(title); // Use set method to update the store value
	}

	setContext('setActiveSection', setActiveSection);
	setContext('activeSection', activeSection);
</script>

<div class="text-2xl gap-4 flex flex-col font-genSans font-semibold text-dark2 ">
	<Accordion>
		<AccordionSection title="Who am I?">
			<WhoAmI2 />
		</AccordionSection>

		<div class="bg-dark2  h-[0.05rem] my-[0.4rem] mx-[2%]" />

		<AccordionSection title="What can I do for you?">
			<WhatCanIDo />
		</AccordionSection>

		<div class="bg-dark2  h-[0.05rem] my-[0.4rem] mx-[2%]" />

		<AccordionSection title="Example projects">
			<ExampleProjects />
		</AccordionSection>

		<div class="bg-dark2  h-[0.05rem] my-[0.4rem] mx-[2%]" />

	
	</Accordion>
</div>
