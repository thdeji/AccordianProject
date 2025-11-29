const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organising and condensing large amounts of information into collapsible sections. Users can click on a title or header to expand and reveal associated content, and collapse it again when finished.",
  },
  {
    id: "2",
    question: "How do I use this data in a React component?",
    answer:
      "You can use the JavaScript array map() method in your React component's JSX to iterate over the `data` array and render an `AccordionItem` component for each object, passing the `question` and `answer` as props.",
  },
  {
    id: "3",
    question: 'What is the purpose of the unique "id" field?',
    answer:
      'The "id" field is essential for React to efficiently manage the list of elements as they are rendered. It serves as a unique `key` prop for each item, which helps React identify which items have changed, been added, or been removed, optimizing the rendering performance.',
  },
  {
    id: "4",
    question: "Can I have multiple accordions open at once?",
    answer:
      'Whether multiple items can be open simultaneously depends on how you manage the state in your React component. By tracking an array of open IDs (instead of a single active ID), you can implement a multi-select or "multiple mode" accordion behavior.',
  },
];

export default data;
