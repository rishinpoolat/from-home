import React from 'react'
import "./shopEdit.css"
export default function ShopEdit() {
    return (
        <div className="df ai-c fd-c"> 
            <h1 className="shopedit-title">shop edit</h1>
            <div className='shopedit-container df ai-c fd-c'>
                <div><input  className="input"placeholder="Name"/><button className="edit-button"><i class="fas edit-pen fa-pen"></i> edit</button></div>
                <div><input  className="input"placeholder="Email"/><button className="edit-button"><i class="fas edit-pen fa-pen"></i> edit</button></div>
                <div><input  className="input"placeholder="Phon No"/><button className="edit-button"><i class="fas edit-pen fa-pen"></i> edit</button></div>
                <div><input  className="input"placeholder="Logo"/><button className="edit-button"><i class="fas edit-pen fa-pen"></i> edit</button></div>
                <div><input  className="input"placeholder="Banner"/><button className="edit-button"><i class="fas edit-pen fa-pen"></i> edit</button></div>
                <div><input  className="input"placeholder="Address"/><button className="edit-button"><i class="fas edit-pen fa-pen"></i> edit</button></div>
                <div><input  className="input"placeholder="Description"/><button className="edit-button"><i class="fas edit-pen fa-pen"></i> edit</button></div>
            </div>

        </div>
    )
}

