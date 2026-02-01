function calculateTotal() {
let price = document.getElementById('price').value;
let viewers = document.getElementById('viewers').value;
let total = price * viewers;


document.getElementById('total').innerText = total;
document.getElementById('total_amount').value = total;
}
function generateViewers() {
let viewers = document.getElementById('viewers').value;
let price = document.getElementById('price').value;
let container = document.getElementById('viewerDetails');
container.innerHTML = '';


for (let i = 1; i <= viewers; i++) {
container.innerHTML += `
<fieldset>
<legend>Viewer ${i}</legend>
<input type="text" name="viewer_name[]" placeholder="Name" required>
<input type="number" name="viewer_age[]" placeholder="Age" required>
<select name="viewer_gender[]">
<option>Male</option>
<option>Female</option>
</select>
<input type="text" name="viewer_mobile[]" placeholder="Mobile" required>
</fieldset>
`;
}


let total = viewers * price;
document.getElementById('total').innerText = total;
document.getElementById('total_amount').value = total;
}


window.onload = generateViewers;