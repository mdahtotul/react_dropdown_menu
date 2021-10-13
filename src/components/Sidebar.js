import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
   background: #15171c;
   display: flex;
   height: 80px;
   justify-content: flex-start;
   align-items: center;
`;
const NavIcon = styled(Link)`
   margin-left: 2rem;
   font-size: 2rem;
   height: 80px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`;
const SidebarNav = styled.nav`
   background: #15171c;
   width: 250px;
   height: 100vh;
   display: flex;
   justify-content: center;
   position: fixed;
   top: 0;
   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
   transition: 350ms;
   z-index: 10;
`;
const SidebarWrap = styled.div`
   width: 100%;
`;

const Sidebar = () => {
   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);

   return (
      <>
         <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
               <NavIcon to="#">
                  <FaIcons.FaBars onClick={showSidebar} />
               </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
               <SidebarWrap>
                  <NavIcon to="#">
                     <AiIcons.AiOutlineClose onClick={showSidebar} />
                  </NavIcon>
                  {SidebarData.map((item, index) => {
                     return <SubMenu item={item} key={index}></SubMenu>;
                  })}
               </SidebarWrap>
            </SidebarNav>
         </IconContext.Provider>
      </>
   );
};

export default Sidebar;
