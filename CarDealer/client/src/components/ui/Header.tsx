type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return <h2 className='header'>{text}</h2>;
};

export default Header;
