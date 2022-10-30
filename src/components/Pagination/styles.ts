import styled from "styled-components";
import { Pagination } from "antd";

export const PaginationS = styled(Pagination)`
  a {
    background: #fff;
  }

  div,
  svg,
  span {
    color: ${(props) => props.theme.text};
  }
`;
