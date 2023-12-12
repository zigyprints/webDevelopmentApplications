import axios from 'axios';

const API_BASE_URL = 'https://picsum.photos/300/200';
class UserService {
  ProfileApi() {
    return axios.post(
      API_BASE_URL + '/v1/api/profile',
      {},
      {
        headers: {
          authtoken: localStorage.getItem('authtoken'),
          'Content-Type': 'application/json',
        },
      }
    );
  }

  FoodItems() {
    return axios.post(
      API_BASE_URL,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  Login(email, password) {
    return axios.post(
      API_BASE_URL + '/login',
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  Signup(name, email, password, location) {
    return axios.post(
      API_BASE_URL + '/createuser',
      { name, email, password, location },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  GetProfile() {
    return axios.get(API_BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getLocation() {
    return axios.get(API_BASE_URL + '/getlocation', {
      headers: {
        authtoken: localStorage.getItem('authtoken'),
        'Content-Type': 'application/json',
      },
    });
  }
  editLocation(home, other) {
    return axios.post(
      API_BASE_URL + '/editlocation',
      { home, other },
      {
        headers: {
          'Content-Type': 'application/json',
          authtoken: localStorage.getItem('authtoken'),
        },
      }
    );
  }

  LoginWithGoogle(email) {
    return axios.post(
      API_BASE_URL + '/loginGoogle',
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  OrderData(email, order_data) {
    return axios.post(
      API_BASE_URL + '/orderData',
      { email, order_data },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  MyOrderData(email) {
    return axios.post(
      API_BASE_URL + '/myOrderData',
      { email},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

export default new UserService();
