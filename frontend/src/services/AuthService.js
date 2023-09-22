import axios from 'axios';

class AuthService {

  async login(email, password) {
    try {
      const res = await axios.post('/login', { email, password });
      return res.data;
    } catch (err) {
      return null;
    }
  }

  logout() {
    localStorage.clear();
  }

}

export default new AuthService();