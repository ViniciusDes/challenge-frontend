import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    lastName: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  })
  .required();
