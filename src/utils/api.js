import axios from "axios";

const api=axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers:{Authorization:`Client-ID mbBvWDV5-if7057uQouP-zIYtHrEPdfp7ArXU_LiYKM`,},
});
export default api;