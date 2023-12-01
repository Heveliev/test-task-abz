import { Formik, Field  } from 'formik';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {validationSchema} from "./validationSchema.js";
import {initialValues} from "./initialValues.js";
import {
    FormSections,
    FormStyle,
    Input,
    PhoneExample,
    PositionBox,
    PositionTitle,
    Title,
    PositionLabel,
    FileButton,
    FileBox,
    UploadText,
    ButtonBox, ErrorMessageStyle
} from "./SingUpForm.styled.jsx";
import {Button} from "../Button/index.js";

import {addUser, getAllPositions, getAllUsers, getPositions, getSuccess} from "../../redux";
import {SuccessRegister} from "../SuccessRegister/index.js";





export const SingUpForm = () => {
    const [file, setFile] = useState(null);


    const positions = useSelector(getPositions);
    const dispatch = useDispatch();
    const success = useSelector(getSuccess);

    function findIdByName(jobName) {
        const job = positions.find(item => item.name === jobName);
        return job ? job.id : null;
    }

    const onSubmit = (values) => {
        if(!file) {
            return alert("Enter photo!!!");
        };
        const {name,email,phone,position} = values;
        const id = findIdByName(position);
        dispatch(addUser({ name, email, phone, position_id:id, photo:file}));
        success ? dispatch(getAllUsers({page:1,})) :  console.log("Success");

    };

    const handleInputChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    return (
        <FormSections id="singup">
            <Title>Working with POST request</Title>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <FormStyle>
                    <div>
                        <Input type="text" name="name" placeholder="Your name"/>
                        <ErrorMessageStyle name="name" component="div" />
                    </div>
                    <div>
                        <Input type="email" id="email" name="email"  placeholder="Email"/>
                        <ErrorMessageStyle name="phone" component="div" />
                    </div>
                    <div>
                        <Input type="text" id="phone" name="phone" placeholder="Phone"/>
                        <PhoneExample>+38 (XXX) XXX - XX - XX</PhoneExample>
                        <ErrorMessageStyle name="email" component="div" />
                    </div>
                    <PositionBox>
                        <PositionTitle>Select your position</PositionTitle>
                        {positions.length ? positions.map(({id, name}) => (
                            <PositionLabel key={id}>
                                <Field  type="radio" name="position" value={name}/>
                                {name}
                            </PositionLabel>
                           )): ""}
                        <ErrorMessageStyle name="position" component="div" />
                    </PositionBox>

                    <div>
                        <FileBox>
                            {file ? "" :  <UploadText>Upload</UploadText>}

                            <FileButton name="file"
                                        type="file"
                                        onChange={handleInputChange}
                            />
                            <p>{file ? file.name :"Upload your photo"}</p></FileBox>
                        <ErrorMessageStyle  name="file" component="div" />
                    </div>
                    <ButtonBox>
                   <Button type="submit" isActive={false}>Sign up</Button>
                    </ButtonBox>
                </FormStyle>
            </Formik>

            {success ? <SuccessRegister/> : ""}
        </FormSections>
    );
}