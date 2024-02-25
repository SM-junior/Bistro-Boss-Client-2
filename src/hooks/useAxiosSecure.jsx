import axios from "axios";
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider"
import useCart from "./useCart";


const useAxiosSecure = () => {
    const { logOut, loading} = useContext(authContext);
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:3000',
    })

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `bearer ${token}`
            }
            loading(false)
            return config;
        })

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login')
                }
                return Promise.reject(error)
            }
        )
    }, [logOut, navigate, axiosSecure])

    return [axiosSecure]
}

export default useAxiosSecure;