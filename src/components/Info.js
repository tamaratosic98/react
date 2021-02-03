import {Link} from 'react-router-dom'//da se ne refresh-uje
const Info = () => {
    return (
        <div>
            <h3>Faculty of Organizational Sciences</h3>
            <small>Jove Ilića 154, 11000 Belgrade, Serbia</small>
            <p>The Faculty of Organizational Sciences (FOS) was founded in 1969 
                at the request of a large number of enterprises, with the aim to 
                strengthen the economy by the precious latest knowledge in the field 
                of organization, management and information systems. 
                The Council of the University of Belgrade, at its meeting held on 28 
                November 1970, reached decision to include the Faculty of Organizational 
                Sciences in the frame of the University of Belgrade. The Faculty of 
                Organizational Sciences in Belgrade (FOS) was officially opened on 4 November 1971, 
                and on 8 November of the same year it started teaching the first generation of students 
                enrolled in the first and third year.</p>
            <Link to='/'>Go back to your exams</Link>
        </div>
    )
}

export default Info
