import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    if(!cookies['@authme.token']) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
    
    try {
      return await fn(ctx)
    } catch (err) {
      if(err instanceof AuthTokenError) {
        destroyCookie(ctx, '@authme.token')
        destroyCookie(ctx, '@authme.refreshToken')
  
        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }
    }
  }
}