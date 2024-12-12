import { useState } from "react";
import { useBirthdaysContext } from "../hooks/useBirthdaysContext";
import { useAuthContext } from "../hooks/useAuthContext";

export const useCreateBirthday = () => {
  const { dispatch } = useBirthdaysContext();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const createBirthday = async (birthday) => {
    if (!user) {
      setError("You must be logged in");
      return { error: "You must be logged in", emptyFields: [] };
    }

    try {
      const response = await fetch(`${backendUrl}/api/birthdays/`, {
        method: "POST",
        body: JSON.stringify(birthday),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields || []);
        return { error: json.error, emptyFields: json.emptyFields || [] };
      }

      // Her şey başarılı
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_BIRTHDAY", payload: json });

      return { success: true };
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      return { error: "Something went wrong.", emptyFields: [] };
    }
  };

  return { createBirthday, error, emptyFields };
};
