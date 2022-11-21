function Ques_section(){
    return(
      <div className="px-[10rem]">
      <div className="font-['poppins'] text-center text-[2rem] font-bold mb-[3rem]">Frequently Asked Questions</div>
        <div class="accordion grid grid-cols-2 gap-2 ">

          <div class="w-full">
            <input type="checkbox" name="panel" id="panel-1" class="hidden"/>
            <label for="panel-1" class="relative block bg-[#434343] text-white p-4 shadow border-b border-grey">How does KAYAK find such low flight prices?</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter ">
              <h2 class="accordion__header pt-4 pl-4"></h2>
              <p class="accordion__body p-4" id="panel1">KAYAK processes over 2 billion flight queries annually and displays results from hundreds of airlines and third party sites, allowing it to find a variety of flight prices and options. It also displays results from 2M+ properties along with car hire, holiday packages, activities and millions of verified reviews so users can see as many available travel options as possible.</p>
            </div>
          </div>
         
          <div class="w-full">
            <input type="checkbox" name="panel" id="panel-2" class="hidden "/>
            <label for="panel-2" class="relative block bg-[#434343] text-white p-4 shadow border-b border-grey">How can Hacker Fares save me money?


</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter z-10">
              <h2 class="accordion__header pt-4 pl-4"></h2>
              <p class="accordion__body p-4">Hacker Fares allow you to combine one-way tickets on different airlines when it can save you money over a traditional return ticket.</p>
            </div>
          </div>
        
          <div class="w-full">
            <input type="checkbox" name="panel" id="panel-3" class="hidden"/>
            <label for="panel-3" class="relative block bg-[#434343] text-white p-4 shadow border-b border-grey">How does KAYAK's flight Price tool help me choose...</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
              <h2 class="accordion__header pt-4 pl-4"></h2>
              <p class="accordion__body p-4">KAYAK's flight Price Forecast tool uses historical data to determine whether the price for a given destination and date is likely to change within 7 days, so travellers know whether to wait or book now.</p>
            </div>
          </div>

          <div class="w-full">
            <input type="checkbox" name="panel" id="panel-4" class="hidden"/>
            <label for="panel-4" class="relative block bg-[#434343] text-white p-4 shadow border-b border-grey">How do I find the best flight deals on KAYAK?</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter ">
              <h2 class="accordion__header pt-4 pl-4"></h2>
              <p class="accordion__body p-4" id="panel1">A simple flight search at https://www.kayak.co.in/flights scans for prices on hundreds of travel sites in seconds. We gather flight deals from across the web and put them in one place. Then on the search results page you can use various filters to compare options for the same flight and easily choose the best flight deal from all of the deals coming straight from the travel sites to your screen, with no extra fee from KAYAK.</p>
            </div>
          </div>


          <div class="w-full">
            <input type="checkbox" name="panel" id="panel-5" class="hidden"/>
            <label for="panel-5" class="relative block bg-[#434343] text-white p-4 shadow border-b border-grey">Does KAYAK query more flight providers than...</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter ">
              <h2 class="accordion__header pt-4 pl-4"></h2>
              <p class="accordion__body p-4" id="panel1">Yes, KAYAK has access to more data and information than online travel agencies and consistently outperforms the competition in accuracy, globally.</p>
            </div>
          </div>

          <div class="w-full">
            <input type="checkbox" name="panel" id="panel-6" class="hidden"/>
            <label for="panel-6" class="relative block bg-[#434343] text-white p-4 shadow border-b border-grey">What is KAYAK's "flexible dates" feature and why...</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter ">
              <h2 class="accordion__header pt-4 pl-4"></h2>
              <p class="accordion__body p-4" id="panel1">Sometimes travel dates aren't set in stone. If your preferred travel dates have some wiggle room, flexible dates will show you flights up to 3 days before/after your preferred dates. That way, you can see if leaving a day or two earlier will find you a better deal. You can also select the flexible 'weekend' or 'month' search options to widen your search range and find the cheapest price that works for you.</p>
            </div>
          </div>


        </div>
      </div>
      
    );
    }
export default Ques_section;