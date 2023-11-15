import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface SidebarItemProps {
    title: string;
    openSidebar?: boolean;
    icon?: ReactElement;
}

const SidebarItem = ({ title, openSidebar, icon }: SidebarItemProps) => {
  return (
    <div className={clsx("nav-button", { opened: openSidebar })}>
        {icon && !openSidebar && <div className={clsx({ 'opened': openSidebar })}>{icon}</div>}
        {openSidebar && <span>{title}</span>}
    </div>
  );
}

export { SidebarItem };