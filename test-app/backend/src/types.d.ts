import { IncomingHttpHeaders } from 'http';

declare module 'node:http' {
  interface IncomingMessage {
    requestId?: string;
    headers: IncomingHttpHeaders;
  }
}

declare module 'http' {
  interface IncomingHttpHeaders {
    'x-request-id'?: string;
  }
}
