// For New Khali
document.getElementById('new_khali_donate_now').addEventListener('click', function(event) {
    event.preventDefault();
    const donation_amount = getBalanceFromInput('new_khali_amount');
    if (typeof(donation_amount) !== 'number' || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance) {
        alert("Please enter a valid donation amount");
        return;
    }
    createDonationBox(donation_amount, 'Flood at Noakhali, Bangladesh');
});

// For Feni
document.getElementById('feni_donate_now').addEventListener('click', function(event) {
    event.preventDefault();
    const donation_amount = getBalanceFromInput('feni_amount');
    if (typeof(donation_amount) !== 'number' || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance) {
        alert("Please enter a valid donation amount");
        return;
    }
    createDonationBox(donation_amount, 'Flood Relief in Feni, Bangladesh');
});

// For Quota
document.getElementById('quota_donate_now').addEventListener('click', function(event) {
    event.preventDefault();
    const donation_amount = getBalanceFromInput('quota_amount');
    if (typeof(donation_amount) !== 'number' || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance) {
        alert("Please enter a valid donation amount");
        return;
    }
    createDonationBox(donation_amount, 'Aid For Injured in the Quota Movement');
});
