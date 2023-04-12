<script>
      import { setContext } from "svelte";
      import Accordion from "./Accordion.svelte";
      import AccordionSection from "./AccordionSection.svelte";
    
      let activeSection;
    
      function setActiveSection(title) {
        activeSection = title;
      }
    
      setContext("setActiveSection", setActiveSection);
    </script>
    
    <Accordion>
      <AccordionSection title="Section 1">
        <p>Content for Section 1.</p>
      </AccordionSection>
      <AccordionSection title="Section 2">
        <p>Content for Section 2.</p>
      </AccordionSection>
      <AccordionSection title="Section 3">
        <p>Content for Section 3.</p>
      </AccordionSection>
    </Accordion>