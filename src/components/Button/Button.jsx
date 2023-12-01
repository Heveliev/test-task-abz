import {PrimaryButton} from "./Button.styled";


export const Button = ({type,isActive = true,disabled = false,children ,onClick}) => {
    return (<PrimaryButton disabled={disabled} type={type} $active={isActive} onClick={onClick}>{children}</PrimaryButton>
    );
};
