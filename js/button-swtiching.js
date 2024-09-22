document.getElementById('history').addEventListener('click',function(){
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('history_section').classList.remove('hidden'); 
    
    document.getElementById('history').className = 'bg-[rgb(180,244,97)] px-3 py-2 rounded-md font-bold';
    document.getElementById('donation').classList.remove('bg-[rgb(180,244,97)]', 'px-3', 'py-2', 'rounded-md', 'font-bold');

})

document.getElementById('donation').addEventListener('click',function(){
    document.getElementById('donation_section').classList.remove('hidden');
    document.getElementById('history_section').classList.add('hidden');   
    
    document.getElementById('donation').className = 'bg-[rgb(180,244,97)] px-3 py-2 rounded-md font-bold';
    document.getElementById('history').classList.remove('bg-[rgb(180,244,97)]', 'px-3', 'py-2', 'rounded-md', 'font-bold');
})

