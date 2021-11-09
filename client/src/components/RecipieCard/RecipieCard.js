import './recipieCard.css';
const addLike = (e) => {
    if(e.target.className === "far fa-thumbs-up"){
      e.target.className = 'fas fa-thumbs-up';
    }else{
      e.target.className = 'far fa-thumbs-up';
    }
      }
const RecipieCard = () => {
    return (
        <div className='recipiecard df fd-c'>
            <header className="recipiecard-header df">
                <div>
                    <img className='recipie-img' src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg?quality=82&strip=1&resize=640%2C360" alt=""/>
                </div>
                <div className='recipie-header-name'>
                    <span className='recipie-user'>@rishin</span>
                    <h3 className="recipiecard-name">Broast</h3>
                </div>
            </header>
            <div className="recipie-body df">
                <div className='recipie-ingridients'> 
                    <h4>Ingrideints</h4>
                    <ul>
                        <li>akkgjhggj</li>
                        <li>gwhwu</li>
                        <li>gwhwu</li>
                        <li>gwhwu</li>
                        <li>gwhwu</li>
                        <li>gwhwu</li>
                    </ul>
                </div>
                <div className='recipie-des'>
                    <h4>Description</h4>
                    <p>lorem5rtyuguygrtyugruygreyufreyrsyurutryrgryffgduhfgyrtyregyrtutrguyergrdugsdggdfyugfeuyg</p>
                </div>
            </div>
            <div className='recipie-bottom'>
                <i onClick={addLike} className="far fa-thumbs-up"></i>
                <span>122 likes</span>
            </div>
            
        </div>
    );
}

export default RecipieCard;