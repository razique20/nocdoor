"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { shopsData } from "@/Data/ShopsData";
import { shopCategories } from "@/Data/CategoriesData";
import { productsData } from "@/Data/ProductsData";

const CategoryProductsPage = () => {
  const params = useParams();
  const shopName = decodeURIComponent(params.shopName);
  const categoryId = parseInt(params.categoryId);

  // Find the shop
  const shop = shopsData.find((s) => s.name === shopName);

  // Find category
  const category = shopCategories.find((cat) => cat.id === categoryId);

  // Filter products
  const filteredProducts = productsData.filter(
    (p) => p.shopId === shop.id && p.categoryId === categoryId
  );

  if (!shop || !category) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-bold">Category not found</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {category.name} at {shop.name}
        </h1>
        <p className="text-gray-600">
          Explore our collection of {category.name.toLowerCase()} products.
        </p>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="w-full h-40 relative mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold text-sm truncate">{product.name}</h3>
              <p className="text-gray-500 text-xs mt-1">⭐ {product.rating}</p>
              <p className="text-orange-600 font-bold mt-2">AED {product.price}</p>
              <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md text-sm hover:bg-orange-600">
                Book Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products available in this category.</p>
      )}
    </div>
  );
};

export default CategoryProductsPage;
