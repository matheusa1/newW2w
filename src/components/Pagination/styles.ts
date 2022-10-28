import styled from "styled-components";
import { Pagination } from "antd";

export const PaginationS = styled(Pagination)`
  a {
    background: #fff;
  }

  div {
    color: ${(props) => props.theme.text};
  }

  svg {
    color: white;
  }
`;
