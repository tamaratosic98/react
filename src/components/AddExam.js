
import {useState} from 'react'
const AddExam = ({onAdd}) => {
    const [text, setText]=useState('');
    const [day, setDay]=useState('');
    const [espb, setEspb]=useState('');
    const [reminder, setReminder]=useState(false);
    const onSubmit=(e)=>{
        e.preventDefault()//da ne submituje na stranicu
        //e je event objekat
        if(!text){
            alert('Please add the name of your exam.')
            return
        }
        onAdd({text,day,reminder,espb})
        setText('')
        setDay('')
        setEspb('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Exam</label>
                <input type="text" placeholder='Add Exam' 
                       value={text}
                       onChange={(e)=>{setText(e.target.value)}}
                />
            </div>
            <div className='form-control'>
                <label>Day of the Exam</label>
                <input type="text" placeholder='Add Day'
                    value={day}
                    onChange={(e)=>{setDay(e.target.value)}}
                />
            </div>
            <div className='form-control'>
                <label>ESPB</label>
                <input type="text" placeholder='Add ESPB points'
                    value={espb}
                    onChange={(e)=>{setEspb(e.target.value)}}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e)=>{setReminder(e.currentTarget.checked)}}
                />
            </div>

            <input type="submit" value='Save Exam' className='btn btn-block'/>
        </form>
    )
}

export default AddExam
