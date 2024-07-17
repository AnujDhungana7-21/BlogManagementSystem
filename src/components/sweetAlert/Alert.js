import React from "react";
import Swal from "sweetalert2";

const Alert = (title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
};

export default Alert;
