import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import "antd/lib/pagination/style/index.css";

export interface PaginationWrapper {
  total: number;
  defaultCurrent: number;
  showSizeChanger: boolean;
  defaultPageSize: number;
  setPage: (page: number) => void;
}

const PaginationWrapper = (props: PaginationWrapper) => {
  return (
    <Pagination
      defaultCurrent={props.defaultCurrent}
      total={props.total}
      showSizeChanger={props.showSizeChanger}
      defaultPageSize={props.defaultPageSize}
      hideOnSinglePage
      responsive
      onChange={props.setPage}
    />
  );
};

export default PaginationWrapper;
