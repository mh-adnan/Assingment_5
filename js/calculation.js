let main_balance = parseFloat(document.getElementById('starting-balance').innerHTML)



// for new_khali



document.getElementById('new_khali_donate_now').addEventListener('click', function(event) {
    event.preventDefault();

    const donation_amount = getBalanceFromInput('new_khali_amount');

    if (!donation_amount || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance ) {
        alert("Please enter a valid donation amount");
        return;
    }

    main_balance -= donation_amount;
    document.getElementById('starting-balance').innerText = main_balance.toFixed(2);

    let current_balance_of_new_khali = parseFloat(document.getElementById('update_balance_of_new_khali').innerText);
    current_balance_of_new_khali += donation_amount;
    document.getElementById('update_balance_of_new_khali').innerText = current_balance_of_new_khali.toFixed(2);

     document.getElementById('moda_popup').classList.remove('hidden');
     document.getElementById('my_modal_3').showModal();

});





// for feni


document.getElementById('feni_donate_now').addEventListener('click', function(event) {
    event.preventDefault();

    const donation_amount = getBalanceFromInput('feni_amount');

    if (!donation_amount || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance ) {
        alert("Please enter a valid donation amount");
        return;
    }

    main_balance -= donation_amount;
    document.getElementById('starting-balance').innerText = main_balance.toFixed(2);

    let current_balance_of_feni = parseFloat(document.getElementById('update_balance_of_feni').innerText);
    current_balance_of_feni += donation_amount;
    document.getElementById('update_balance_of_feni').innerText = current_balance_of_feni.toFixed(2);

    document.getElementById('moda_popup').classList.remove('hidden');
    document.getElementById('my_modal_3').showModal();

});


// for quota
document.getElementById('quota_donate_now').addEventListener('click', function(event) {
    event.preventDefault();

    const donation_amount = getBalanceFromInput('quota_amount');

     if (!donation_amount || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance ) {
        alert("Please enter a valid donation amount");
        return;
    }

    main_balance -= donation_amount;
    document.getElementById('starting-balance').innerText = main_balance.toFixed(2);

    let current_balance_of_quota = parseFloat(document.getElementById('update_balance_of_quota').innerText);
    current_balance_of_quota += donation_amount;
    document.getElementById('update_balance_of_quota').innerText = current_balance_of_quota.toFixed(2);

    document.getElementById('moda_popup').classList.remove('hidden');
    document.getElementById('my_modal_3').showModal();

});


