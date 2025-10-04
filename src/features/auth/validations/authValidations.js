export const nombreValidation = {
  required: "El nombre es obligatorio",
  minLength: {
    value: 7,
    message: "El nombre y apellido debe tener como minimo 7 caracteres",
  },
  maxLength: {
    value: 30,
    message: "El nombre y apellido debe tener como maximo 30 caracteres",
  },
};

export const correoValidation = {
  required: "El correo es obligatorio",
  minLength: {
    value: 3,
    message: "El correo debe contener al menos 3 caracteres",
  },
  maxLength: {
    value: 265,
    message: "El correo debe contener como máximo 265 caracteres",
  },
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    message: "Ingrese una dirección de correo válida",
  },
};

export const claveValidation = {
  required: "La contraseña es obligatoria",
  minLength: {
    value: 8,
    message: "La contraseña debe tener al menos 8 caracteres",
  },
  maxLength: {
    value: 16,
    message: "La contraseña debe tener como máximo 16 caracteres",
  },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    message:
      "La contraseña debe tener al menos 1 letra minúscula y 1 letra mayúscula",
  },
};
