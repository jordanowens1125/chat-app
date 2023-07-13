//protect entire project since we did not provide a defined matcher
export { default } from "next-auth/middleware";

// Example of a defined matcher
// export const config = { matcher: ["/chats"] };