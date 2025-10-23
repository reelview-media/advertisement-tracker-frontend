import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../utils/apiBaseUrl";
import { clearAuth, setAuthData } from "../redux_store/slices/auth.slice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuthUser = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v2/dashboard`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          dispatch(setAuthData(response.data.user));
        } else {
          dispatch(clearAuth());
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth check failed:", error.message);
        dispatch(clearAuth());
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthUser();
  }, [dispatch, navigate]);

  const userData = useSelector((state) => state.auth);
  console.log("userform store", userData);

 

  return (
    <>
      {isLoading ? (
        <div>loading.......</div>
      ) : (
        <div>
          <h1>Dashboard {userData.userInfo?.email}</h1>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
