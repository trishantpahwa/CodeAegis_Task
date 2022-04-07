import ApiService from "./api.service";
import SessionService from "./session.service";

const UserService = {
    login: async (payload) => ApiService.post('/user/login', payload),
    isLoggedIn: async () => SessionService.get('user-token') !== null
};

export default UserService;