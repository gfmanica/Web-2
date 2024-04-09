// import { withAuth } from 'next-auth/middleware';

// export default withAuth({
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     authorized: ({ req, token }) => {
//       console.log(token);
//       return Boolean(token);
//     },
//   },
// });

export { default } from 'next-auth/middleware';
