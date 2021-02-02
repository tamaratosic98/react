import React from 'react'
import {FaTimes} from 'react-icons/fa'//font awesome
const Exam = ({exam, onDelete, onToggle}) => {
    return (
        <div className={`exam ${exam.reminder ?  'reminder' :''}`}
             onDoubleClick={()=>onToggle(exam.id)}>
            <h3>{exam.text}
                <FaTimes style={{cursor:'pointer'}} 
                         onClick={()=>onDelete(exam.id)}
                />
            </h3>
            <p>{exam.day}</p>
        </div>
    )
}

export default Exam


