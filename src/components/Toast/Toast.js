import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  toast.warn("You Have Already Bookmarked This Blog", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export { Toast };
