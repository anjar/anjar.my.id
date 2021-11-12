/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  withIronSession, Session,
} from 'next-iron-session';
import { NextApiRequest, NextApiResponse } from 'next';

const secretKey = process.env.SECRET_COOKIE_PASSWORD || 'radnomsecretkey';
// optionally add stronger typing for next-specific implementation
export type NextIronRequest = NextApiRequest & { session: Session };
export type NextIronHandler = (
  req: NextIronRequest,
  res: NextApiResponse,
) => void | Promise<void>;

const withSession = (handler: NextIronHandler) => withIronSession(handler, {
  password: secretKey,
  cookieName: 'afk-wp',
  cookieOptions: {
    // the next line allows to use the session in non-https environments like
    // Next.js dev mode (http://localhost:3000)
    secure: process.env.NODE_ENV === 'production',
  },
});

export default withSession;
