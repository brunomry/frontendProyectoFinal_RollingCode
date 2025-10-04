export const nameValidation = {
  required: "El nombre del producto es obligatorio",
  minLength: {
    value: 10,
    message: "El nombre del producto debe tener como minimo 10 caracteres",
  },
  maxLength: {
    value: 30,
    message: "El nombre del producto debe tener como maximo 30 caracteres",
  },
};

export const descriptionValidation = {
  required: "La descripción del producto es obligatoria",
  minLength: {
    value: 10,
    message: "La descripción del producto debe tener como minimo 10 caracteres",
  },
  maxLength: {
    value: 150,
    message:
      "La descripción del producto debe tener como maximo 150 caracteres",
  },
};

export const categoryValidation = {
  required: "La categoría del producto es obligatoria",
};

export const stateValidation = {
  required: "El estado del producto es obligatorio",
};

export const priceValidation = {
  required: "El precio del producto es obligatorio",
  min: {
    value: 5000,
    message: "El precio minimo del producto debe ser 5000",
  },
  max: {
    value: 16000,
    message: "El precio maximo del producto debe ser 16000",
  },
};

export const imageValidation = {
  required: "La imagen es obligatoria",
  pattern: {
    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
    message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
  },
};
