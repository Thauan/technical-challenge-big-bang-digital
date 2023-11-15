import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Logo } from 'components/logo';
import { SidebarItem } from 'components/sidebar-item';
import { FaHouseUser, FaProjectDiagram, FaUsers, FaPeopleArrows, FaBell } from "react-icons/fa";
import useDeviceDetect from "utils/useDeviceDetect";
import 'assets/stylesheets/sidebar.scss'

const menus = [
    {
        name: "Painel",
        icon: <FaHouseUser />,
    },
    {
        name: "Projetos",
        icon: <FaProjectDiagram />,
    },
    {
        name: "Leads",
        icon: <FaUsers />,
    },
    {
        name: "Campanhas",
        icon: <FaPeopleArrows />,
    },  
    {
        name: "Notificações",
        icon: <FaBell />,
    },
];

const Sidebar: React.FC = () => {
  const { isMobile } = useDeviceDetect();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if(isMobile) setOpen(false);
  }, [isMobile]);

  return (
    <div id="nav-bar" className={clsx({
        'opened': open,
        'closed': !open
    })}>
    <div id="nav-header" className={clsx({
        'opened': open,
        'closed': !open
    })}>
        {open && <Logo />}
        {!isMobile && <button className='nav-toggle' onClick={() => setOpen(!open)}>{open ? "<" : ">"}</button>}
        <hr/>
    </div>
    <div id="nav-content">
        {menus.map((item) => (
            <SidebarItem 
                title={item.name}
                icon={item.icon}
                openSidebar={open}
            />
        ))}
    </div>
    <div id="nav-footer">
        <div id="nav-footer-heading">
        <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"/></div>
        <div id="nav-footer-titlebox">
            {open && (
                <>                
                <a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank" rel="noreferrer">
                    Usúario de Teste
                </a>
                <span id="nav-footer-subtitle">teste@teste.com.br</span>
                </>
            )}
        </div>
        </div>
        <div id="nav-footer-content">
        </div>
    </div>
    </div>
  );
}

export { Sidebar };