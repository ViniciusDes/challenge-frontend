import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/hooks/useAuth";
import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormDataInterface } from "./types";
import { schema } from "./schema";

const Login: React.FC = () => {
  const { validateLogin } = useAuth();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  function handleMakeLogin(formData: FormDataInterface) {
    validateLogin(formData.email, formData.password);
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <form onSubmit={handleSubmit(handleMakeLogin)}>
        <Box
          width={500}
          padding={"40px"}
          gap="20px"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            background: "#fff",
          }}
        >
          <Input control={control} label="E-mail" name="email" type="text" />
          <Input
            control={control}
            label="Senha"
            name="password"
            type="password"
          />
          <Box width={"50%"}>
            <Button type="submit">Entrar</Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
