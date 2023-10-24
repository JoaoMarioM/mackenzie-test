import { ReactNode } from 'react';

export type CardProps = {
  text: string;
  image: string;
  button?: boolean;
  className: string;
  children?: ReactNode
  classNameImage?: string;
}