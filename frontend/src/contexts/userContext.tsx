import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { instance } from "../services/instance";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser, IUserContext, IUserReturn } from "../interfaces/userInterfaces";
interface iProviderProps {
    children: React.ReactNode;
}
interface iAxiosData {
    token: string;
}
export interface iErrorAxios {
    status: string;
    message: string;
}

export const UserContext = createContext({} as IUserContext);


export const UserProvider = ({ children }: iProviderProps) => {
    const [refresh, setRefresh] = useState(false);
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState<IUserReturn | null>(null);


    const navigate = useNavigate();

    const onSubmitSignUp = (data: FieldValues) => postSignUp(data);
    const onSubmitLogin = (data: FieldValues) => postLogin(data);


    const postLogin = (obj: FieldValues) => {
        instance
            .post<iAxiosData>("sessions", obj)
            .then((response) => {
                window.localStorage.setItem("TOKEN@TRUETIES", response.data.token);

                const token = window.localStorage.getItem("TOKEN@TRUETIES");
                toast.success("Login successful");
                setRefresh(true)
                token ? navigate("/dashboard") : <></>;
            })
            .catch((err: iErrorAxios) => {
                toast.error("Verify your credentials")
                console.log(err);
            });
    };


    const postSignUp = (obj: FieldValues) => {
        instance
            .post<IUser>("users", obj)
            .then((response) => {
                toast.success("Account sucessfully created")
                setLogin(true)
            })
            .catch((err: iErrorAxios) => {
                console.log(err);
                toast.error("Verify your Credentials")
            });
    };


    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("TOKEN@TRUETIES");
            if (token) {
                try {
                    instance.defaults.headers.authorization = `Bearer ${token}`;
                    const { data } = await instance.get<IUserReturn>("users");
                    setUser(data);
                    setRefresh(false)

                } catch (error) {
                    console.log(error);
                    localStorage.clear()
                }
            }
        };
        loadUser();
    }, [refresh]);
    return (
        <UserContext.Provider value={{ user, setUser, setRefresh, onSubmitLogin, onSubmitSignUp, login, setLogin }}>
            {children}
        </UserContext.Provider>
    );
}