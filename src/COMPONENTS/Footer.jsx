import logoo from "../images/logoo.png";

function Footer(){
    return(
       <div className="h-[25rem] bg-black mt-[5rem] flex justify-around items-center px-[10rem] ">
            <div className="h-[60%]  w-[32%] flex flex-col ">
                <div className="font-['Poppins'] font-bold text-2xl text-white mb-[5px]">GTour</div>
                <div className="text-base font-semibold text-white mt-[1rem]">A good plus of traveling is that often you get new skills without difficulty and without even noticing it.</div>
                <div className="mt-[2rem]">
                    <img src={logoo} alt="logo_image12"></img>
                </div>
            </div>
            <div className="h-[60%]  w-[32%] text-white">
                <div className="font-['Poppins'] font-bold text-xl h-[18%]">Contacts</div>
                    <div className="flex h-[18%]">
                        <span className="material-symbols-outlined">phone_iphone</span>
                        <div className="font-['Poppins'] text-l">123-456-78901</div>
                    </div>
                <div className="flex h-[18%]">
                        <span className="material-symbols-outlined">location_on</span>
                        <div className="font-['Poppins'] text-l">London, 51 Street, 43</div>
                </div>
                <div className="flex h-[18%]">
                <span className="material-symbols-outlined">schedule</span>
                <div className="font-['Poppins'] text-l">Mon - Sat 8.00 - 18.00</div>
                </div>
                <div className="flex h-[28%]">
                   
                    <a className="h-[3rem] w-[3rem]" href="https://twitter.com/mobirise"><img className="h-full w-full object-contain" src="https://img.icons8.com/color/512/twitter--v3.png" alt="logo_image"></img></a>
                    <a className="h-[3rem] w-[3rem]" href="https://www.facebook.com/Mobirise"><img className="h-full w-full object-contain" src="https://img.icons8.com/fluency/512/facebook-new.png" alt="logo_image"></img></a>
                    <a className="h-[3rem] w-[3rem]" href="https://www.google.com/travel/"><img  className="h-full w-full object-contain" src="https://img.icons8.com/color/512/google-logo.png" alt="logo_image"></img></a>
                    <a className="h-[3rem] w-[3rem]" href="https://www.instagram.com/mobirise/"><img className="h-full w-full object-contain" src="https://img.icons8.com/color/512/skype--v3.png" alt="logo_image"></img></a>
                    <a className="h-[3rem] w-[3rem]" href="https://www.instagram.com/travel/?hl=en"><img className="h-full w-full object-contain" src="https://img.icons8.com/color/512/instagram-new.png" alt="logo_image"></img></a>
                </div>
            </div>
            <div className="h-[60%]  w-[32%] text-white p-[20px] mb-[50px]">
                <div className="font-['Poppins'] font-bold text-xl mb-[4px]">Recent Trips</div>
                <div className="grid grid-cols-3 gap-2 h-[60%] w-[85%]">
                    <img className="rounded-md h-[100%] w-[100%] object-cover" src="https://mobirise.com/extensions/travelm4/assets/images/010.jpg" alt="scenary"></img>
                    <img className="rounded-md h-[100%]  w-[100%] object-cover" src="https://mobirise.com/extensions/travelm4/assets/images/021.jpg" alt="scenary"></img>
                    <img className="rounded-md h-[100%] w-[100%] object-cover" src="https://mobirise.com/extensions/travelm4/assets/images/032.jpg" alt="scenary"></img>
                    <img className="rounded-md h-[100%] w-[100%] object-cover" src="https://mobirise.com/extensions/travelm4/assets/images/043.jpg" alt="scenary"></img>
                    <img className="rounded-md h-[100%] w-[100%] object-cover" src="https://mobirise.com/extensions/travelm4/assets/images/054.jpg" alt="scenary"></img>
                    <img className="rounded-md h-[100%] w-[100%] object-cover" src="https://mobirise.com/extensions/travelm4/assets/images/065.jpg" alt="scenary"></img>
                </div>
            </div>
       </div>
    );
}
export default Footer;