'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
    name: string;
    activeIngredient: string;
    properties: string;
    description: string;
    imageSrc: string;
}

// Sample product data organized by skin concern
const productsByConcern: Record<string, Product[]> = {
    "Acne": [
        {
            name: "...",
            activeIngredient: "Retinol",
            properties: "...",
            description: "...",
            imageSrc: "/product-placeholder.webp"
        },
        {
            name: "...",
            activeIngredient: "Benzoyl Peroxide",
            properties: "...",
            description: "...",
            imageSrc: "/product-placeholder.webp"
        },
        {
            name: "...",
            activeIngredient: "Azelaic Acid",
            properties: "...",
            description: "...",
            imageSrc: "/product-placeholder.webp"
        }
    ],
    // Other concern categories would be filled with their corresponding products
    "Aging": [],
    "Hyperpigmentation": [],
    "Sensitivity": [],
    "Dullness": [],
    "Uneven Texture": []
};

export default function ProductDisplay({ concern }: { concern: string }) {
    const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);
    
    const products = productsByConcern[concern] || [];
    
    if (products.length === 0) {
        return (
            <div className="text-center p-8">
                <p className="text-gray-700">No products available for this concern yet.</p>
            </div>
        );
    }
    
    return (
        <div className="mt-8">
            <h2 className="font-bold text-3xl text-sky-600 mb-6 text-center">Recommended Products for {concern}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div 
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        onMouseEnter={() => setHoveredProduct(product)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
                        <div className="flex justify-center mb-4">
                            <div className="w-32 h-32 relative">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                        </div>
                        
                        <h3 className="font-bold text-xl text-center mb-2">{product.name}</h3>
                        
                        {hoveredProduct === product && (
                            <div className="bg-gray-100 p-4 rounded-md mt-3 transition-opacity duration-150">
                                <p className="font-semibold text-sky-700 mb-1">Active Ingredient: {product.activeIngredient}</p>
                                <p className="text-sm mb-2">{product.properties}</p>
                                <p className="text-sm">{product.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}