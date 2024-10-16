import NextAuth, {User, NextAuthConfig } from "next-auth";

export const BASE_PATH = "api/auth";

const authOptions: NextAuthConfig = {
    providers: [],
    basePath: BASE_PATH,
    secret: process.env.AUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)