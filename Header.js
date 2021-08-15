import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react'

export const Header = ({title, onAdd, showAdd}) => {
    
    
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color= {showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick = 
            {onAdd}  />
            
        </header>
    )
}

Header.defaultProps = {
    title  : 'Work Planner',
}


Header.propTypes = {

    title: PropTypes.string,
}


export default Header

