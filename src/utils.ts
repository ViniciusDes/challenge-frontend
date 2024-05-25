import { toast } from "react-toastify";

let timer: any;

export function debounce(callback: Function, timeout = 500) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
  }, timeout);
}

export async function sleep(delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
}

export const errorAlertMessage = (error: Error | any) => {
  const msg = `Erro: ${error?.message || error?.error || error}`;

  return toast.error(msg, { autoClose: 6000 });
};
