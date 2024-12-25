import prisma from '@/lib/prisma'
import type { NextAuthOptions } from 'next-auth'
import GOOGLEPROVIDER from 'next-auth/providers/google'

export const options: NextAuthOptions = {
    providers: [
        GOOGLEPROVIDER({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
        }),
    ],
    callbacks: {
        async signIn(params: any) {
            if (params.account?.provider === "google") {
                return params.profile?.email_verified
            }
            return true;
        },

        async jwt(params) {
            return params.token
        },

        async session(params) {
            if (params.session?.user) {
                const findUser = await prisma.user.findFirst({ where: { email: params?.session?.user?.email } })
                if (findUser) {
                    params.session.user = { ...params.session.user, ...findUser }
                    params.token = { ...params.token, ...findUser }
                    return params.session
                }
                const createUser = await prisma.user.create({
                    data: {
                        email: params.session?.user?.email,
                        image: params.session?.user?.image,
                        name: params.session?.user?.name
                    }
                })
                if (createUser) {
                    params.token = { ...params.token, ...createUser }
                    params.session.user = { ...params.session.user, ...createUser }
                }
            }
            return params.session
        },
    },
    pages: {
        // signIn: "/signin",
        // signOut: "/auth/signout",
        // error: "/auth/error",
        // verifyRequest: "/auth/verify-request",
        // newUser: "/auth/new-user"
    },
    

}

/*
Account: {
  "provider":"google",
  "type":"oauth",
  "providerAccountId":"111785179855800079614",
  "access_token":"ya29.a0Ad52N39PlCDxJRWRh8J79uMmdOxJEFyHSbsbtef_GwkfHtG5umiBfuMaZYWL_3biXESKxhejRbtBwsFd_gyAqjU8SXun5OeDg_ZWW8j_zggTHvsbui9FoAaaSWXdDTuGBGsRg17aIWIk0BMc5OTH2pLTNHRZOeqBUJXHaCgYKAT8SARASFQHGX2MifldDmy8qyL-LC2E6zsppLg0171",
  "expires_at":1711050059,
  "refresh_token":"1//0gpqIiLEtf5-nCgYIARAAGBASNwF-L9IrW_RM8fbHWqfibOYS4KApuYyQOFrFh9NcrBk7Ks6SNALReJqIc6h4JnVTMPIHL0HoRkM",
  "scope":"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
  "token_type":"Bearer",
  "id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjA5YmNmODAyOGUwNjUzN2Q0ZDNhZTRkODRmNWM1YmFiY2YyYzBmMGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MTM2NzcyNzQwNDctODJ1Z2Zma2hiM3ZzYzduMjRtdmlpMHJqMzc2OWxmZDguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MTM2NzcyNzQwNDctODJ1Z2Zma2hiM3ZzYzduMjRtdmlpMHJqMzc2OWxmZDguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTE3ODUxNzk4NTU4MDAwNzk2MTQiLCJlbWFpbCI6Im1kbWVoZWRpaGFzYW4yMzYwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiR01hOFJvTUg1dXBsZ2N6c05VTmxaUSIsIm5hbWUiOiJNZCBNZWhlZGkgSGFzYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSV9ScVYybndMbnZVdzlBV3pYMlpHRkJuWVVCS2xvSVRvX1VWaUpwMkNaSnc9czk2LWMiLCJnaXZlbl9uYW1lIjoiTWQgTWVoZWRpIiwiZmFtaWx5X25hbWUiOiJIYXNhbiIsImlhdCI6MTcxMTA0NjQ2MywiZXhwIjoxNzExMDUwMDYzfQ.NizJ9XAivbyCZUTOUnCAezk1pQzEuyLu40ZowGYrR7lDJOtIymTySy_wJWhNbpKj742lF5KSyohCXL294bt8fqNyD5vMWvBU6sFk8nvQPomljzNqNT5pYtg0VT7FQRTxvrBWt69kr6WvRiSRB3bOlYfLyWfe3PLVdgHsO9OZ4RT34kMn-R_Hb6bvGMW11vj6u8bGu1rp1tbZ26eTLv58NOE_SYEMTNoDEW-5UmVK3BaWP8z1oARlBNC77C1YAv6wUS1U4jPKi1d8J3vhdNI7W8vceSVqWKYqqVoUXw7q-QfCKzx2C8qj2sWkLk53UmG_0krb8662h0glR8XsfrVTvg"
}

Profile: {
  iss: 'https://accounts.google.com',
  azp: '413677274047-82ugffkhb3vsc7n24mvii0rj3769lfd8.apps.googleusercontent.com',
  aud: '413677274047-82ugffkhb3vsc7n24mvii0rj3769lfd8.apps.googleusercontent.com',
  sub: '111785179855800079614',
  email: 'mdmehedihasan2360@gmail.com',
  email_verified: true,
  at_hash: 'GMa8RoMH5uplgczsNUNlZQ',
  name: 'Md Mehedi Hasan',
  picture: 'https://lh3.googleusercontent.com/a/ACg8ocI_RqV2nwLnvUw9AWzX2ZGFBnYUBKloITo_UViJp2CZJw=s96-c',
  given_name: 'Md Mehedi',
  family_name: 'Hasan',
  iat: 1711046463,
  exp: 1711050063
}

*/