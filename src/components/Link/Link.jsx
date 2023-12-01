import {LinkStyle} from "./Link.styled";



export const Link = ({href,isActive = true,text}) =>{
    return (<LinkStyle href={href}  $active={isActive}>{text}</LinkStyle>)
}
