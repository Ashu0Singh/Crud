import BoxContainer from '../BoxContainer';
import './index.css';
import { useState } from 'react'
import Checked from '../../assets/backImage/Checked.png'
import Unchecked from '../../assets/backImage/Unchecked.png'

export default function SignUp(){
    const [isChecked , setIsChecked] = useState(false);
    return(
        <BoxContainer>
            <main className='signUp'>
                <h1 className='fs-600 fc-white'>Create an account</h1>
                <p className='fs-300 fc-offWhite createAccOff'>Create an account for the CRUD operation</p>

                <input type='text' className='inputFeild' placeholder='First Name'/>
                <input type='text' className='inputFeild' placeholder='Last Name'/>
                <input type='email' className='inputFeild' placeholder='Email'/>
                <input type='password' className='inputFeild' placeholder='Create Password'/>
                <input type='password' className='inputFeild' placeholder='Confirm Password'/>
                
                <section className='flex' style={{"marginTop": "1rem"}}>
                    <img src={isChecked ? Checked : Unchecked} 
                         onClick={() => setIsChecked(val => !val)}
                         alt='Checkbox'
                         className='checkbox'
                    />
                    <p className='fs-300 fc-white'>I agree to Terms & Conditions</p>
                </section>
                
                <button className='button'>Sign Up</button>
                <p className='fs-300 fc-white' style={{"textAlign":"center"}}>Already have an account? <a href='/signin'>Sign in</a></p>
            </main>
        </BoxContainer>
    )

}