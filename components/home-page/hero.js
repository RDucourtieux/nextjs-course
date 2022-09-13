import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (<section className={classes.hero}>
    <div className={classes.image}>
      <Image src="/images/site/logo.jpeg"
        alr="An image showing my avatar"
        width={300}
        height={300} />
    </div>
    <h1>Hi, I'm Romain</h1>
    <p>
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </p>
  </section>);

}

export default Hero;
