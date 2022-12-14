import BoxContainer from '../BoxContainer';
import './index.css';
import {  useState } from 'react'
import Checked from '../../assets/backImage/Checked.png'
import Unchecked from '../../assets/backImage/Unchecked.png'
import { Link , useNavigate } from 'react-router-dom'
import { db } from '../Firebase/firebase';
import { collection ,getDocs, addDoc } from '@firebase/firestore';

export default function SignUp(){
    const navigate = useNavigate();
    const userCollectionRef = collection(db,'users')
    const [userDetails , setUserDetails] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confPassword : '',
        isChecked : false
    });
    const [error , setError] = useState({
                    fNameError:'',
                    emailError:'',
                    passwordError:'',
                    confPassError:''
    });

    let userEmails = [];

    const getUserDetails = async () => {
        const data = await getDocs(userCollectionRef);
        
        const emails = data.docs.map((details) => {

            const {email} = details.data();
            return email;
        })
        userEmails =  emails;
    }

    getUserDetails();

    

    function updateIsChecked({target: {name}}){
        setUserDetails(prevVal => ({...prevVal, [name]: !prevVal[name]}));
    }
    function updateUserDetails({target: {name , value}}){
        setUserDetails(prevVal => ({...prevVal, [name]: value}));
    }

    function submitData(){
        const {firstName,email,password,confPassword} = userDetails;
        let isError = false;
        const errorVal = {
            fNameError : '',
            emailError : '',
            passwordError : '',
            confPassError : ''
        }
        if(firstName === ''){
            errorVal.fNameError = 'Please enter a valid name';
            isError = true;
        }
        else if(email === ''){
            errorVal.emailError = 'Please enter a valid email';
            isError = true;
        }
        else if(password === '' || password.length < 8 ){
            errorVal.passwordError = 'Please enter a valid password';
            isError = true;
        }
        else if(confPassword !== password){
            errorVal.confPassError = `Password doesn't match`;
            isError = true;
        }
        const emailCheck = checkEmail(email,userEmails);
        if(emailCheck){
            errorVal.emailError = 'Email already exists';
            isError = true;
        }
        setError(errorVal);

        if(!isError){
            const createUser = async () => {
                await addDoc(userCollectionRef , userDetails);
            }
            createUser();
        }

        navigate('/Crud/acc');
    }

    const checkEmail = (email , allUsers) => Boolean(allUsers.find(value => value === email));


    return(
        <BoxContainer>
            <main className='signUp'>
                <h1 className='fs-600 fc-white'>Create an account</h1>
                <p className='fs-300 fc-offWhite createAccOff'>Create an account for the CRUD operation</p>

                <input type='text' 
                    className='inputFeild' 
                    placeholder='First Name' 
                    value={userDetails.firstName} 
                    onChange={(event) => updateUserDetails(event)}
                    name="firstName"
                />
                <div className='error'>{error.fNameError}</div>

                <input type='text' 
                    className='inputFeild' 
                    placeholder='Last Name (Optional)' 
                    value={userDetails.lastName}
                    onChange={(event) => updateUserDetails(event)}
                    name="lastName"
                />

                <input type='email' 
                    className='inputFeild' 
                    placeholder='Email' 
                    onChange={(event) => updateUserDetails(event)}
                    name="email"
                />
                <div className='error'>{error.emailError}</div>

                <input type='password' 
                    className='inputFeild' 
                    placeholder='Create Password'
                    onChange={(event) => updateUserDetails(event)}
                    name="password"
                />
                <div className='error'>{error.passwordError}</div>

                <input type='password' 
                    className='inputFeild' 
                    placeholder='Confirm Password'
                    onChange={(event) => updateUserDetails(event)}
                    name="confPassword"/>
                
                <div className='error'>{error.confPassError}</div>

                <section className='flex' style={{"marginTop": "1rem"}}>
                    <img src={userDetails.isChecked ? Checked : Unchecked} 
                         onClick={(event) => updateIsChecked(event)}
                         alt='Checkbox'
                         className='checkbox'
                         name="isChecked"
                    />
                    <p className='fs-300 fc-white'>I agree to Terms & Conditions</p>
                </section>
                
                <button 
                        className='button' 
                        onClick={submitData} 
                        disabled={!userDetails.isChecked}
                        style={userDetails.isChecked ? {'opacity': '1'} : { 'opacity' : '0.5'}}
                >Sign Up</button>
                <p className='fs-300 fc-white' style={{"textAlign":"center"}}>Already have an account? <Link to='/Crud/acc'>Sign in</Link></p>
            </main>
        </BoxContainer>
    )

}