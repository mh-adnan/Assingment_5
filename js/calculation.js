let main_balance = parseFloat(document.getElementById('starting-balance').innerHTML)



// for new_khali
document.getElementById('new_khali_donate_now').addEventListener('click', function(event) {
    event.preventDefault();

    const donation_amount = getBalanceFromInput('new_khali_amount');


    let main_balance = parseFloat(document.getElementById('starting-balance').innerHTML)
    main_balance = main_balance-donation_amount;
    document.getElementById('starting-balance').innerText =main_balance.toFixed(2);


    let current_balance_of_new_khali = parseFloat(document.getElementById('update_balance_of_new_khali').innerHTML)
    console.log("new khali curretn :", current_balance_of_new_khali);
    current_balance_of_new_khali = current_balance_of_new_khali+donation_amount;
    document.getElementById('update_balance_of_new_khali').innerText =current_balance_of_new_khali.toFixed(2);

});


// for feni
document.getElementById('feni_donate_now').addEventListener('click', function(event) {
    event.preventDefault();

    const donation_amount = getBalanceFromInput('feni_amount');


    let main_balance = parseFloat(document.getElementById('starting-balance').innerHTML)
    main_balance = main_balance-donation_amount;
    document.getElementById('starting-balance').innerText =main_balance.toFixed(2);


    let current_balance_of_feni = parseFloat(document.getElementById('update_balance_of_feni').innerHTML)
    console.log("new khali curretn :", current_balance_of_feni);
    current_balance_of_feni = current_balance_of_feni+donation_amount;
    document.getElementById('update_balance_of_feni').innerText =current_balance_of_feni.toFixed(2);

});


// for quota
document.getElementById('quota_donate_now').addEventListener('click', function(event) {
    event.preventDefault();

    const donation_amount = getBalanceFromInput('quota_amount');


    let main_balance = parseFloat(document.getElementById('starting-balance').innerHTML)
    main_balance = main_balance-donation_amount;
    document.getElementById('starting-balance').innerText =main_balance.toFixed(2);


    let current_balance_of_quota = parseFloat(document.getElementById('update_balance_of_quota').innerHTML)
    current_balance_of_quota = current_balance_of_quota+donation_amount;
    document.getElementById('update_balance_of_quota').innerText =current_balance_of_quota.toFixed(2);

});

