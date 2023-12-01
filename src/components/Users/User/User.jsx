import user from "../../../assets/user.svg";
import {formatPhoneNumber} from "../../../helpers";
import {ItemUser,Image,Text,Name} from "./User.styled";

export const User = ({id,name,email,phone,position,photo}) => {

    return (<ItemUser key={id} id={id}>
        <Image src={photo || user} alt={`photo ${name}`}/>
        <Name>{name}</Name>
        <div>
            <Text>{position}</Text>
            <Text>{email}</Text>
            <Text>{formatPhoneNumber(phone)}</Text>
        </div>
    </ItemUser>)
}