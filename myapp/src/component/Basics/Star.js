import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Star = ({stars, reviews }) => {
    const ratingStar = Array. from ({length: 5 }, (elem, index)=>{
        let number = index + 0.5; 
        return (
            <span key={index}>
                {stars >= index + 1 ? (<FaStar className="Staricon" />) 
                : stars>= number? (<FaStarHalfAlt className="Staricon"/>)
                :(<AiOutlineStar className="Staricon" />)
        }
        </span>
        );
    });

    return (
        <div>
            {/* <div class="star"> */}
            <pre>{reviews} {ratingStar}</pre>
         
        </div>

    )
    }
export default Star;