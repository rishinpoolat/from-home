import {FaTrash} from 'react-icons/fa'
import {MdModeEditOutline} from "react-icons/md"

import './product.css'

const Product = () => {

    const imgg1 ="https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

  return (
    <div className='product br df jc-sb ai-c'>
        <img  className='product-img br' src={imgg1}   alt="cake-img" />
        <span>name</span>
        <div>
            <MdModeEditOutline  className='product-icons'/>
            <FaTrash className='product-icons'/>
        </div>
    
    </div>
  )
}

export default Product