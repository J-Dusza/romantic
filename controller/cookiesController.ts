"use server";
import { setCookie } from "cookies-next";

export async function setCookieValue(
  name: string,
  value: string,
  options: any
) {
  setCookie(name, value, options);
}
