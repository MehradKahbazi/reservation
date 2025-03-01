import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./initdb";
import { cookies } from "next/headers";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});
const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (attributes) =>{
    return {
      role: attributes.role
    }
  }
});

export const createAuthSession = async (userId) => {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  const c1 = await cookies()
  c1.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
};

export const verifyAuth = async() =>{
    const sessionCookie = (await cookies()).get(lucia.sessionCookieName)

    if(!sessionCookie){
        return{
            user: null,
            session: null
        }
    }

    const sessionId = sessionCookie.value;

    if(!sessionId){
        return{
            user: null,
            session: null
        }
    }

    const result = await lucia.validateSession(sessionId);

    try{
        if(result.session && result.session.fresh){
            const sessionCookie = lucia.createSessionCookie(result.session.id)
            const c1 = await cookies();
            c1.set(
              sessionCookie.name,
              sessionCookie.value,
              sessionCookie.attributes
            );
        }
        if(!result.session){
            const sessionCookie = lucia.createBlankSessionCookie();
            const c1 = await cookies();
            c1.set(
              sessionCookie.name,
              sessionCookie.value,
              sessionCookie.attributes
            );
        }
    } catch {}
    
    return result;
}

export const destroySession = async() =>{
  const {session} = await verifyAuth();
  if(!session){
    return {
      error: 'unauthorized'
    }
  }
  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
            const c1 = await cookies();
            c1.set(
              sessionCookie.name,
              sessionCookie.value,
              sessionCookie.attributes
            );
}