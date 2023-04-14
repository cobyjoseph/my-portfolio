<script>
	import { setContext } from 'svelte';
	import Accordion from '../accordion-contents/Accordion.svelte';
	import AccordionSection from '../accordion-contents/AccordionSection.svelte'
	import WhoAmI from '$lib/components/accordion-contents/WhoAmI.svelte';

	let activeSection;

	function setActiveSection(title) {
		activeSection = title;
	}

	setContext('setActiveSection', setActiveSection);
</script>

<div class="text-2xl gap-4 flex flex-col font-genSans font-semibold text-dark2 ">
	<Accordion>
		<AccordionSection title="Who am I?">
			<WhoAmI />
		</AccordionSection>

		<div class="bg-dark2 w-full h-[0.05rem] my-[0.4rem]" />

		<AccordionSection title="What can I do for you?">
			<p>Content for Section 2.</p>
		</AccordionSection>

		<div class="bg-dark2 w-full h-[0.05rem] my-[0.4rem]" />

		<AccordionSection title="Example projects">
			<p>Content for Section 3.</p>
		</AccordionSection>

		<div class="bg-dark2 w-full h-[0.05rem] my-[0.4rem]" />

		<AccordionSection title="Let's chat">
			<p>Content for Section 3.</p>
		</AccordionSection>
	</Accordion>
</div>
