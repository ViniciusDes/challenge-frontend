import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  })
  .required();
