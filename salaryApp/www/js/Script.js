const hourlyRate = 1000;


function calculateSalary(event) {
    event.preventDefault(); // to prevent submission from reloading page
    
    
    const hoursWorked = parseFloat(document.getElementById("hrsWorked").value);
    
    
    const grossSalary = hoursWorked * hourlyRate;

    
    const nisDeduction = grossSalary * 0.02;
    const payeDeduction = grossSalary * 0.25;
    const eduTaxDeduction = grossSalary * 0.02;
    const nhtDeduction = grossSalary * 0.03;
    
    
    const totalDeductions = nisDeduction + payeDeduction + eduTaxDeduction + nhtDeduction;
    const netSalary = grossSalary - totalDeductions;

    
    document.getElementById("gross_Salary").innerText = `Gross Salary: $${grossSalary.toFixed(2)}`;
    document.getElementById("nis_Deduct").innerText = `NIS Deduction: $${nisDeduction.toFixed(2)}`;
    document.getElementById("paye_Deduct").innerText = `PAYE Deduction: $${payeDeduction.toFixed(2)}`;
    document.getElementById("eduTax_Deduct").innerText = `Education Tax Deduction: $${eduTaxDeduction.toFixed(2)}`;
    document.getElementById("nht_Deduct").innerText = `NHT Deduction: $${nhtDeduction.toFixed(2)}`;
    document.getElementById("net_Salary").innerText = `Net Salary: $${netSalary.toFixed(2)}`;
}


function clearForm(event) {
    event.preventDefault(); // to prevent submission from reloading page
    
    
    document.getElementById("position").value = '';
    document.getElementById("hrsWorked").value = '';
    
    
    document.getElementById("gross_Salary").innerText = `Gross Salary: $0.00`;
    document.getElementById("nis_Deduct").innerText = `NIS Deduction: $0.00`;
    document.getElementById("paye_Deduct").innerText = `PAYE Deduction: $0.00`;
    document.getElementById("eduTax_Deduct").innerText = `Education Tax Deduction: $0.00`;
    document.getElementById("nht_Deduct").innerText = `NHT Deduction: $0.00`;
    document.getElementById("net_Salary").innerText = `Net Salary: $0.00`;
}


document.getElementById("btnCalculate").addEventListener("click", calculateSalary);
document.getElementById("btnClear").addEventListener("click", clearForm);
