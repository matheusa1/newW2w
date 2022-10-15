import styled, { css } from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px 0 0;

  @media (min-width: 550px) {
    padding: 14px 40px 0;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;

  @media (min-width: 550px) {
    width: 100%;
    justify-content: start;
    gap: 40px;
  }
`;

export const Logo = styled(Link)`
  all: unset;
  font-size: 24px;
  font-weight: 400;
  font-family: Margarine;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 550px) {
    font-size: 48px;
    line-height: 65px;
  }
`;

export const HeaderItem = styled(Link)`
  all: unset;
  display: flex;
  align-items: center;

  :hover {
    opacity: 0.7;
  }

  cursor: pointer;
`;

export const HeaderName = styled.span`
  display: none;

  @media (min-width: 550px) {
    display: inline;
    font-size: 24px;
    font-weight: 400;
  }
`;

const iconCSS = css`
  width: 24px;
  height: 24px;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const CategoryIcon = styled(BiCategoryAlt)`
  ${iconCSS}
`;

export const SearchIcon = styled(AiOutlineSearch)`
  ${iconCSS}
`;

export const MenuIcon = styled(HiMenu)`
  width: 30px;
  height: 30px;
`;

export const Root = styled(Dialog.Root)`
  all: unset;
`;

export const Trigger = styled(Dialog.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Portal = styled(Dialog.Portal)`
  /* all: unset; */
`;

export const Overlay = styled(Dialog.Overlay)`
  all: unset;
  position: fixed;
  inset: 0;
  background: #000;
  opacity: 0.3;
`;

export const Content = styled(Dialog.Content)`
  all: unset;

  background: ${({ theme }: any) => theme.menuColor};
  color: ${({ theme }: any) => theme.text};

  position: fixed;
  top: 0;
  right: 0;

  min-width: 50vw;
  max-height: 100vh;
  min-height: 95vh;

  @media (min-width: 550px) {
    min-width: 300px;
    width: 300px;
  }

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  overflow: auto;

  padding: 25px;
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileData = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #c4c4c4;

  border-radius: 9999px;

  padding: 10px;
`;

export const AvatarIcon = styled(FaUserTie)`
  width: 40px;
  height: 40px;

  fill: #343434;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const ProfileName = styled.span`
  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;
`;

export const ProfileEdit = styled(Link)`
  all: unset;
  font-weight: 400;
  font-size: 16px;
  color: #0085ff;

  cursor: pointer;
`;

export const MidSide = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 20px;

  margin-top: 40px;
`;

export const MenuItem = styled(Link)`
  all: unset;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;

  cursor: pointer;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }: any) => theme.text};
  opacity: 0.2;
`;

export const MenuButton = styled.button`
  all: unset;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;

  cursor: pointer;
`;

export const BottomSide = styled.div``;

export const Close = styled(Dialog.Close)`
  all: unset;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;

  cursor: pointer;
`;

export const NotLogged = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 10px;
`;

export const Login = styled(Link)`
  all: unset;

  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
`;
export const CreateAccount = styled(Link)`
  all: unset;

  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;
  color: #0085ff;

  cursor: pointer;
`;
