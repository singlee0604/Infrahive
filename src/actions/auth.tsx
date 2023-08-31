import Axios from 'utils/axios';
// ==============================|| Auth actions ||============================== //
const JoinWaitList = async (values: Object) => {
    const data = await Axios.post('api/auth/join_wait_list', values);
    return data;
};
const Register = async (values: Object) => {
    const data = await Axios.post('api/auth/register', values);
    return data;
}
const Login = async (email: String, password: String) => {
    const data = await Axios.post('api/auth/login', { email, password });
    return data;
}

const InitailScreening = async (userdata: any) => {
    const data = await Axios.post('api/auth/initial_screening', userdata);
    return data;
}
export { JoinWaitList, Register, Login, InitailScreening };
