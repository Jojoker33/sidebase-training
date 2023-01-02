import {initTRPC} from "@trpc/server";

// initTRPC which is a builder for our tRPC handler, and creating an instance called t with initTRPC.create();
const trpcInstance  = initTRPC.create();


//Base router and procedure helpers
// exporting the router and public procedure as our own variables. This is mainly to avoid conflicts in global namespace for example with i18n libraries
export const router = trpcInstance.router;
export const publicProcedure = trpcInstance.procedure;
