import { twJoin, ClassNameValue } from "tailwind-merge";
import { cva as _cva } from "class-variance-authority";

export const cn = (...className: ClassNameValue[]) => twJoin(...className);

export const cva = _cva;