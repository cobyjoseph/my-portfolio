<script>
	import { setContext } from 'svelte';
	import Accordion from './accordion-contents/Accordion.svelte';
	import AccordionSection from './accordion-contents/AccordionSection.svelte';
	import WhoAmI from '$lib/components/sections/accordion-contents/WhoAmI.svelte';
	import WhatCanIDo from '$lib/components/sections/accordion-contents/WhatCanIDo.svelte';

	let activeSection;

	function setActiveSection(title) {
		activeSection = title;
	}

	setContext('setActiveSection', setActiveSection);
</script>

<div class="text-2xl gap-4 flex flex-col font-genSans font-semibold text-dark2 pb-10 ">
	<Accordion>
		<AccordionSection title="Who am I?">
			<WhoAmI />
		</AccordionSection>

		<div class="bg-dark2  h-[0.05rem] my-[0.4rem] mx-[2%]" />

		<AccordionSection title="What can I do for you?">
			<WhatCanIDo />
		</AccordionSection>

		<div class="bg-dark2  h-[0.05rem] my-[0.4rem] mx-[2%]" />

		<AccordionSection title="Example projects">
			<p>Content for Section 3.</p>
		</AccordionSection>

		<div class="bg-dark2  h-[0.05rem] my-[0.4rem] mx-[2%]" />

		<AccordionSection title="Let's chat">
			<p>Content for Section 3.</p>
		</AccordionSection>
	</Accordion>
</div>
