

//Fetching API FOR employer_Subscription_Plan


fetch('https://api.thebackpackerlist.com.au/api/employer/subscription/plan')
.then(data => {
   // console.log(data);

    return data.json();
}).then((arrayData) =>{                 //name of the array made-->arrayData
   // console.log(arrayData[2].price)
    
   let data1=""

   arrayData.employerSubscriptionPlan.map((values) => {
    data1+=  `       
    <div class="col-lg-6">
    <div class="container-fluid>
        <div class="row" >
            <div class="col-12 shadow-lg mt-4 py-3 px-4 pay_card txt-align" >
            <h4 class="prem">${values.subscriptionPlanName}  PACK</h4>
            <div class = "container">
                <div class = "row">

                    <div class = "col-lg-12 txt-align" >
                       <p style="font-size: 16px">$ ${values.price}</p>
                        </div>
                    <div class = "col-lg-12 txt-align">
                      <p style =  "font-size:16px">${values.tenure} Days </p>
                       </div>
                  </div>
               </div>


            <div>
               <button class="px-2 pay_btn_yellow">Buy Now</button>
               </div>

            </div>
        </div>
    </div>
  </div>  `
           
   });

   document.getElementById("fetch_data1").innerHTML = data1;
}).catch(error =>{
    console.log(error);
})









// Fetching another API for the Backpacker_Subscription_Plan


fetch('https://api.thebackpackerlist.com.au/api/backpacker/subscription/plan')
.then(data => {
   // console.log(data);

    return data.json();
}).then((arrayData) =>{
   // console.log(arrayData[2].price)
    
   let data1=""

   arrayData.backpackerSubscriptionPlan.map((values) => {
    data1+=  `  
    
    <div class="col-lg-6">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 shadow-lg mt-4 py-3 px-4 pay_card txt-align">
            <h4 class="prem">${values.subscriptionPlanName}  PACK</h4>
            <div class = "container">
                <div class = "row">

                    <div class = "col-lg-12 txt-align" >
                       <p style="font-size: 16px">$ ${values.price}</p>
                        </div>
                    <div class = "col-lg-12 txt-align">
                      <p style =  "font-size:16px">${values.tenure} Days </p>
                       </div>
                  </div>
               </div>


            <div>
               <button class="px-2 pay_btn_yellow">Buy Now</button>
               </div>

            </div>
        </div>
    </div>
  </div>  `
                          
   });

   document.getElementById("fetch_data").innerHTML = data1;
}).catch(error =>{
    console.log(error);
})





//Fetching API for Current_Balance Box

fetch('https://api.thebackpackerlist.com.au/api/subscription/wallet/employer/balance?employerId_fk=43095')
.then(data =>{
    console.log(data);
    return data.json();
}).then((arrayData) =>{
    //console.log('arrayData[0].remain_balance')

    let data1 = ""

    arrayData.balance.map((values) =>{
        data1+= `
        <div id="img-wallet">
        <img id="wallet" src="wallet.png" style="width:100px;" alt="" >
    </div>

    <div class="currentBalance">
        <h2 style="text-align:center; ">Current Balance</h2>
        <div class="coin-balance">
            <div class="coins"><img id="coin" src="coins.png" alt="coins" style="height: 55px; width: 55px ;">
            </div>
                
         <div id="cost"><h3 style="font-size: 50px; padding-left:10px"> $${values.added_balance}</h3></div>
        </div>   
    </div>

    <div class="container-fluid mt-4 py-3 px-4 pay_card txt-align" id="accnt">
          <div class= "row">
             <div class= "col-lg-12 txt-align">
             <h3 style="text-align:center txt-align">Account Details</h3>
                 </div>
                 <div class= "col-lg-12 txt-align">
                 <h4 class="txt-align" style="font-size:20px; margin-top:10px">Transaction $${values.transaction_balance}</h4>
                 </div>
                 <div class= "col-lg-12 txt-align">
                 <h4 class="txt-align" style="font-size:20px">Remaining Balance $${values.remain_balance}</h4>
                 </div>
            </div>
        </div>      
        `
    });

    document.getElementById("box-content").innerHTML = data1
})


//Fetching API for History_plan_box Of Employer

fetch('https://api.thebackpackerlist.com.au/api/subscription/wallet/history?employerId_fk=43095')
.then(data =>{
    console.log(data);
    return data.json();
}).then((arrayData) =>{

    let data1 = ""
    arrayData.history.map((values)=>{
        data1+=
        `
         
                                                <div class="col-12 shadow-lg mt-4 py-3 px-4 pay_card position-relative">
                                                    <div style="position:absolute; right:40px; top:15px;" class="bg-success text-white px-3 py-1">Success</div>
                                                   <div class="container-fluid">
                                                       <div class="row">
                                                           <div class="col-12">
                                                               <p class="shortMessage">Purchase Details</p>
                                                           </div>
                                                           <div class="col-lg-6">
                                                            <h4  class="p-0 m-0">Subscription type </h4>
                                                             <p class="p-0 m-0">Premium</p>
                                                           </div>
            
                                                           <div class="col-lg-6">
                                                            <h4  class="p-0 m-0">Paypal account details</h4>
                                                             <p class="p-0 m-0">sanchit@gmail.com</p>
                                                             <p class="p-0 m-0">amount: $${values.amount}</p>
                                                           </div>
            
                                                           <div class="col-lg-6 mt-2">
                                                            <h4  class="p-0 m-0">Date of purchase </h4>
                                                             <p class="p-0 m-0">${values.startDate}</p>
                                                           </div>
            
                                                           <div class="col-lg-6 mt-2">
                                                            <h4  class="p-0 m-0">Expires on</h4>
                                                             <p class="p-0 m-0">${values.endDate}</p>
                                                           </div>   
                                                       </div>
                                                   </div>
                                                </div>
        `
    });

    document.getElementById('history_fetch').innerHTML = data1
})