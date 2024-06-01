import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const axiosCustomer = axios.create({
    baseURL: 'customerScema.json'
})
const axiosProduct = axios.create({
    baseURL: 'productScema.json'
})

const useAxiosSecure = () => {
    return [axiosSecure,axiosCustomer,axiosProduct];
};

export default useAxiosSecure;