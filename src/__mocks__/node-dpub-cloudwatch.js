const mockIncrement = jest.fn();
const mockFlush = jest.fn();

const createMonitor = jest.fn().mockImplementation(() => ({
  increment: mockIncrement,
  flush: mockFlush,
}));

module.exports = {
  createMonitor,
  mockIncrement,
  mockFlush,
};
