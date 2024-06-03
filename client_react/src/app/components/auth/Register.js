
import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { Dropdown } from 'primereact/dropdown';
// import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
// import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { InputNumber } from 'primereact/inputnumber';
import { useNavigate } from "react-router-dom"
import { setToken } from "./authSlice";
import { useDispatch } from "react-redux";
import { useRegisterCustomerMutation, useRegisterChefMutation } from './authApiSlice';
import { FileUpload } from 'primereact/fileupload';


export default function Register(prop) {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [selectedPicture, setSelectedPicture] = useState(null);
    const [registerFunc, { isError, isSuccess, isLoading, data, error }] = useRegisterCustomerMutation();
    const [registerFuncC, { isErrorC, isSuccessC, isLoadingC, dataC, errorC }] = useRegisterChefMutation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (isSuccess) {
            console.log(`data ${data.error}`);
            dispatch(setToken(data));
            setShowMessage(true);
            navigate(`/chooseCountry`)
        }
    }, [isSuccess])
    useEffect(() => {
        if (isSuccessC) {
            console.log(`data ${dataC.error}`);
            dispatch(setToken(dataC));
            setShowMessage(true);
            navigate(`/`)

        }
    }, [isSuccessC, dataC])
    useEffect(() => {
     console.log(error?.data?.message);
    }, [isError, isErrorC])

    const validate = (data) => {
        let errors = {};
        // if(isError){
        //     if(error?.data?.message=="Duplicate name"){
        //         errors.name = 'Duplicate name'
        //     }
        // }

        if (!data.name) {
            errors.name = 'Name is required.';
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email) && data.email) {
            errors.email = 'Invalid email address. E.g. example@email.com';
        }

        if (!data.password) {
            errors.password = 'Password is required.';
        }
        if (!selectedPicture && prop.role == "chef") {
            errors.picture = 'Picture is required.'
        }

        return errors;
    };

    const onSubmit = (data, form) => {
        setFormData(data);
        if (prop.role == "customer") {
            console.log("if");
            registerFunc(data)
        }
        else {
            console.log("else");
            const formDataChef = new FormData();
            formDataChef.append("name", data.name);
            formDataChef.append("password", data.password);
            formDataChef.append("phone", data.phone);
            formDataChef.append("email", data.email);
            formDataChef.append("picture", selectedPicture);
            registerFuncC(formDataChef);

        }

       
        form.restart();
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--yellow-500)' }}></i>
                    <h5>ההרשמה בוצעה</h5>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', phone:''}} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="name" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Name*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="email" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Password*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="phone" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <InputText id="phone" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Phone</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            {prop.role == "chef" && <Field name="picture" render={({ input, meta }) => (
                                <div className="field">
                                    <FileUpload name="demo[]" auto accept="image/*" maxFileSize={1000000000000000} emptyTemplate={<p className="m-0">upload picture</p>}
                                        uploadLabel='&nbsp;העלאה' cancelLabel='&nbsp;ביטול' chooseLabel='choose &nbsp;'
                                        customUpload uploadHandler={(e) => setSelectedPicture(e.files[0])} />


                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />}


                            <Button type="submit" label="Submit" className="mt-2" />
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}