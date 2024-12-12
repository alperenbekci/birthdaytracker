import { useAuthContext } from "./useAuthContext";
import { useBirthdaysContext } from "./useBirthdaysContext";

const useDeleteBirthday = () => {
  const { user } = useAuthContext();
  const { dispatch } = useBirthdaysContext();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const deleteBirthday = async (birthdayId) => {
    if (!user) {
      // console.log("User not authenticated");
      return;
    }

    try {
      const response = await fetch(
        `${backendUrl}/api/birthdays/${birthdayId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_BIRTHDAY", payload: json });
      } else {
        console.error("Error deleting birthday:", json);
      }
    } catch (error) {
      console.error("Error deleting birthday:", error);
    }
  };

  return deleteBirthday;
};

export default useDeleteBirthday;
