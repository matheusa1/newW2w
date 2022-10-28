import type { PaginationProps } from "antd";
import "antd/lib/pagination/style/index.css";
import * as S from "./styles";

export interface PaginationWrapper {
  total: number;
  defaultCurrent: number;
  showSizeChanger: boolean;
  defaultPageSize: number;
  setPage: (page: number) => void;
}

const PaginationWrapper = (props: PaginationWrapper) => {
  return (
    <S.PaginationS
      defaultCurrent={props.defaultCurrent}
      total={props.total}
      showSizeChanger={props.showSizeChanger}
      defaultPageSize={props.defaultPageSize}
      hideOnSinglePage
      // responsive
      onChange={props.setPage}
      showQuickJumper
      size="small"
    />
  );
};

export default PaginationWrapper;
