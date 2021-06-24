const { createMonitor } = require('@bbc/node-dpub-cloudwatch');

/* istanbul ignore next */
const environment = process.env.ENVIRONMENT || 'dev';

const monitor = createMonitor({
  serviceName: 'genesis-skeleton',
  environment,
  onError: console.error,
});

exports.handler = async (event) => {
  console.log('Handling the following event: ', event);
  monitor.increment('handle-request');

  const responseBody = {
    key3: 'value3',
    key2: 'value2',
    key1: 'value1',
  };

  await monitor.flush();

  return {
    statusCode: 200,
    headers: {
      my_header: 'my_value',
    },
    body: JSON.stringify(responseBody),
    isBase64Encoded: false,
  };
};
