import createStyledComponent from "./create-styled-component";

// Generic
export const StyledComponent = createStyledComponent("StyledComponent", "div");
export default StyledComponent; // Legacy export

// Text Elements
export const Paragraph = createStyledComponent("Paragraph", "p");
export const HeadingOne = createStyledComponent("HeadingOne", "h1");
export const HeadingTwo = createStyledComponent("HeadingTwo", "h2");
export const HeadingThree = createStyledComponent("HeadingThree", "h3");
export const HeadingFour = createStyledComponent("HeadingFour", "h4");
export const HeadingFive = createStyledComponent("HeadingFive", "h5");
export const HeadingSix = createStyledComponent("HeadingSix", "h6");
export const UnorderedList = createStyledComponent("UnorderedList", "ul");
export const OrderedList = createStyledComponent("OrderedList", "ol");
export const Form = createStyledComponent("Form", "form");

// Inline Elements
export const Anchor = createStyledComponent("Anchor", "a");
export const Button = createStyledComponent("Button", "button");
export const Input = createStyledComponent("Input", "input");
export const Select = createStyledComponent("Select", "select");
export const Textarea = createStyledComponent("Textarea", "textarea");
export const Label = createStyledComponent("Label", "label");
export const Span = createStyledComponent("Span", "span");
export const Emphasis = createStyledComponent("Emphasis", "em");
export const Strong = createStyledComponent("Strong", "strong");

// Block Elements
export const Main = createStyledComponent("Main", "main");
export const Nav = createStyledComponent("Nav", "nav");
export const Header = createStyledComponent("Header", "header");
export const Footer = createStyledComponent("Footer", "footer");
export const Aside = createStyledComponent("Aside", "aside");
export const Division = createStyledComponent("Division", "div");
