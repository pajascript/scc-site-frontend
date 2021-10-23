import React, { useState } from "react";
import {EnrollmentContainer,
        EnrollmentWrapper,
        EnrollmentHeading,
        EnrollmentForm,
        ErrorMessage
        } from "./EnrollmentElements";
import VerifyModal from "../../components/VerifyModal";
import { TextField, MenuItem } from "@material-ui/core";
import ButtonComponent from "../../components/Button";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import axios from "axios";


const EnrollmentPage = ({isVerified, setIsVerified}) => {
    
    //States & variables
    const [studentDetails, setStudentDetails] = useState({
        lastname: "",
        firstname: "",
        middlename: "",
        email: "",
        phonenumber: "",
        address: "",
        birthdate: new Date(),
        birthplace: "",
        nationality: "",
        religion: "",
        sex: "",
        yearlevel: "",
        semester: ""
    });

    const [birthdate, setBirthdate] = useState(new Date());
    const [error, setError] = useState(null);
    const [showVerifyModal, setShowVerifyModal] = useState(false);

    //Functions
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('https://stclarecollege.herokuapp.com/enrollment', studentDetails)
            .then((res) => {
                console.log(res)
                setShowVerifyModal(true)
            })
            .catch(err => {
                setError(err.response.data.message);
            })
    }

    const handleBirthdateChange = (date) => {
        const actualDate = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
        const finalDate = actualDate.toString();
        setStudentDetails({...studentDetails, birthdate: finalDate});
        setBirthdate(date)
    }

    const handleChange = (e) => {
        setStudentDetails({...studentDetails, [e.target.name]: e.target.value});
    }

    return (
        <>
            <EnrollmentContainer>
                <EnrollmentWrapper>
                    <EnrollmentHeading>St. Clare College Enrollment Form</EnrollmentHeading>   
                
                    <EnrollmentForm onSubmit={onSubmit} >

                        <TextField name="lastname" value={studentDetails.lastname} onChange={handleChange} style={{ marginTop: 15 }} label="Last Name" variant="outlined" required />
                        
                        <TextField name="firstname" value={studentDetails.firstname} onChange={handleChange} style={{ marginTop: 15 }} label="First Name" variant="outlined" required />
                        
                        <TextField name="middlename" value={studentDetails.middlename} onChange={handleChange} style={{ marginTop: 15 }} label="Middle Name" variant="outlined" required />
                        
                        <TextField name="email" value={studentDetails.email} onChange={handleChange} style={{ marginTop: 15 }} label="E-mail" variant="outlined" required />
                        
                        <TextField name="phonenumber" value={studentDetails.phonenumber} onChange={handleChange} style={{ marginTop: 15 }} label="Phone Number" variant="outlined" required />
                       
                        <TextField name="address" value={studentDetails.address} onChange={handleChange} style={{ marginTop: 15 }} label="Address" variant="outlined" required />
                        
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <KeyboardDatePicker variant="outlined" format="MM/dd/yyyy" label="Date of Birth" style={{marginTop: 15}} value={birthdate} onChange={handleBirthdateChange} KeyboardButtonProps={{"aria-label": "change date"}} required />
                        </MuiPickersUtilsProvider>
                        
                        <TextField name="birthplace" value={studentDetails.birthplace} onChange={handleChange} style={{ marginTop: 15 }} label="Birthplace" variant="outlined" required />
                        
                        <TextField name="nationality" value={studentDetails.nationality} onChange={handleChange} style={{ marginTop: 15 }} label="Nationality" variant="outlined" required />
                        
                        <TextField name="religion" value={studentDetails.religion} onChange={handleChange} style={{ marginTop: 15 }} label="Religion" variant="outlined" required />
                        
                        <TextField name="sex" value={studentDetails.sex} onChange={handleChange} select label="Select Gender" variant="outlined" style={{ marginTop: 15 }} required >
                            <MenuItem key="Male" value="Male" >Male</MenuItem>
                            <MenuItem key="Female" value="Female" >Female</MenuItem>
                        </TextField>

                        <TextField name="yearlevel" value={studentDetails.yearlevel} onChange={handleChange} select label="Year Level" variant="outlined" style={{ marginTop: 15 }} required >
                            <MenuItem key="1st Year" value={'1st Year'} >1st Year</MenuItem>
                            <MenuItem key="2nd Year" value={'2nd Year'} >2nd Year</MenuItem>
                            <MenuItem key="3rd Year" value={'3rd Year'} >3rd Year</MenuItem>
                            <MenuItem key="4th Year" value={'4th Year'} >4th Year</MenuItem>
                        </TextField>

                        <TextField name="semester" value={studentDetails.semester} onChange={handleChange} select label="Select Semester" variant="outlined" style={{ marginTop: 15 }} required>
                            <MenuItem key="1st Sem" value='1st Sem' >1st Sem</MenuItem>
                            <MenuItem key="2nd Sem" value='2nd Sem' >2nd Sem</MenuItem>
                        </TextField>
                        
                        {error && (
                                <ErrorMessage>{error}</ErrorMessage>
                            )}

                        <ButtonComponent>Submit</ButtonComponent>
                    </EnrollmentForm>
                </EnrollmentWrapper>
                {showVerifyModal ? <VerifyModal showVerifyModal={showVerifyModal} setShowVerifyModal={setShowVerifyModal} isVerified={isVerified} setIsVerified={setIsVerified} /> : null}
            </EnrollmentContainer>
        </>
    )
};

export default EnrollmentPage;