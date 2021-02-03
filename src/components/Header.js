//import React from 'react'
import PropTypes from 'prop-types'//impt precica
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
    // const onClick=()=>{
    //     console.log('click')
    // }
    //moze da pise i props bez zagrada
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAdd?'Close':'Add'} onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps={
    title: 'Exam Planer'
    //ovo je default, kada bismo mu prosledili sa neke druge strane
    //onda bi se prikazalo nesto drugo
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}
// const headingStyle ={
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header
//rafce precica i enter
//kada prosledjujemo broj ide u {broj}