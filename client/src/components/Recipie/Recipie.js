import React from 'react'

function Recipie() {
  return (
    <div className='recipie'>
      <h3>Have a Cake Recipie? share with us now</h3>
      <form className='recipie-form'>
        <input placeholder='Your Name' type='text'/>
        <input placeholder='Cake Name' type='text'/>
        <input placeholder='Ingredients' />
        <button type='submit'>Share</button>
        
      </form>
    </div>
  )
}

export default Recipie
