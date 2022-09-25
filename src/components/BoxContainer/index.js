import './index.css'
import backArrow from '../../assets/backImage/backArrow.png'

export default function BoxContainer(props){
    return (
        <div className='page'>
            <button className='backMenu'>
                <img src={backArrow} alt='Back Arrow'/>
                <p className='fs-400 fc-white back'>Back</p>
            </button>
            <main className='box-container'>
                {props.children}
            </main>
        </div>
        
    )
}