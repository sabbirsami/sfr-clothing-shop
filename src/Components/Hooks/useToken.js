import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useToken = (user) => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://sfr-clothing-store.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currentUser),
            })
                .then((response) => response.json())
                .then((data) => {
                    const accessToken = data.token;
                    localStorage.setItem("sfrAccessToken", accessToken);
                    setToken(accessToken);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [user]);
    return [token];
};

export default useToken;
