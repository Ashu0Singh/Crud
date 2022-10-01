import './index.css'
import backArrow from '../../assets/backImage/backArrow.png'
import { useNavigate } from 'react-router-dom'


export default function BoxContainer(props){
    const history = useNavigate();
    return (
        <div className='page'>
            <button className='backMenu' onClick={() => history(-1)}>
                <img src={backArrow} alt='Back Arrow'/>
                <p className='fs-400 fc-white back'>Back</p>
            </button>
            <main className='box-container'>
                {props.children}
            </main>
        </div>
        
    )
}