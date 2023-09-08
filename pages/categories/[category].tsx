import React from "react";
import NavigationCategory from "@/src/components/pages/category/NavigationCategory";

export default function CategoryPage({ category }: { category: string }) {
  return (
    <div>
      <NavigationCategory />
      <h1></h1>
    </div>
  );
}

export async function getServerSideProps({ params }: { params: { category: string } }) {
  const { category } = params;

  // Lakukan pengambilan data dari database atau API berdasarkan slug
  // ...

  return {
    props: {
      category,
    },
  };
}
