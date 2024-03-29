type FooterProps = {
  text: string;
};

// Alternativ 1...
// const Footer = (props: FooterProps) => {
//   return (
//     <footer>
//       <p>{props.text}</p>
//     </footer>
//   );
// };

// Alternativ 2...
const Footer = ({ text }: FooterProps) => {
  return (
    <footer>
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
