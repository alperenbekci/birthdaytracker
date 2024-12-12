import { useAuthContext } from "./useAuthContext";
import { useBirthdaysContext } from "./useBirthdaysContext";

const useUpdateBirthday = () => {
  const { user } = useAuthContext();
  const { dispatch } = useBirthdaysContext();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const updateBirthday = async (
    birthdayId,
    updatedBirthday,
    setError,
    closeModal
  ) => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    try {
      const response = await fetch(
        `${backendUrl}/api/birthdays/${birthdayId}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedBirthday),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        dispatch({ type: "UPDATE_BIRTHDAY", payload: json });
        closeModal();
      }
    } catch (error) {
      setError("An error occurred while updating the birthday");
    }
  };

  return updateBirthday;
};

export default useUpdateBirthday;
