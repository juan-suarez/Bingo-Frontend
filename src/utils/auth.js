export const isAuthenticated = async () => {
  try {
    const response = await fetch('http://localhost:3000/protected', {
      method: 'GET',
      credentials: 'include', 
    });

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
