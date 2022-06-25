import './newProduct.css'

const NewProduct = () => {
  return (
    <div className='newproduct df ai-c jcc'>
      <div className='newproduct-container br df ai-c fd-c'>
        <h2>product details</h2>
        <form className='df ai-c fd-c'>
          <input className='input' type="text" placeholder='name of the product'/>
          <input className='input' type="number" placeholder='price'/>
          <input className='input' type="text" placeholder='description'/>
          <input type='file'/>
        </form>
        <button className='active-button'>add product</button>
      </div>
    </div>
  )
}

export default NewProduct