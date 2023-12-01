import {BallTriangle} from "react-loader-spinner";
import {SpinnerBox} from "./Spinner.styled";


export const Spinner = () => {

    return (<SpinnerBox>
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
        />
    </SpinnerBox>)
}