import type React from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface SidebarContextType {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}
export type SidebarNavItem = {
  to: string;
  icon: React.ReactNode;
  text: string;
};
export interface SidebarNavListProps {
  items: SidebarNavItem[];
}

export type SupportCardProps = {
  iconSupport: React.ReactNode;
  iconClose: React.ReactNode;
};
