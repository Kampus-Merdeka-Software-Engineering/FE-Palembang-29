document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:3000/doctors';

    // Mengambil semua dokter dari backend
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('data dari server:', data);
        })
        .catch(error => console.error('Error:', error));
});

// Menambahkan dokter baru
fetch('http://localhost:3000/doctors', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: '', // isi nama dokter baru yang ingin ditambahkan
    specialization: '' // isi spesialisasi
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Doctor added:', data);
  })
  .catch(error => console.error('Error:', error));

// Memperbarui informasi dokter
fetch('http://localhost:3000/doctors/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: '', 
    specialization: ''
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Doctor updated:', data);
  })
  .catch(error => console.error('Error:', error));

  // Menghapus dokter
fetch('http://localhost:3000/doctors/1', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      console.log('Doctor deleted:', data);
    })
    .catch(error => console.error('Error:', error));
  

// Appointment

const getAppointmentById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/appointments/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error saat mengambil janji temu:', error);
  }
};

const createAppointment = async (appointmentData) => {
  try {
    const response = await fetch('http://localhost:3000/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointmentData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error menambahkan janji temu:', error);
  }
};

// User
const getUserById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error mengambil data pengguna:', error);
  }
};

const createAccount = async (userData) => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error membuat akun pengguna:', error);
  }
};

const signInAccount = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error masuk ke akun pengguna:', error);
  }
};
const deleteUserById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      return true; // Penghapusan berhasil
    } else {
      throw new Error('Error menghapus pengguna');
    }
  } catch (error) {
    console.error('Error menghapus pengguna:', error);
    return false; // Penghapusan gagal
  }
};




