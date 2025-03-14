function showCardDetails(type, number, expiry, cvv, name) {
  const modal = document.getElementById('details-modal');
  const content = document.getElementById('details-content');
  content.innerHTML = `
    <h3>${type}</h3>
    <p><strong>Card Number:</strong> ${number}</p>
    <p><strong>Expiry Date:</strong> ${expiry}</p>
    <p><strong>CVV:</strong> ${cvv}</p>
    <p><strong>Name:</strong> ${name}</p>
  `;
  modal.style.display = 'block';
}

function showCurrencyDetails(type, address) {
  const modal = document.getElementById('details-modal');
  const content = document.getElementById('details-content');
  content.innerHTML = `
    <h3>${type}</h3>
    <p><strong>Address:</strong> ${address}</p>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address}" alt="QR Code">
  `;
  modal.style.display = 'block';
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard: " + text);
  }).catch((err) => {
    console.error("Failed to copy: ", err);
  });
}

function closeModal() {
  const modal = document.getElementById('details-modal');
  modal.style.display = 'none';
}