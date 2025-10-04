export const fetchProductsPending = (state) => {
  state.status = "Loading";
};

export const fetchProductsFullfilled = (state, action) => {
  state.status = "succeded";
  state.products = action.payload.data;
};

export const fetchProductsRejected = (state, action) => {
  state.status = "Failed";
  state.error = action.error.message;
};

export const fetchProductPending = (state) => {
  state.status = "Loading";
};

export const fetchProductFullfilled = (state, action) => {
  state.status = "succeded";
  state.product = action.payload.data;
};

export const fetchProductRejected = (state, action) => {
  state.status = "Failed";
  state.error = action.error.message;
};

export const createProductPending = (state) => {
  state.status = "Loading";
};

export const createProductFullfilled = (state, action) => {
  state.status = "succeded";
  state.product = action.payload.data;
  state.products.push(action.payload.data);
};

export const createProductRejected = (state, action) => {
  state.status = "Failed";
  state.error = action.error.message;
};

export const deleteProductPending = (state) => {
  state.status = "Loading";
};

export const deleteProductFullfilled = (state, action) => {
  state.status = "succeded";
  state.products = state.products.filter(p => p._id !== action.payload.data);
};

export const deleteProductRejected = (state, action) => {
  state.status = "Failed";
  state.error = action.error.message;
};

export const updateProductPending = (state) => {
  state.status = "Loading";
};

export const updateProductFullfilled = (state, action) => {
  state.status = "succeded";
  state.product = action.payload.data;
  state.products = state.products.map(p => p._id === action.payload.data._id ? action.payload.data : p)
};

export const updateProductRejected = (state, action) => {
  state.status = "Failed";
  state.error = action.error.message;
};

export const filterProductsPending = (state) => {
  state.status = "Loading";
};

export const filterProductsFulfilled = (state, action) => {
  state.status = "succeded";
  state.filteredProducts = action.payload.data;
};

export const filterProductsRejected = (state, action) => {
  state.status = "Failed";
  state.error = action.error.message;
};