import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: { Authorization: 'Client-ID 3maRp6M8epSh6nk-U-_8MgfDII7qZD4Y_dWpBW0kt98' }
});
