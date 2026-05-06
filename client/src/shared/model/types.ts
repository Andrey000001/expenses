import type { ButtonHTMLAttributes } from 'react';
import type React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

export type HeaderProps = {
  title: string;
  desc?: string;
  actions?: React.ReactNode;
  textButton?: string;
};
