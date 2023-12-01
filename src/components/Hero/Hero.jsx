import {Button} from "../Button";
import {Link} from "../Link";
import {HeroSection,MainTitle,HeroInfo,BoxImage} from "./Hero.styled";

export const Hero = () => {

    return (<HeroSection >
        <BoxImage>
            <MainTitle>Test assignment for front-end developer</MainTitle>
            <HeroInfo>What defines a good front-end developer is one that has skilled knowledge
                of HTML, CSS, JS with a vast understanding of User design thinking as they'll
                be building web interfaces with accessibility in mind. They should also be excited
                to learn, as the world of Front-End Development keeps evolving.</HeroInfo>
            <Button type="button"><Link href="#singup"  text="Sign up"/></Button>
        </BoxImage>
    </HeroSection>);
};