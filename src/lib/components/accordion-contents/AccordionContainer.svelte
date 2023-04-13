<script>
	import { setContext } from 'svelte';
	import Accordion from './Accordion.svelte';
	import AccordionSection from '../sections/AccordionSection.svelte';

	let activeSection;

	function setActiveSection(title) {
		activeSection = title;
	}

	setContext('setActiveSection', setActiveSection);
</script>

<div class="text-3xl gap-4 flex flex-col font-satoshi font-semibold text-dark2">
	<Accordion>
		<AccordionSection title="Who am I?">
			<p>Content for Section 1.</p>
		</AccordionSection>
		<AccordionSection title="What do I do?">
			<p>Content for Section 2.</p>
		</AccordionSection>
		<AccordionSection title="Example work">
			<p>Content for Section 3.</p>
		</AccordionSection>
	</Accordion>
	<AccordionSection title="Let's chat">
		<p>Content for Section 3.</p>
	</AccordionSection>
</div>
