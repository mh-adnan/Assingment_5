function getBalanceFromInput(id) {
    const inputData = parseFloat(document.getElementById(id).value);
    return inputData;
}


function createDonationBox(donation_amount, location) {
    const currentDateTime = new Date();
    const historySection = document.getElementById('history_section');
    const historyBox = document.createElement('div');
    historyBox.className = 'bg-white border border-gray-700 p-6 max-w-3xl w-full mx-auto mb-10 rounded-lg';
    historyBox.innerHTML = `
        <p><strong>${donation_amount.toFixed(2)} Taka is Donated for ${location} 2024</strong></p>
        <p>Date & Time: ${currentDateTime}</p>
    `;
    historySection.appendChild(historyBox);
}
