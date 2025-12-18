// Scroll to section smoothly
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Auto-fill booking details
function bookRoom(roomName, price) {
  document.getElementById("roomType").value = roomName;
  document.getElementById("price").value = price;
  scrollToSection("booking");
}

// Calculate total cost
document.getElementById("nights").addEventListener("input", calculateTotal);

function calculateTotal() {
  const price = parseInt(document.getElementById("price").value || 0);
  const nights = parseInt(document.getElementById("nights").value || 0);
  document.getElementById("total").value = price * nights;
}

// Booking form submission
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const room = document.getElementById("roomType").value;
  const total = document.getElementById("total").value;

  if (!room) {
    alert("Please select a room first!");
    return;
  }

  alert(`Thank you, ${name}! Your booking for ${room} has been confirmed.\nTotal Amount: ₹${total}\nConfirmation sent to: ${email}`);
  this.reset();
});
