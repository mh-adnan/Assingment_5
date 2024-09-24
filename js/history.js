// For new_khali
document.getElementById('new_khali_donate_now').addEventListener('click', function(event) {
    event.preventDefault();
    const donation_amount = getBalanceFromInput('new_khali_amount');
    if ( typeof(donation_amount)!='number' || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance ) {
        alert("Please enter a valid donation amount");
        return;
    }
       const currentDateTime = new Date();
       const historySection = document.getElementById('history_section');  
       const historyBox = document.createElement('div');
       historyBox.style.backgroundColor = '#ffffff';  
       historyBox.style.border = '3px solid #ccc';  
       historyBox.style.padding = '30px'; 
       historyBox.style.width ='1200px';
       historyBox.style.marginBottom = '40px';  
       historyBox.style.marginLeft = '30px'; 
       historyBox.style.borderRadius = '20px';   
       historyBox.innerHTML = `
           <p><strong>${donation_amount.toFixed(2)} Taka is Donated for Flood at Noakhali,Bangladesh 2024</p></strong> 
           <p>Date & Time:</> ${currentDateTime}</p>
       `;
       historySection.appendChild(historyBox);
});


// For feni
document.getElementById('feni_donate_now').addEventListener('click', function(event) {
    event.preventDefault();
     const donation_amount = getBalanceFromInput('feni_amount');
     if ( typeof(donation_amount)!='number' || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance ) {
        alert("Please enter a valid donation amount");
        return;
    }
       const currentDateTime = new Date();
       const historySection = document.getElementById('history_section');  
       const historyBox = document.createElement('div');
       historyBox.style.backgroundColor = '#ffffff';  
       historyBox.style.border = '3px solid #ccc';  
       historyBox.style.padding = '30px'; 
       historyBox.style.width ='1200px';
       historyBox.style.marginBottom = '40px';  
       historyBox.style.marginLeft = '30px'; 
       historyBox.style.borderRadius = '20px';   
       historyBox.innerHTML = `
           <p><strong>${donation_amount.toFixed(2)} Taka is Donated for Flood Relif in Feni,Bangladesh 2024</p></strong> 
           <p>Date & Time:</> ${currentDateTime}</p>
       `;
       historySection.appendChild(historyBox);
});

// For quota
document.getElementById('quota_donate_now').addEventListener('click', function(event) {
    event.preventDefault();
    const donation_amount = getBalanceFromInput('quota_amount');
    if ( typeof(donation_amount)!='number' || isNaN(donation_amount) || donation_amount <= 0 || donation_amount > main_balance ) {
        alert("Please enter a valid donation amount");
        return;
    }
       const currentDateTime = new Date();
       const historySection = document.getElementById('history_section');  
       const historyBox = document.createElement('div');
       historyBox.style.backgroundColor = '#ffffff';  
       historyBox.style.border = '3px solid #ccc';  
       historyBox.style.padding = '30px'; 
       historyBox.style.width ='1200px';
       historyBox.style.marginBottom = '40px';  
       historyBox.style.marginLeft = '30px'; 
       historyBox.style.borderRadius = '20px';   
       historyBox.innerHTML = `
           <p><strong>${donation_amount.toFixed(2)} Taka is Donated to Aid For Injured in the Quota Movement Bangladesh 2024</p></strong> 
           <p>Date & Time:</> ${currentDateTime}</p>
       `;
       historySection.appendChild(historyBox);
});









