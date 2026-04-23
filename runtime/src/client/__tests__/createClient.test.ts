jest.mock('graphql-ws', () => ({
  createClient: jest.fn(() => ({
    subscribe: jest.fn(() => jest.fn()),
  })),
}));

import { createClient as createWSClient } from 'graphql-ws';
import { createClient } from '../createClient';
import type { LinkedType } from '../../types';

class BunLikeWebSocket {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;
}

const subscriptionRoot: LinkedType = {
  name: 'Subscription',
  fields: {
    ping: {
      type: {
        name: 'String',
      },
    },
  },
};

describe('createClient subscriptions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('passes explicit WebSocket implementations outside the browser', () => {
    const client = createClient({
      url: 'http://example.test/graphql',
      subscriptionRoot,
      webSocketImpl: BunLikeWebSocket,
    });

    client.subscription?.({ ping: true });

    expect(createWSClient).toHaveBeenCalledWith(
      expect.objectContaining({
        url: 'ws://example.test/graphql',
        webSocketImpl: BunLikeWebSocket,
      }),
    );
  });
});
