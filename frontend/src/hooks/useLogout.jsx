import { useAuthContext } from "./useAuthContext";
import { useBirthdaysContext } from "./useBirthdaysContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchBirthdays } = useBirthdaysContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchBirthdays({ type: "SET_BIRTHDAYS", payload: null });
  };

  return { logout };
};
