import logo from "../../assets/logo/logo.svg";
import {Box,ButtonBox} from "./Header.styled";
import {Button} from "../Button";
import {Link} from "../Link";



export const Header = () => {


    return (
        <header>
        <Box>
            <img src={logo} alt="Logo" />
            <ButtonBox>
                <Button type="button"><Link href="#users"  text="Users"/></Button>
                <Button type="button"><Link href="#singup" text="Sign up"/></Button>
            </ButtonBox>
        </Box></header>);
};