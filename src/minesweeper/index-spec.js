import minesweeper from './index.js';

const default_row_count = 16;
const default_column_count = 30;

describe('minesweeper', () => {
  it('should have initial state for default game', () => {
    const game = minesweeper();
    assert.equal(default_row_count, game.row_count);
    assert.equal(default_column_count, game.column_count);
    assert.equal(false, game.finished());
  });

  it('should have initial state for configured game', () => {
    const row_count = 1;
    const column_count = 2;
    const game = minesweeper({row_count: row_count, column_count: column_count});
    assert.equal(row_count, game.row_count);
    assert.equal(column_count, game.column_count);
    assert.equal(false, game.finished());
  });
});