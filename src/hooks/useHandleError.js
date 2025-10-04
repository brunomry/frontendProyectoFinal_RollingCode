import useAlert from "./useAlert";

export const useHandleError = () => {
  const { autoCloseAlert } = useAlert();

  const handleError = (error) => {
    if (!error) return;

    switch (error.code) {
      case 400:
        autoCloseAlert(error.details, "error");
        break;
      case 401:
        autoCloseAlert(error.details, "error");
        break;
      case 404:
        autoCloseAlert(error.details, "error");
        break;
      case 409:
        autoCloseAlert(error.details, "error");
        break;
      default:
        autoCloseAlert(error.details, "error");
    }
  };

  return { handleError };
};


