// Metadata in Next can be static and dynamic

// Static Metadata
// * export const metadata = {
// *   title: "Home",
// * };

// * // Output:
// * // <head>
// * // <title>Home</title>
// * // </head >

// */ * export default function Page() {
// *   return <h1>My Normal Next.js with Static Metadata</h1>;
// * }

// Dynamic Metadata

// *  export async function generateMetadata({ params, searchParams }) {
// *    const product = await getProduct([params.id]);
// *    return { title: product.title };
// *  }

// *  export default function Page() {
// *    return <h1>My Normal Next.js with Dynamic Metadata</h1>;
// *  }

