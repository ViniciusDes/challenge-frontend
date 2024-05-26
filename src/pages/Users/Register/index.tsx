import { Modal } from "@/components/Modal";
import React, { useEffect, useState } from "react";
import { FormDataInterface, RegisterProps } from "./types";
import Switch from "@/components/Switch";
import { RadioGroup } from "@/components/RadioGroup";
import { Box } from "@mui/material";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useUsers } from "@/hooks/useUsers";
import { KindOfUser } from "@/interfaces/kindOfUser.enum";
import { useAuth } from "@/hooks/useAuth";

const Register: React.FC<RegisterProps> = ({
  isOpen,
  setIsOpen,
  isEditing,
}) => {
  const [userActived, setUserActived] = useState(true);
  const [kindOfUser, setKindOfUser] = useState<KindOfUser>(KindOfUser.admin);
  const { userSelected, setUserSelected, saveUser, getUsers } = useUsers();
  const { userAuthenticatedData } = useAuth();

  const { handleSubmit, control, setValue, reset } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: false,
  });

  async function handleSaveUser(formData: FormDataInterface) {
    await saveUser(
      !Boolean(userSelected),
      {
        nome: formData.name,
        sobrenome: formData.lastName,
        email: formData.email,
        senha: formData.password,
        tipoUsuario: kindOfUser,
        ativo: userActived,
        id: userSelected?.id,
      },
      () => {
        setTimeout(() => {
          getUsers();
          /*
            ESSE TIMEOUT FOI COLOCADO POIS O SERVER EM PRODUÇÃO APOS UM POST/PUT/DELETE NÃO SEI POR QUAL MOTIVO, NÃO RESOLVE UM GET E RETORNA ERRO DESCONHECIDO.
            SENDO NECESSÁRIO ADICIONAR UM TIMEOUT PARA UM GET APÓS POST/PUT/DELET
          */
        }, 1000);
        setIsOpen(false);
      }
    );
  }

  useEffect(() => {
    if (isOpen && userSelected) {
      setValue("name", userSelected.nome);
      setValue("lastName", userSelected.sobrenome);
      setValue("email", userSelected.email);
      setValue("password", userSelected.senha);
      setUserActived(userSelected.ativo);
      setKindOfUser(userSelected.tipoUsuario as KindOfUser);
    }
    if (!isOpen) {
      reset();
      setUserSelected(null);
    }
  }, [userSelected, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={`${isEditing ? "Edição" : "Cadastro"} de usuário`}
    >
      <Box display={"flex"} flexDirection={"column"} width={"40rem"}>
        <form onSubmit={handleSubmit(handleSaveUser)}>
          <Box
            margin={"1rem 0 0 1rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Switch
              label="Usuário ativo"
              isChecked={userActived}
              onChange={(e) => setUserActived(e.target.checked)}
            />
            <RadioGroup
              titleGroup="Tipo de Usuário"
              defaultChecked={
                userSelected
                  ? userSelected?.tipoUsuario === KindOfUser.admin
                    ? KindOfUser.admin
                    : KindOfUser.default
                  : kindOfUser
              }
              options={[
                {
                  isChecked: false,
                  name: KindOfUser.admin,
                  label: "Administrador",
                },
                {
                  isChecked: false,
                  name: KindOfUser.default,
                  label: "Usuário Padrão",
                },
              ]}
              onCheck={(value) => setKindOfUser(value as KindOfUser)}
            />
            <Input name="name" control={control} label="Nome" type="text" />
            <Input
              name="lastName"
              control={control}
              label="Sobrenome"
              type="text"
            />
            <Input name="email" control={control} label="E-mail" type="email" />
            <Input
              name="password"
              control={control}
              label="Senha"
              type="password"
            />
            <Box display={"flex"} justifyContent={"end"}>
              <Box display={"flex"} gap={"1rem"} width={"15rem"}>
                <Button type="button" onClick={() => setIsOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  isSecondary
                  type="submit"
                  disabled={userAuthenticatedData.role === KindOfUser.default}
                >
                  {userSelected ? "Editar" : "Cadastrar"}
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default Register;
