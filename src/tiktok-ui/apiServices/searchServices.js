import * as http from '../utils/http';

export const search = async (q, type = "less") => {
    try {
        const res = await http.get('users/search', {
            params: {
                q,
                type
            }
        })
        return res.data;
    } catch (err) {
        console.log(err)
    }
}

