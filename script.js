function openInquiry(service) {
  document.getElementById("service").innerText = service;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
