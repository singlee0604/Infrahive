
import Axios from 'utils/axios';

const PromptApi = async (payload: any) => {
    try {
        const data = await Axios.post('api/explore/' + payload.api, payload);
        return data;
    } catch (error: any) {
        return error.data
    }
}

export { PromptApi };
