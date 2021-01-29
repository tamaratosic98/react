//import React from 'react'
import PropTypes from 'prop-types'//impt precica
const Header = ({title}) => {
    //moze da pise i props bez zagrada
    return (
        <header>
            <h1>{title}</h1>
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
export default Header
//rafce precica i enter
//kada prosledjujemo broj ide u {broj}