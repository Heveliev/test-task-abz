import {Button} from "../Button/index.js";
import {User} from "./User";
import {UsersSections,Title,ListUsers} from "./Users.styled";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers, getIsLoadingUsers, getUsers} from "../../redux";
import {Spinner} from "../Spinner/index.js";
import {getTotalPages} from "../../redux/users/users-selectors.js";



export const Users = () => {
    const dispatch = useDispatch();

    const users = useSelector(getUsers);
    const totalPages = useSelector(getTotalPages);

    const [page,setPage] = useState(1);

    useEffect(() => {
        dispatch(getAllUsers({page}));

    }, [dispatch,page]);


    const handleClickLoadMore = () => {
        console.log(page)
        setPage(prevState=>prevState + 1);
    }

    return (<> <UsersSections id="users">
        <Title>Working with GET request</Title>
        <ListUsers>

            {users.length ? users.map(({id,
                                           name,
                                           email,
                                           phone,
                                           position,
                                           photo}) => (
                <User key={id} id={id} name={name} email={email} phone={phone} position={position} photo={photo}/>
            )) : ""}
        </ListUsers>
        {page === totalPages ? "" : <Button onClick={handleClickLoadMore} type="button">Show more</Button>}


    </UsersSections></>);
};