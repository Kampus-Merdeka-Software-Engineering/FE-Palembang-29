// Appointment
const getAppointmentById = async (id) => {
  try {
    const response = await fetch(`https://capstoneproject-be-palembang-29.vercel.app/api/appointments/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error saat mengambil janji temu:', error);
  }
};

const createAppointment = async (appointmentData) => {
  try {
    const response = await fetch('https://capstoneproject-be-palembang-29.vercel.app/api/appointments', {
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

// Doctors
// Fungsi untuk Mendapatkan Semua Data Dokter
const getDoctors = async () => {
  try {
    const response = await fetch('https://capstoneproject-be-palembang-29.vercel.app/api/doctors'); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error saat mengambil data dokter:', error);
  }
};

// Fungsi untuk Mendapatkan Data Dokter Berdasarkan ID
const getDoctorById = async (id) => {
  try {
    const response = await fetch(`https://capstoneproject-be-palembang-29.vercel.app/api/doctors/${id}`); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error mengambil data dokter dengan ID ${id}:`, error);
  }
};

// Fungsi untuk Menambahkan Data Dokter Baru
const postDoctor = async (doctorData) => {
  try {
    const response = await fetch('https://capstoneproject-be-palembang-29.vercel.app/api/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(doctorData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error menambahkan dokter baru:', error);
  }
};


// User
const getUserById = async (id) => {
  try {
    const response = await fetch(`https://capstoneproject-be-palembang-29.vercel.app/api/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error mengambil data pengguna:', error);
  }
};

const createAccount = async (userData) => {
  try {
    const response = await fetch('https://capstoneproject-be-palembang-29.vercel.app/api/users', {
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
    const response = await fetch('https://capstoneproject-be-palembang-29.vercel.app/api/users/signin', {
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
    const response = await fetch(`https://capstoneproject-be-palembang-29.vercel.app/api/users/${id}`, {
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
