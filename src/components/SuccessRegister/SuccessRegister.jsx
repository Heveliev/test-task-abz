import success from "../../assets/success.svg";
import {Box, Image, Title} from "./SuccessRegister.styled";

export const SuccessRegister = () => {

    return (<Box>
    <Title>User successfully registered</Title>
        <Image src={success} alt="User successfully registered"/>
    </Box>)

}