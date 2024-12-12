import { useEffect } from "react";
import { useBirthdaysContext } from "./useBirthdaysContext";
import { useAuthContext } from "./useAuthContext";

const useFetchBirthdays = () => {
  const { birthdays, dispatch } = useBirthdaysContext();
  const { user } = useAuthContext();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBirthdays = async () => {
      const response = await fetch(`${backendUrl}/api/birthdays/`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BIRTHDAYS", payload: json });
      }
    };

    if (user) {
      fetchBirthdays();
    }
  }, [dispatch, user]);

  return birthdays;
};

export default useFetchBirthdays;
