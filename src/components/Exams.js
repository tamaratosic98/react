
import Exam from './Exam'
const Exams = ({ exams, onDelete, onToggle }) => {
    
    return (
        <>
            {exams.map((exam)=>(
                <Exam key={exam.id} 
                      exam={exam} 
                      onDelete={onDelete}
                      onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Exams
