
function calculate() {
    //Variables
    let billAmount = document.getElementById('amount').value;
    let tipPercentage = document.getElementById('percentage').value;
    let divideByPerson = document.getElementById('divide').value;
    const result = document.getElementById('result')
    
    // conveting to percentage
    const valuePorcetagem = tipPercentage / 100
    
    // Variable to calculate Tip
    const totalTip = function (amount, valuePorcetagem, divide) {
        return amount * valuePorcetagem / divide
    }

        // condition checking whether the variables are empty
    
        if(billAmount === '' || tipPercentage === '' || divideByPerson === '') {
            result.innerHTML = `<p>Please, some value was not filled in</p>`
            result.style.background = 'red'
        } else {
            result.innerHTML = `<p>The total amount per person is $${totalTip(billAmount,valuePorcetagem, divideByPerson)}</p>`
            result.style.background = 'rgb(87, 247, 87)'
        }
}