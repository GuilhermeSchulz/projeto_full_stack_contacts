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
    const [login, setLogin] = useState(true);
    const [user, setUser] = useState<IUserReturn | null>(null);
    const [profile, setProfile] = useState(false);

    const loginSuccess = () => {
        toast.success("Login Successful", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
        });
    };

    const loginError = () =>
        toast.error("Fail to login!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 2,
        });
    const signUpSucess = () =>
        toast.success("Register successful!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
        });
    const signUpError = () =>
        toast.error("Fail to register!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 2,
        });
    const navigate = useNavigate();

    const onSubmitSignUp = (data: FieldValues) => postSignUp(data);
    const onSubmitLogin = (data: FieldValues) => postLogin(data);
    const onSubmitUpdate = (data: FieldValues) => editProfile(data);
    const onSubmitDelete = (data: FieldValues) => deleteProfile();
    const postLogin = (obj: FieldValues) => {
        instance
            .post<iAxiosData>("login", obj)
            .then((response) => {
                window.localStorage.setItem("TOKEN@TRUETIES", response.data.token);

                const token = window.localStorage.getItem("TOKEN@TRUETIES");
                loginSuccess();
                setRefresh(true);
                token ? navigate("/dashboard") : <></>;
            })
            .catch((err: iErrorAxios) => {
                loginError();
                console.log(err);
            });
    };

    const postSignUp = (obj: FieldValues) => {
        instance
            .post<IUser>("users", obj)
            .then((response) => {
                signUpSucess();
                setLogin(true);
            })
            .catch((err: iErrorAxios) => {
                console.log(err);
                signUpError();
            });
    };
    const editProfile = (obj: FieldValues) => {
        const token = localStorage.getItem("TOKEN@TRUETIES");
        console.log(token)
        if (token) {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            instance
                .patch<IUser>(`users/${user?.id}`, obj)
                .then((response) => {
                    toast.success("User updated successfully");
                    setProfile(false);
                })
                .catch((err: iErrorAxios) => {
                    console.log(err);
                    toast.error("Fail to update user");
                });
        }
    };
    const deleteProfile = () => {
        const token = localStorage.getItem("TOKEN@TRUETIES");
        console.log(token)
        if (token) {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            instance
                .delete<IUser>(`users/${user?.id}`)
                .then((response) => {
                    toast.success("User deleted successfully");
                    setProfile(false);
                })
                .catch((err: iErrorAxios) => {
                    console.log(err);
                    toast.error("Fail to delete user");
                });
        }
    }

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("TOKEN@TRUETIES");
            if (token) {
                try {
                    instance.defaults.headers.authorization = `Bearer ${token}`;
                    const { data } = await instance.get<IUserReturn>("users");
                    setUser(data);
                    setRefresh(false);
                } catch (error) {
                    console.log(error);
                    localStorage.clear();
                }
            }
        };
        loadUser();
    }, [refresh]);
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                setRefresh,
                onSubmitLogin,
                onSubmitSignUp,
                login,
                setLogin,
                onSubmitUpdate,
                setProfile,
                profile,
                onSubmitDelete
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
