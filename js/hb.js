// Mengambil data booking dari server
fetch('https://contohserver.com/api/booking')
    .then(response => response.json())
    .then(data => {
        // Menampilkan hasil booking ke dalam elemen dengan id "booking-list"
        const bookingListElement = document.getElementById("booking-list");
        bookingListElement.innerHTML = "";

        data.forEach((booking, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <p>Nama Pemesan: ${booking.namaPemesan}</p>
                <p>Tanggal Booking: ${booking.tanggalBooking}</p>
                <p>Jumlah Tiket: ${booking.jumlahTiket}</p>
                <p>Total Harga: $${booking.totalHarga}</p>
                <button class="update-button" onclick="updateBooking(${index})">Update</button>
            `;
            bookingListElement.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Gagal mengambil data booking:', error);
    });

function updateBooking(index) {
    // Logika untuk memperbarui data booking
    // Misalnya, Anda dapat menampilkan formulir untuk memperbarui data booking
    alert(`Anda akan memperbarui booking ke-${index + 1}`);
}
