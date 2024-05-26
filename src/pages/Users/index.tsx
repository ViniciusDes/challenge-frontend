import { RootState } from "@/redux/store";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "@/utils";
import Button from "@/components/Button";
import { Table } from "@/components/Table";
import { ColumnDef } from "@/components/Table/types";
import { useUsers } from "@/hooks/useUsers";
import Register from "./Register";
import { UserEntity } from "@/interfaces/entities/user";
import { useAuth } from "@/hooks/useAuth";
import { KindOfUser } from "@/interfaces/kindOfUser.enum";
import { toast } from "react-toastify";

const Users: React.FC = () => {
  const { listOfUsers, getUsers, setUserSelected, deleteUser } = useUsers();
  const { userAuthenticatedData } = useAuth();
  const { valueInputSearch } = useSelector(
    (state: RootState) => state.topBarReducer
  );
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);

  useEffect(() => {
    //para evitar multiplas requisições enquanto o usuário digita a busca
    debounce(getUsers, 500);
  }, [valueInputSearch]);

  const handleClickEditUser = (user: UserEntity) => {
    setUserSelected(user);
    setIsOpenModalRegister(true);
  };
  const handleDeleteUser = (user: UserEntity) => {
    if (userAuthenticatedData.role === KindOfUser.default) {
      toast.warn("Usuário sem permissão para essa ação, verifique");
      return;
    }
    deleteUser(user.id, () =>
      setTimeout(() => {
        /*
          ESSE TIMEOUT FOI COLOCADO POIS O SERVER EM PRODUÇÃO APOS UM POST/PUT/DELETE NÃO SEI POR QUAL MOTIVO, NÃO RESOLVE UM GET E RETORNA ERRO DESCONHECIDO.
          SENDO NECESSÁRIO ADICIONAR UM TIMEOUT PARA UM GET APÓS POST/PUT/DELET
        */
        getUsers();
      }, 1000)
    );
  };

  const gridColumnsDef: ColumnDef[] = [
    {
      label: "Usuário",
      fieldValue: "nome",
    },
    {
      label: "Tipo usuário",
      fieldValue: "tipoUsuario",
    },
    {
      label: "Usuário ativo",
      fieldValue: "ativo",
      valueFormatter: (data) => (data.ativo ? "Sim" : "Não"),
    },
  ];

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection={"column"}
      gap={"2rem"}
    >
      <Box
        width="100%"
        height={"min-content"}
        padding={"10px 20px"}
        display={"flex"}
        justifyContent={"space-between"}
        style={{ background: "#fff" }}
      >
        <Typography variant="h6" component="h6" fontWeight={"400"}>
          USUÁRIOS
        </Typography>
        <Box width="8rem">
          <Button
            isSecondary
            type="button"
            onClick={() => setIsOpenModalRegister(true)}
            disabled={userAuthenticatedData.role === KindOfUser.default}
          >
            CADASTRAR
          </Button>
        </Box>
      </Box>

      <Box height={"1rem"}>
        <Table
          actions={{
            edit: true,
            onClickEdit: handleClickEditUser,
            delete: true,
            onClickDelete: handleDeleteUser,
          }}
          columns={gridColumnsDef}
          rows={listOfUsers}
        />
      </Box>

      <Register
        isOpen={isOpenModalRegister}
        setIsOpen={setIsOpenModalRegister}
        isEditing={false}
      />
    </Box>
  );
};

export default Users;
