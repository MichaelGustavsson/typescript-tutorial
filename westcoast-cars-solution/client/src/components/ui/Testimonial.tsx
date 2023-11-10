import { type FC, ReactNode } from 'react';

type TestimonialProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

const Testimonial: FC<TestimonialProps> = ({ image, children }) => {
  return (
    <section>
      {/* <img src={image.src} alt={image.alt}/> */}
      <img {...image} />
      {children}
    </section>
  );
};

export default Testimonial;
