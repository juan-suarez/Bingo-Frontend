export const isAuthenticated = async () => {
  try {
    const response = await fetch('http://localhost:3000/protected', {
      method: 'GET',
      credentials: 'include', 
    });
    console.log(response)
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al verificar el token', error);
    return false;
  }
};

export const loger = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",  
    });

    if (response.status === 200 || response.status === 400) {
      return response;
    }
    console.log(response.status)
    throw new Error("Hubo un problema con el servidor. Intenta más tarde.");

  } catch (error) {
    console.error("Error en login:", error.message); 
    throw error; 
  }
};

export const register = async (email, password, userName) => {
  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username:userName}),
      credentials: "include",  
    });

    if (response.status === 201 || response.status === 400) {
      return response;
    }
    console.log(response.status)
    throw new Error("Hubo un problema con el servidor. Intenta más tarde.");

  } catch (error) {
    console.error("Error en login:", error.message); 
    throw error; 
  }
};

