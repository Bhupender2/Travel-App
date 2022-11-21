import {Store} from "../Store.js";
import TravelMenu from "./TravelMenu.jsx";

function Card(){
    return(
    <>
        <div className="my-[5rem]">
            <div className="font-['poppins'] font-bold text-[36px] text-center">Popular Destinations</div>
            <div className="font-['poppins']  text-center text-[#8D9199] ">Best offers trips from us</div>
        </div>
        <div className="Card_Section grid grid-cols-3 px-[10rem] gap-8 ">
        {
            Store.map((currval)=>{
                return(<TravelMenu  data={currval}/>);
        })}
     </div>
    </>

    );
}

export default Card;