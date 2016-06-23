const default_row_count = 16;
const default_column_count = 30;
const default_mine_count = 99;

const minesweeper = (options) => {
  const configuration = options || {};
  const row_count = configuration.row_count || default_row_count;
  const column_count = configuration.column_count || default_column_count;
  const mine_count = configuration.mine_count || default_mine_count;
  const finished = () => false;
  return {
    row_count: row_count,
    column_count: column_count,
    mine_count: mine_count,
    finished: finished
  };
};

export default minesweeper;
