
function TravelMenu(props){
    return(
       <>
        <div className="h-[25rem] bg-[#FDF0E0] w-full hover:drop-shadow-[0_22px_40px_rgb(0,0,0,0.20)]  group hover:-translate-y-2 hover:ease-in-out hover:duration-500 cursor-pointer">
            <div className="h-[70%] bg-red-300  relative ">
                <img className="object-cover h-full" src={props.data.image} alt="image_of_country"></img> 
              <div className="absolute left-0 bottom-[10px] bg-[#FF4A52] font-bold text-base text-white px-[10px] py-[2px] group-hover:scale-150 group-hover:ease-in-out group-hover:duration-500 font-['Poppins']">{props.data.price}</div>
            </div>
            <div className="h-[30%] py-[10px] px-[15px]">
            <div className="font-['Poppins'] font-bold h-[33.3%] text-xl">{props.data.Name}</div>
            <div className="font-['Poppins']  h-[33.3%]">{props.data.Dicription}</div>
            <div className="flex h-[33.3%] justify-between items-center ">
              <div className="flex justify-start items-center">
              <div className="text-red-500  ">
                   <ul class="flex justify-center ">
               <li>
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4  mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                   <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                 </svg>
               </li>
               <li>
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4  mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                   <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                 </svg>
               </li>
               <li>
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4  mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                   <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                 </svg>
               </li>
               <li>
                 <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4  mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                   <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                 </svg>
               </li>
               <li>
                 <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                   <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                 </svg>
               </li>
                   </ul>
              
               </div>
               <div className="font-['Poppins'] w-[1rem]  text-xs font-semibold ml-[4px] "> 4reviews</div>
              </div>
              <div className="flex justify-end items-center">
              <span className="material-symbols-outlined mr-[2px] ">schedule</span>
              <div className="text-xs font-semibold"> 2 days</div>
              </div>
                
              
               </div>
               </div>
        </div>
       </>
    );
}
 export default   TravelMenu;