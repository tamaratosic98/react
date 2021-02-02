//import logo from './logo.svg';//spinning react logo
//import './App.css';
import Header from './components/Header'
import Exams from './components/Exams'
import { useState } from 'react'
function App() {
  const name='Tamara'
  const x=false
  const [exams, setExams]=useState(
    [
        {
            id:1,
            text:'Java Programming',
            espb:6,
            day: 'Feb 14th at 2:30pm',
            reminder: true,
        },
        {
            id:2,
            text:'Statistics',
            espb:4,
            day: 'Feb 23th at 3:30pm',
            reminder: true,
        },
        {
            id:3,
            text:'Science',
            espb:5,
            day: 'Feb 28th at 4:30pm',
            reminder: false,
        }
    ])
//Delete exam 
const deleteExam=(id)=>{
  //console.log('delete',id);
  setExams(exams.filter((task)=>task.id!==id))
  //prikazujemo sve osim tog koji zelimo da obrisemo
}
//Toggle Reminder
const toggleReminder=(id)=>{
  // console.log(id);
  setExams(exams.map(
    (exam)=>exam.id===id ? 
      {...exam, reminder:!exam.reminder}
      :exam
    ))
}
  return (
    <div className="container">
      <Header />

      {exams.length > 0 ? 
          <Exams  exams={exams} 
                  onDelete={deleteExam} 
                  onToggle={toggleReminder}/> 
          : <h3>No Exams to show</h3>}
    </div>
  );
}

export default App;
