const { handler } = require('./index');

beforeEach(() => {
  jest.clearAllMocks();
});

test('Returns a well formed response 200', async () => {
  const result = await handler();

  expect(result).toEqual({
    body: '{"key3":"value3","key2":"value2","key1":"value1"}',
    headers: { my_header: 'my_value' },
    isBase64Encoded: false,
    statusCode: 200,
  });
});
