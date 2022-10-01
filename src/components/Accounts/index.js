import React, { useState,useEffect } from 'react'
import { db }  from '../Firebase/firebase';
import { collection , getDocs } from '@firebase/firestore'
import BoxContainer from '../BoxContainer';

export default function Accounts() {
    const [users , setUsers] = useState([
        <div style={{textAlign : "center"}}>
            <p className='fs-400 fc-offWhite'>Fetching User Data</p>
        </div>
    ]);
    

    useEffect(() => {
        const userCollectionRef = collection(db , 'users');
        const getUserDetails = async () => {
            const data = await getDocs(userCollectionRef);
            const userDetails = data.docs.map(
                details => {
                    const {firstName , lastName , email , password} = details.data();
                    return (
                        <div style={{textAlign : "center"}} key={details.id}>
                            <p className='fs-400 fc-white'>Name     : {`${firstName} ${lastName}`}</p>
                            <p className='fs-300 fc-offWhite'>Email    : {email}</p>
                            <p className='fs-300 fc-offWhite'>Password : {password}</p>
                            <br />
                        </div>
                    )
                }
            );

            setUsers(userDetails);
        }

        getUserDetails()
    }, []);
    return (
        <BoxContainer>
            <h1 style={{textAlign : "center"}} className='fs-600 fc-white'>User Details</h1>
            <p>{users}</p>
        </BoxContainer>
    )
}
