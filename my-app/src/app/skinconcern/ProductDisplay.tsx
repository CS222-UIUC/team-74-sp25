'use client'
import React from 'react';
import Image from 'next/image';

interface Product {
    name: string;
    activeIngredient: string;
    properties: string;
    description: string;
    link: string;
    imageSrc: string; // Image source for the product
    suitableFor: string; // Single skin type this product is suitable for
}

// Updated product data with one product per active ingredient per skin type
const productsByConcern: Record<string, Product[]> = {
    "Acne": [
        {
            name: "The Ordinary Retinol 1% in Squalane",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Targets fine lines, wrinkles, and uneven skin texture.",
            link: "https://arc.net/l/quote/zqqhhblt",
            imageSrc: "https://m.media-amazon.com/images/I/517xAVDCKYL._SX522_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "blah",
            activeIngredient: "Benzoyl Peroxide",
            properties: "An anti-acne antibiotic, helping to fight against excess skin bacteria and prevent inflammation that causes acne.",
            description: "Targets fine lines, wrinkles, and uneven skin texture.",
            link: "https://www.amazon.com/Rugby-Acne-Medication-42-5-Pack/dp/B00F5DFFYS/ref=sr_1_6_pp?crid=33S0KIIV1CBSC&dib=eyJ2IjoiMSJ9.rcNLpF_OllF_Kf4ys7LyPraNk28k77ariobFJZvvfoTqCxUOyGJkPJZom9HIfMBGW0vpuFTMvjSpzk6LFk8qRU0tgALnuMB-CqGUPOaOaApQUUjoHdT1OibxgphknXwXqM2w7VsotjxWpRuyDTd7FED9UtSWCQ2KekqhurvHPEVid14B5-lwaFHuiL3j_6RL7DMqnU5vJtFOfQG8TWLONcl_dvCCOgXxcx0dqgO69NzpCsNp90xJyrJkg_9Acs3ZFAWur61foazJd_IULbJGmw_nOhyFaAatYAblsTUCl_o.zyL0FxJqT5w7b_cAnchCjsmg6g9zBj7E3t7xY-eVs_E&dib_tag=se&keywords=benzoyl+peroxide&qid=1745526022&s=beauty&sprefix=benz%2Cbeauty%2C148&sr=1-6",
            imageSrc: "https://m.media-amazon.com/images/I/81LwHyd1WGL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "blah",
            activeIngredient: "Azelaic Acid",
            properties: "A naturally occurring acid found in yeast, it has strong antibacterial properties and can help to fight against acne and skin inflammation.",
            description: "Targets fine lines, wrinkles, and uneven skin texture.",
            link: "https://www.amazon.com/Paulas-Choice-BOOST-Azelaic-Licorice-Salicylic/dp/B00V4PNAI4/ref=sr_1_1_sspa?crid=2O81WL72NPLSJ&dib=eyJ2IjoiMSJ9.jkfuIobc0_EEtCS-6cz0tGAHSNNmxr2RTk_7ZgdMxLPGrb7Py4pdJPzxCAhCSWWH48eAnZG6kC1VNmG4cEGaDvh7wQC2jjuvjv_NsKGys7BpRvCpZAmgIEcm5tXlYNxqp4Px2X5zCMKPTC6fykBEwl0HWlOhZBwwwsgbIiq2RitFWwqXLX0OlpjB-VYzazQJbZIHzgp95qXYrqfr4k1jdyazmF41R_D4fOubmcoAEPA6PdSiAjcygj8D03xhgDdXH0mv2VZJUHGsfPgsC2etKodyFtAMHvsWYFnPY4pMo3w.iwzsI0CVw-GPRMIh6pvrniJo-3dj0TRErb4A9386zUM&dib_tag=se&keywords=Azelaic%2BAcid&qid=1745526375&s=beauty&sprefix=azelaic%2Bacid%2Cbeauty%2C153&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://m.media-amazon.com/images/I/312fOY15bOL._SY445_SX342_QL70_FMwebp_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "...",
            activeIngredient: "Benzoyl Peroxide",
            properties: "An anti-acne antibiotic, helping to fight against excess skin bacteria and prevent inflammation that causes acne.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Combination"
        },
        {
            name: "...",
            activeIngredient: "Azelaic Acid",
            properties: "A naturally occurring acid found in yeast, it has strong antibacterial properties and can help to fight against acne and skin inflammation.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Dry"
        }
    ],
    "Aging": [
        {
            name: "...",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Dry"
        },
        {
            name: "...",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Oily"
        },
        {
            name: "...",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Sensitive"
        }
    ],
    "Hyperpigmentation": [
        {
            name: "...",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Combination"
        },
        {
            name: "...",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Oily"
        },
        {
            name: "...",
            activeIngredient: "Hydroquinone",
            properties: "A depigmentation agent that helps to inhibit the production of melanin wherever it's applied.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Dry"
        }
    ],
    "Sensitivity": [
        {
            name: "...",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Dry"
        },
        {
            name: "...",
            activeIngredient: "Aloe Vera",
            properties: "Known for its soothing and calming properties, it can reduce irritation and redness while supporting skin repair.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Oily"
        },
        {
            name: "...",
            activeIngredient: "Ceramides",
            properties: "Essential lipids that help strengthen the skin's natural barrier, protecting against external irritants and locking in moisture.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Combination"
        }
    ],
    "Dullness": [
        {
            name: "...",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Oily"
        },
        {
            name: "...",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Dry"
        },
        {
            name: "...",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Combination"
        }
    ],
    "Uneven Texture": [
        {
            name: "...",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Oily"
        },
        {
            name: "...",
            activeIngredient: "AHA",
            properties: "A chemical exfoliant that removes dead skin cells and improves the appearance of uneven texture, leaving the skin smoother.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Combination"
        },
        {
            name: "...",
            activeIngredient: "Peptides",
            properties: "Boost collagen production, enhancing firmness and promoting even texture.",
            description: "...",
            link: "...",
            imageSrc: "...",
            suitableFor: "Dry"
        }
    ]
};

interface ProductDisplayProps {
    concern: string;
    skinType: string | null;
}

export default function ProductDisplay({ concern, skinType }: ProductDisplayProps) {
    // Get all products for the selected concern
    const allProducts = productsByConcern[concern] || [];
    
    // Filter products by skin type
    const filteredProducts = skinType 
        ? allProducts.filter(product => product.suitableFor === skinType)
        : allProducts;
    
    if (filteredProducts.length === 0) {
        return (
            <div className="text-center p-8">
                <p className="text-gray-700">No specific active ingredients found for {concern} with {skinType} skin type. Here are general recommendations:</p>
                <div className="mt-4">
                    {allProducts.map((product, index) => (
                        <div key={index} className="mb-2">
                            <span className="font-semibold">{product.activeIngredient}</span> - Best for {product.suitableFor} skin
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="mt-8">
            <h2 className="font-bold text-3xl text-sky-600 mb-6 text-center">
                Recommended for {concern} with {skinType} Skin
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {filteredProducts.map((product, index) => (
                    <div className="flex justify-center" key={index}>
                        <div className=" bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                            <div className="flex justify-center mb-4">
                                <div className="w-32 h-32 relative">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.activeIngredient}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            </div>
                            
                            <h3 className="font-bold text-xl text-center mb-2">{product.activeIngredient}</h3>
                            
                            <div className="bg-gray-100 p-4 rounded-md mt-3">
                                <p className="font-semibold text-sky-700 mb-1">Product: {product.name}</p>
                                <p className="text-sm mb-2">{product.properties}</p>
                                <p className="text-sm">{product.description}</p>
                                <p className="text-sm mt-2 italic">Best for: {product.suitableFor} skin</p>
                                <a 
                                    href={product.link} 
                                    className="text-sky-600 hover:text-sky-800 underline mt-2 block text-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Product
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}