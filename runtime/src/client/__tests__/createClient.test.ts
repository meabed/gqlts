import { beforeEach, describe, expect, it, mock } from 'bun:test';

const subscribe = mock(() => mock(() => {}));
const createClientMock = mock(() => ({ subscribe }));

mock.module('graphql-ws', () => ({
  createClient: createClientMock,
}));

import { createClient as createWSClient } from 'graphql-ws';

import type { LinkedType } from '../../types';
import { createClient } from '../createClient';

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
    createClientMock.mockClear();
    subscribe.mockClear();
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

  it('does not pass invalid explicit WebSocket values during SSR', () => {
    const client = createClient({
      url: 'http://example.test/graphql',
      subscriptionRoot,
      webSocketImpl: {},
    });

    client.subscription?.({ ping: true });

    expect(createWSClient).toHaveBeenCalledWith(
      expect.not.objectContaining({
        webSocketImpl: expect.anything(),
      }),
    );
  });
});
