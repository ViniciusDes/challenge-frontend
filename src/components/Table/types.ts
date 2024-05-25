import { TableCellProps } from "@mui/material";

export interface TableProps {
  actions?: {
    edit?: boolean;
    onClickEdit?: (rowData: any) => void;
    delete?: boolean;
    onClickDelete?: (rowData: any) => void;
  };
  columns: ColumnDef[];
  rows: any[];
}

export interface ColumnDef extends TableCellProps {
  label: string | number;
  fieldValue: string;
  valueFormatter?: (rowData: any) => string;
}
