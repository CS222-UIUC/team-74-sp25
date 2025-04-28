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

        //Retinol
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
            name: "The Ordinary Granactive Retinoid 2%",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Targets visible signs of aging, including fine lines and wrinkles, while improving skin texture and tone.",
            link: "https://www.amazon.com/dp/B071HHSMTT?ref=nb_sb_ss_w_as-reorder_k0_1_6&amp=&crid=2ALWULI4RNEUO&amp=&sprefix=granac",
            imageSrc: "https://a.media-amazon.com/images/I/51QK4sLpGjL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Differin Acne Treatment Gel",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Clears acne by normalizing skin cell turnover.",
            link: "https://www.amazon.com/Differin-Adapalene-0-1-Acne-Treatment/dp/B07L1PHSY9?ref_=ast_sto_dp&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71VRnfHGbEL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "CeraVe Resurfacing Retinol Serum",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Minimizes pores to improve skin texture and reduce post-acne marks and blemishes.",
            link: "https://www.amazon.com/CeraVe-Post-Acne-Refining-Resurfacing-Brightening/dp/B07VWSN95S/ref=sr_1_6_pp?crid=2H9A8BAUV32RU&dib=eyJ2IjoiMSJ9.2uaTQPpLxNMKHeBOmitm3R3cn0vHlA39tklRpFtvzDWYLgy-uzpzBNiNmOKR_9ao6KMQz4f_mCLazZYFXQfB3y2yLEsLgAcxKtGhETzEulr62SXqzNfQoepg6vnwdO3CTnYXuoby7Lib2iXM1223kL4OPaPeenUi888CL_7Nz3xEfqY_HGmBzVO_XjAcJA3cFrF52UNaAP85iVgx7inyASzWTMhCW9Aodyb1yFCePHbXVayaoMGL0oOFON3gzLOtIBvXrthoP_A6OhCnF6G4u0vXwxyUbOdZXIi_SDU8o1g.PLLGmxMn8VN-c9WqfK8PUIh0BuojctPjWtGtIACuncY&dib_tag=se&keywords=cerave+retinol&qid=1745525452&s=beauty&sprefix=cer%2Cbeauty%2C150&sr=1-6",
            imageSrc: "https://a.media-amazon.com/images/I/71zvPJqU7FL._SL1500_.jpg",
            suitableFor: "Combination"
        },


        //Benzoyl Peroxide
        {
            name: "Rugby Acne Medication",
            activeIngredient: "Benzoyl Peroxide",
            properties: "An anti-acne antibiotic, helping to fight against excess skin bacteria and prevent inflammation that causes acne.",
            description: "Helps dry oily skin and clear up acne pimples.",
            link: "https://www.amazon.com/Rugby-Acne-Medication-42-5-Pack/dp/B00F5DFFYS/ref=sr_1_6_pp?crid=33S0KIIV1CBSC&dib=eyJ2IjoiMSJ9.rcNLpF_OllF_Kf4ys7LyPraNk28k77ariobFJZvvfoTqCxUOyGJkPJZom9HIfMBGW0vpuFTMvjSpzk6LFk8qRU0tgALnuMB-CqGUPOaOaApQUUjoHdT1OibxgphknXwXqM2w7VsotjxWpRuyDTd7FED9UtSWCQ2KekqhurvHPEVid14B5-lwaFHuiL3j_6RL7DMqnU5vJtFOfQG8TWLONcl_dvCCOgXxcx0dqgO69NzpCsNp90xJyrJkg_9Acs3ZFAWur61foazJd_IULbJGmw_nOhyFaAatYAblsTUCl_o.zyL0FxJqT5w7b_cAnchCjsmg6g9zBj7E3t7xY-eVs_E&dib_tag=se&keywords=benzoyl+peroxide&qid=1745526022&s=beauty&sprefix=benz%2Cbeauty%2C148&sr=1-6",
            imageSrc: "https://m.media-amazon.com/images/I/81LwHyd1WGL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "Paula's Choice CLEAR",
            activeIngredient: "Benzoyl Peroxide",
            properties: "An anti-acne antibiotic, helping to fight against excess skin bacteria and prevent inflammation that causes acne.",
            description: "Helps fight & prevent stubborn, persistent breakouts. Oil-free, hydrating formula minimizes dryness & peeling.",
            link: "https://www.amazon.com/Paulas-Choice-Strength-Clearing-Treatment/dp/B00L5O4IRG/ref=sr_1_3_sspa?crid=33S0KIIV1CBSC&dib=eyJ2IjoiMSJ9.rcNLpF_OllF_Kf4ys7LyPraNk28k77ariobFJZvvfoTqCxUOyGJkPJZom9HIfMBGW0vpuFTMvjSpzk6LFk8qRU0tgALnuMB-CqGUPOaOaApQUUjoHdT1OibxgphknXwXqM2w7VsotjxWpRuyDTd7FED9UtSWCQ2KekqhurvHPEVid14B5-lwaFHuiL3j_6RL7DMqnU5vJtFOfQG8TWLONcl_dvCCOgXxcx0dqgO69NzpCsNp90xJyrJkg_9Acs3ZFAWur61foazJd_IULbJGmw_nOhyFaAatYAblsTUCl_o.zyL0FxJqT5w7b_cAnchCjsmg6g9zBj7E3t7xY-eVs_E&dib_tag=se&keywords=benzoyl%2Bperoxide&qid=1745526022&s=beauty&sprefix=benz%2Cbeauty%2C148&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61t9RoEENUL._SL1500_.jpg",
            suitableFor: "Dry"
        }, 
        {
            name: "Paula's Choice CLEAR",
            activeIngredient: "Benzoyl Peroxide",
            properties: "An anti-acne antibiotic, helping to fight against excess skin bacteria and prevent inflammation that causes acne.",
            description: "Helps fight & prevent stubborn, persistent breakouts. Oil-free, hydrating formula minimizes dryness & peeling.",
            link: "https://www.amazon.com/Paulas-Choice-Strength-Clearing-Treatment/dp/B00L5O4IRG/ref=sr_1_3_sspa?crid=33S0KIIV1CBSC&dib=eyJ2IjoiMSJ9.rcNLpF_OllF_Kf4ys7LyPraNk28k77ariobFJZvvfoTqCxUOyGJkPJZom9HIfMBGW0vpuFTMvjSpzk6LFk8qRU0tgALnuMB-CqGUPOaOaApQUUjoHdT1OibxgphknXwXqM2w7VsotjxWpRuyDTd7FED9UtSWCQ2KekqhurvHPEVid14B5-lwaFHuiL3j_6RL7DMqnU5vJtFOfQG8TWLONcl_dvCCOgXxcx0dqgO69NzpCsNp90xJyrJkg_9Acs3ZFAWur61foazJd_IULbJGmw_nOhyFaAatYAblsTUCl_o.zyL0FxJqT5w7b_cAnchCjsmg6g9zBj7E3t7xY-eVs_E&dib_tag=se&keywords=benzoyl%2Bperoxide&qid=1745526022&s=beauty&sprefix=benz%2Cbeauty%2C148&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61t9RoEENUL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "Neutrogena Rapid Clear Stubborn Acne Spot Treatment Gel",
            activeIngredient: "Benzoyl Peroxide",
            properties: "Clinically proven to rapidly reduce size and redness of stubborn acne in just 2 hours. It’s formulated with maximum strength Benzoyl Peroxide acne medicine, which is recommended most by dermatologists for clearer skin, without a prescription.",
            description: "Helps dry oily skin and clear up acne pimples.",
            link: "https://www.amazon.com/Neutrogena-Stubborn-Treatment-Maximum-Strength-Acne-Prone/dp/B00NR1YVYU/ref=sr_1_2_sspa?crid=33S0KIIV1CBSC&dib=eyJ2IjoiMSJ9.rcNLpF_OllF_Kf4ys7LyPraNk28k77ariobFJZvvfoTqCxUOyGJkPJZom9HIfMBGW0vpuFTMvjSpzk6LFk8qRU0tgALnuMB-CqGUPOaOaApQUUjoHdT1OibxgphknXwXqM2w7VsotjxWpRuyDTd7FED9UtSWCQ2KekqhurvHPEVid14B5-lwaFHuiL3j_6RL7DMqnU5vJtFOfQG8TWLONcl_dvCCOgXxcx0dqgO69NzpCsNp90xJyrJkg_9Acs3ZFAWur61foazJd_IULbJGmw_nOhyFaAatYAblsTUCl_o.zyL0FxJqT5w7b_cAnchCjsmg6g9zBj7E3t7xY-eVs_E&dib_tag=se&keywords=benzoyl+peroxide&qid=1745526022&s=beauty&sprefix=benz%2Cbeauty%2C148&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
            imageSrc: "https://a.media-amazon.com/images/I/71uJHG+vGVL._SL1500_.jpg",
            suitableFor: "Combination"
        },




        //Azelaic Acid
        {
            name: "Paula's Choice BOOST 10% Azelaic Acid Booster Cream Gel",
            activeIngredient: "Azelaic Acid",
            properties: "A naturally occurring acid found in yeast, it has strong antibacterial properties and can help to fight against acne and skin inflammation.",
            description: "This multi-tasking serum reduces the look of blemishes, smooths bumpy texture, and visibly improves uneven tone.",
            link: "https://www.amazon.com/Paulas-Choice-BOOST-Azelaic-Licorice-Salicylic/dp/B00V4PNAI4/ref=sr_1_1_sspa?crid=2O81WL72NPLSJ&dib=eyJ2IjoiMSJ9.jkfuIobc0_EEtCS-6cz0tGAHSNNmxr2RTk_7ZgdMxLPGrb7Py4pdJPzxCAhCSWWH48eAnZG6kC1VNmG4cEGaDvh7wQC2jjuvjv_NsKGys7BpRvCpZAmgIEcm5tXlYNxqp4Px2X5zCMKPTC6fykBEwl0HWlOhZBwwwsgbIiq2RitFWwqXLX0OlpjB-VYzazQJbZIHzgp95qXYrqfr4k1jdyazmF41R_D4fOubmcoAEPA6PdSiAjcygj8D03xhgDdXH0mv2VZJUHGsfPgsC2etKodyFtAMHvsWYFnPY4pMo3w.iwzsI0CVw-GPRMIh6pvrniJo-3dj0TRErb4A9386zUM&dib_tag=se&keywords=Azelaic%2BAcid&qid=1745526375&s=beauty&sprefix=azelaic%2Bacid%2Cbeauty%2C153&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://m.media-amazon.com/images/I/312fOY15bOL._SY445_SX342_QL70_FMwebp_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "Premium Azelaic Acid 10% Facial Serum",
            activeIngredient: "Azelaic Acid",
            properties: "A naturally occurring acid found in yeast, it has strong antibacterial properties and can help to fight against acne and skin inflammation.",
            description: "Our 10% Azelaic Acid Booster also contains Niacinamide a gentle acne treatment. The multi-tasking formula boasts a lightweight, oil-free texture that works beautifully on its own or mixed with other skin treatments.",
            link: "https://www.amazon.com/Azelaic-Acid-10-Serum-1oz/dp/B07QM5KGDK/ref=sr_1_16?crid=2O81WL72NPLSJ&dib=eyJ2IjoiMSJ9.jkfuIobc0_EEtCS-6cz0tGAHSNNmxr2RTk_7ZgdMxLPGrb7Py4pdJPzxCAhCSWWH48eAnZG6kC1VNmG4cEGaDvh7wQC2jjuvjv_NsKGys7BpRvCpZAmgIEcm5tXlYNxqp4Px2X5zCMKPTC6fykBEwl0HWlOhZBwwwsgbIiq2RitFWwqXLX0OlpjB-VYzazQJbZIHzgp95qXYrqfr4k1jdyazmF41R_D4fOubmcoAEPA6PdSiAjcygj8D03xhgDdXH0mv2VZJUHGsfPgsC2etKodyFtAMHvsWYFnPY4pMo3w.iwzsI0CVw-GPRMIh6pvrniJo-3dj0TRErb4A9386zUM&dib_tag=se&keywords=Azelaic+Acid&qid=1745526375&s=beauty&sprefix=azelaic+acid%2Cbeauty%2C153&sr=1-16",
            imageSrc: "https://a.media-amazon.com/images/I/71iNnpZAPKL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Anua Azelaic Acid 10 Hyaluron Redness Soothing Serum",
            activeIngredient: "Azelaic Acid",
            properties: "A naturally occurring acid found in yeast, it has strong antibacterial properties and can help to fight against acne and skin inflammation.",
            description: "10% Azelaic Acid helps calming effect for normal skin. Wheat and barley extracts, as gentle yet effective ingredients, provide deep hydration and help balance skin for a healthier-looking complexion.",
            link: "https://www.amazon.com/Hyaluron-Soothing-Sensitive-Hyaluronic-Niacinamide/dp/B0DG1DQ2S7/ref=sr_1_2_sspa?crid=2O81WL72NPLSJ&dib=eyJ2IjoiMSJ9.jkfuIobc0_EEtCS-6cz0tGAHSNNmxr2RTk_7ZgdMxLPGrb7Py4pdJPzxCAhCSWWH48eAnZG6kC1VNmG4cEGaDvh7wQC2jjuvjv_NsKGys7BpRvCpZAmgIEcm5tXlYNxqp4Px2X5zCMKPTC6fykBEwl0HWlOhZBwwwsgbIiq2RitFWwqXLX0OlpjB-VYzazQJbZIHzgp95qXYrqfr4k1jdyazmF41R_D4fOubmcoAEPA6PdSiAjcygj8D03xhgDdXH0mv2VZJUHGsfPgsC2etKodyFtAMHvsWYFnPY4pMo3w.iwzsI0CVw-GPRMIh6pvrniJo-3dj0TRErb4A9386zUM&dib_tag=se&keywords=Azelaic+Acid&qid=1745526375&s=beauty&sprefix=azelaic+acid%2Cbeauty%2C153&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
            imageSrc: "https://a.media-amazon.com/images/I/51nR7ndiTZL._SL1200_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "The Ordinary Azelaic Acid Suspension 10%",
            activeIngredient: "Azelaic Acid",
            properties: "A naturally occurring acid found in yeast, it has strong antibacterial properties and can help to fight against acne and skin inflammation.",
            description: "A formula for uneven and blemish-prone skin, The Ordinary Azelaic Acid Suspension 10% help even skin tone appearance.",
            link: "https://www.amazon.com/Ordinary-Azelaic-Acid-Suspension-30ml/dp/B06WD5J8KY/ref=sr_1_6?crid=2O81WL72NPLSJ&dib=eyJ2IjoiMSJ9.jkfuIobc0_EEtCS-6cz0tGAHSNNmxr2RTk_7ZgdMxLPGrb7Py4pdJPzxCAhCSWWH48eAnZG6kC1VNmG4cEGaDvh7wQC2jjuvjv_NsKGys7BpRvCpZAmgIEcm5tXlYNxqp4Px2X5zCMKPTC6fykBEwl0HWlOhZBwwwsgbIiq2RitFWwqXLX0OlpjB-VYzazQJbZIHzgp95qXYrqfr4k1jdyazmF41R_D4fOubmcoAEPA6PdSiAjcygj8D03xhgDdXH0mv2VZJUHGsfPgsC2etKodyFtAMHvsWYFnPY4pMo3w.iwzsI0CVw-GPRMIh6pvrniJo-3dj0TRErb4A9386zUM&dib_tag=se&keywords=Azelaic%2BAcid&qid=1745526375&s=beauty&sprefix=azelaic%2Bacid%2Cbeauty%2C153&sr=1-6&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/51kKAqJ9t5L._SL1500_.jpg",
            suitableFor: "Combination"
        }
    ],
    "Aging": [

        //Vitamin C
        {
            name: "SeoulCeuticals Korean Skin Care 20% Vitamin C Hyaluronic Acid Serum + CE Ferulic Acid",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Potent anti aging/wrinkle serum is proven to help reduce the appearance of wrinkles, fine lines & crows feet",
            link: "https://www.amazon.com/Seoul-Ceuticals-Korean-Skin-Care/dp/B072K1LNNY/ref=sr_1_2_sspa?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/81Yy0pXgQFL._SL1500_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "TruSkin Vitamin C Serum For Face",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Featuring a dual-action blend of Hyaluronic Acid and a botanical Hyaluronic Acid alternative, plus skin-loving ingredients like Vitamin C, Vitamin E, Aloe Vera, Jojoba Oil, and MSM to help hydrate, brighten, and soothe",
            link: "https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_7?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-7&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71S3iW6010L._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "GOODAL Green Tangerine Vitamin C Serum",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Green tangerines are potent in antioxidants and have 10x more vitamin C than lemons. Powered by this fruit, our formula improves dark spots and post-acne hyperpigmentation while tackling the formation of new ones that have yet to surface.",
            link: "https://www.amazon.com/GOODAL-Tangerine-Vitamin-Korean-Beauty/dp/B0DDPBV9JK/ref=sr_1_1_sspa?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/51gnjTDPZOL._SL1200_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "TruSkin Vitamin C Serum For Face",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Featuring a dual-action blend of Hyaluronic Acid and a botanical Hyaluronic Acid alternative, plus skin-loving ingredients like Vitamin C, Vitamin E, Aloe Vera, Jojoba Oil, and MSM to help hydrate, brighten, and soothe",
            link: "https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_7?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-7&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71S3iW6010L._SL1500_.jpg",
            suitableFor: "Combination"
        },



        //Retinol
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
            name: "The Ordinary Granactive Retinoid 2%",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Targets visible signs of aging, including fine lines and wrinkles, while improving skin texture and tone.",
            link: "https://www.amazon.com/dp/B071HHSMTT?ref=nb_sb_ss_w_as-reorder_k0_1_6&amp=&crid=2ALWULI4RNEUO&amp=&sprefix=granac",
            imageSrc: "https://a.media-amazon.com/images/I/51QK4sLpGjL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Differin Acne Treatment Gel",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Clears acne by normalizing skin cell turnover.",
            link: "https://www.amazon.com/Differin-Adapalene-0-1-Acne-Treatment/dp/B07L1PHSY9?ref_=ast_sto_dp&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71VRnfHGbEL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "CeraVe Resurfacing Retinol Serum",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Minimizes pores to improve skin texture and reduce post-acne marks and blemishes.",
            link: "https://www.amazon.com/CeraVe-Post-Acne-Refining-Resurfacing-Brightening/dp/B07VWSN95S/ref=sr_1_6_pp?crid=2H9A8BAUV32RU&dib=eyJ2IjoiMSJ9.2uaTQPpLxNMKHeBOmitm3R3cn0vHlA39tklRpFtvzDWYLgy-uzpzBNiNmOKR_9ao6KMQz4f_mCLazZYFXQfB3y2yLEsLgAcxKtGhETzEulr62SXqzNfQoepg6vnwdO3CTnYXuoby7Lib2iXM1223kL4OPaPeenUi888CL_7Nz3xEfqY_HGmBzVO_XjAcJA3cFrF52UNaAP85iVgx7inyASzWTMhCW9Aodyb1yFCePHbXVayaoMGL0oOFON3gzLOtIBvXrthoP_A6OhCnF6G4u0vXwxyUbOdZXIi_SDU8o1g.PLLGmxMn8VN-c9WqfK8PUIh0BuojctPjWtGtIACuncY&dib_tag=se&keywords=cerave+retinol&qid=1745525452&s=beauty&sprefix=cer%2Cbeauty%2C150&sr=1-6",
            imageSrc: "https://a.media-amazon.com/images/I/71zvPJqU7FL._SL1500_.jpg",
            suitableFor: "Combination"
        },

        //Hyaluronic Acid
        {
            name: "Cerave Hyaluronic Acid Serum for Face with Vitamin B5 and Ceramides",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "Hyaluronic Acid Serum for Face is formulated with our highest concentration of hyaluronic acid, an ingredient that helps retain skin’s natural moisture. Helps skin appear more hydrated and smoother.",
            link: "https://www.amazon.com/CeraVe-Hyaluronic-Hydrating-Vitamin-Fragrance/dp/B07K3261ZD/ref=sr_1_9?crid=3EG627KWUHS3I&dib=eyJ2IjoiMSJ9.YLKZsKiEICrynefIaG5M_5ndQ9lvrgiHcbyTOgGmrK--OtaiNNhxwmkTqArkyahoSLPTNVkHlapD7N3ynyhYXgcvBqY3CJBGDYs_DHRgLEe5m5vwrrLnwSUX0xY5eCTlXX-YQKkusX5SYN-T65kpCX6wEKReQ0VlqvL_LKZIomL5vbHZWIgCwMHnKDsbbC6JuyQmPLCN4P1vcvZUWvlQsg_1x769_UybbUy3pXU9XQ5QvF6RIIQ0OfXqm3yPuxYRrTGCsvZD1nZfJwBulI9kF_hhzyv1FlZTOOVL-CXxhs0.ZHbewX-t2qBH190CkGVvpoAyGh_LenR_OpYx2kiD7eE&dib_tag=se&keywords=hyaluronic+acid+serum&qid=1745796204&sprefix=HYLA%2Caps%2C169&sr=8-9",
            imageSrc: "https://a.media-amazon.com/images/I/71F1mXunJEL._SL1500_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "Torriden DIVE IN Hyaluronic Acid Serum 50ml",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: " DIVE IN Serum focuses on hydrating and soothing the skin from the inside. Its lightweight texture absorbs rapidly and deeply into your skin, leaving no stickiness or greasiness.",
            link: "https://www.amazon.com/Torriden-Hyaluronic-Hydration-Panthenol-Allantoin/dp/B07WZ2YTDP/ref=sr_1_3_sspa?crid=3EG627KWUHS3I&dib=eyJ2IjoiMSJ9.YLKZsKiEICrynefIaG5M_5ndQ9lvrgiHcbyTOgGmrK--OtaiNNhxwmkTqArkyahoSLPTNVkHlapD7N3ynyhYXgcvBqY3CJBGDYs_DHRgLEe5m5vwrrLnwSUX0xY5eCTlXX-YQKkusX5SYN-T65kpCX6wEKReQ0VlqvL_LKZIomL5vbHZWIgCwMHnKDsbbC6JuyQmPLCN4P1vcvZUWvlQsg_1x769_UybbUy3pXU9XQ5QvF6RIIQ0OfXqm3yPuxYRrTGCsvZD1nZfJwBulI9kF_hhzyv1FlZTOOVL-CXxhs0.ZHbewX-t2qBH190CkGVvpoAyGh_LenR_OpYx2kiD7eE&dib_tag=se&keywords=hyaluronic%2Bacid%2Bserum&qid=1745796204&sprefix=HYLA%2Caps%2C169&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61g6oZPwLdL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Cerave Hyaluronic Acid Serum for Face with Vitamin B5 and Ceramides",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "Hyaluronic Acid Serum for Face is formulated with our highest concentration of hyaluronic acid, an ingredient that helps retain skin’s natural moisture. Helps skin appear more hydrated and smoother.",
            link: "https://www.amazon.com/CeraVe-Hyaluronic-Hydrating-Vitamin-Fragrance/dp/B07K3261ZD/ref=sr_1_9?crid=3EG627KWUHS3I&dib=eyJ2IjoiMSJ9.YLKZsKiEICrynefIaG5M_5ndQ9lvrgiHcbyTOgGmrK--OtaiNNhxwmkTqArkyahoSLPTNVkHlapD7N3ynyhYXgcvBqY3CJBGDYs_DHRgLEe5m5vwrrLnwSUX0xY5eCTlXX-YQKkusX5SYN-T65kpCX6wEKReQ0VlqvL_LKZIomL5vbHZWIgCwMHnKDsbbC6JuyQmPLCN4P1vcvZUWvlQsg_1x769_UybbUy3pXU9XQ5QvF6RIIQ0OfXqm3yPuxYRrTGCsvZD1nZfJwBulI9kF_hhzyv1FlZTOOVL-CXxhs0.ZHbewX-t2qBH190CkGVvpoAyGh_LenR_OpYx2kiD7eE&dib_tag=se&keywords=hyaluronic+acid+serum&qid=1745796204&sprefix=HYLA%2Caps%2C169&sr=8-9",
            imageSrc: "https://a.media-amazon.com/images/I/71F1mXunJEL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "The Ordinary Hyaluronic Acid 2% + B5 (with Ceramides)",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "The Ordinary Hyaluronic Acid 2% + B5 is our most-loved hydration serum that instantly hydrates and plumps, while smoothing texture and wrinkles.",
            link: "https://www.amazon.com/Ordinary-Hyaluronic-Acid-2-30ml/dp/B01MYEZPC8/ref=sr_1_1_sspa?crid=3EG627KWUHS3I&dib=eyJ2IjoiMSJ9.YLKZsKiEICrynefIaG5M_5ndQ9lvrgiHcbyTOgGmrK--OtaiNNhxwmkTqArkyahoSLPTNVkHlapD7N3ynyhYXgcvBqY3CJBGDYs_DHRgLEe5m5vwrrLnwSUX0xY5eCTlXX-YQKkusX5SYN-T65kpCX6wEKReQ0VlqvL_LKZIomL5vbHZWIgCwMHnKDsbbC6JuyQmPLCN4P1vcvZUWvlQsg_1x769_UybbUy3pXU9XQ5QvF6RIIQ0OfXqm3yPuxYRrTGCsvZD1nZfJwBulI9kF_hhzyv1FlZTOOVL-CXxhs0.ZHbewX-t2qBH190CkGVvpoAyGh_LenR_OpYx2kiD7eE&dib_tag=se&keywords=hyaluronic%2Bacid%2Bserum&qid=1745796204&sprefix=HYLA%2Caps%2C169&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61eH32lVpdL._SL1500_.jpg",
            suitableFor: "Combination"
        },

    ],
    "Hyperpigmentation": [

        //Vitamin C
        {
            name: "SeoulCeuticals Korean Skin Care 20% Vitamin C Hyaluronic Acid Serum + CE Ferulic Acid",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Potent anti aging/wrinkle serum is proven to help reduce the appearance of wrinkles, fine lines & crows feet",
            link: "https://www.amazon.com/Seoul-Ceuticals-Korean-Skin-Care/dp/B072K1LNNY/ref=sr_1_2_sspa?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/81Yy0pXgQFL._SL1500_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "TruSkin Vitamin C Serum For Face",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Featuring a dual-action blend of Hyaluronic Acid and a botanical Hyaluronic Acid alternative, plus skin-loving ingredients like Vitamin C, Vitamin E, Aloe Vera, Jojoba Oil, and MSM to help hydrate, brighten, and soothe",
            link: "https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_7?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-7&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71S3iW6010L._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "GOODAL Green Tangerine Vitamin C Serum",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Green tangerines are potent in antioxidants and have 10x more vitamin C than lemons. Powered by this fruit, our formula improves dark spots and post-acne hyperpigmentation while tackling the formation of new ones that have yet to surface.",
            link: "https://www.amazon.com/GOODAL-Tangerine-Vitamin-Korean-Beauty/dp/B0DDPBV9JK/ref=sr_1_1_sspa?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/51gnjTDPZOL._SL1200_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "TruSkin Vitamin C Serum For Face",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Featuring a dual-action blend of Hyaluronic Acid and a botanical Hyaluronic Acid alternative, plus skin-loving ingredients like Vitamin C, Vitamin E, Aloe Vera, Jojoba Oil, and MSM to help hydrate, brighten, and soothe",
            link: "https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_7?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-7&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71S3iW6010L._SL1500_.jpg",
            suitableFor: "Combination"
        },

        //Retinol
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
            name: "The Ordinary Granactive Retinoid 2%",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Targets visible signs of aging, including fine lines and wrinkles, while improving skin texture and tone.",
            link: "https://www.amazon.com/dp/B071HHSMTT?ref=nb_sb_ss_w_as-reorder_k0_1_6&amp=&crid=2ALWULI4RNEUO&amp=&sprefix=granac",
            imageSrc: "https://a.media-amazon.com/images/I/51QK4sLpGjL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Differin Acne Treatment Gel",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Clears acne by normalizing skin cell turnover.",
            link: "https://www.amazon.com/Differin-Adapalene-0-1-Acne-Treatment/dp/B07L1PHSY9?ref_=ast_sto_dp&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71VRnfHGbEL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "CeraVe Resurfacing Retinol Serum",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Minimizes pores to improve skin texture and reduce post-acne marks and blemishes.",
            link: "https://www.amazon.com/CeraVe-Post-Acne-Refining-Resurfacing-Brightening/dp/B07VWSN95S/ref=sr_1_6_pp?crid=2H9A8BAUV32RU&dib=eyJ2IjoiMSJ9.2uaTQPpLxNMKHeBOmitm3R3cn0vHlA39tklRpFtvzDWYLgy-uzpzBNiNmOKR_9ao6KMQz4f_mCLazZYFXQfB3y2yLEsLgAcxKtGhETzEulr62SXqzNfQoepg6vnwdO3CTnYXuoby7Lib2iXM1223kL4OPaPeenUi888CL_7Nz3xEfqY_HGmBzVO_XjAcJA3cFrF52UNaAP85iVgx7inyASzWTMhCW9Aodyb1yFCePHbXVayaoMGL0oOFON3gzLOtIBvXrthoP_A6OhCnF6G4u0vXwxyUbOdZXIi_SDU8o1g.PLLGmxMn8VN-c9WqfK8PUIh0BuojctPjWtGtIACuncY&dib_tag=se&keywords=cerave+retinol&qid=1745525452&s=beauty&sprefix=cer%2Cbeauty%2C150&sr=1-6",
            imageSrc: "https://a.media-amazon.com/images/I/71zvPJqU7FL._SL1500_.jpg",
            suitableFor: "Combination"
        },

        //Niacinamide
        {
            name: "Minimalist 10% Niacinamide Serum for Acne Control & Oil Balancing with Zinc",
            activeIngredient: "Niacinamide",
            properties: "Niacinamide, a form of vitamin B3, offers various benefits for the face, including strengthening the skin barrier, improving texture, reducing hyperpigmentation, and minimizing pore size.",
            description: "High grade pure Vitamin B3 (Niacinamide) added in this serum is clinically proven to reduce acne marks & dark spots in 2 weeks, resulting in even complexion or tone.",
            link: "https://www.amazon.com/Minimalist-Niacinamide-Blemishes-Balancing-Clarifying/dp/B08F9MF314/ref=sr_1_1_sspa?crid=1S7D17KOW8QUK&dib=eyJ2IjoiMSJ9.1SGb-W-CVRCxGkGGUkPIKqd-EiNCgSZlSWj-HKFNhJ-j5iTpY2AzJ3d2m_cdl9Aog4Qwkzjg82F-bdNN3p0FYpQhTnozCCCJP2_SUBg6N4nMMV-6q67G-aElbAs84FDvvC2mE_dbA_Hl97L23R8xV5djEqZXFcilCDM7ZMeFv4UCgPtRMFkpZnt58iQBfF09Jn09Vz6lDvwnoeKNroy-ov-AKtpMkgY7iwFwifIdh_6n8OK0t2liRzBHjJvo9QSvNqYFuCKcYXR7um0BX38hC1_uTBN07hElZ_Dsz-eCz-s.SJ_vYvYz-lwTMpmpAWbRbDRtqkjv4vqLH77IXtOzSEc&dib_tag=se&keywords=niacinamide+for+oily+skin&qid=1745797231&rdc=1&sprefix=Niacinamide+fo+oily%2Caps%2C132&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
            imageSrc: "https://a.media-amazon.com/images/I/51fo5Cdx4YL._SL1200_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "Good Molecules Niacinamide Serum",
            activeIngredient: "Niacinamide",
            properties: "Niacinamide, a form of vitamin B3, offers various benefits for the face, including strengthening the skin barrier, improving texture, reducing hyperpigmentation, and minimizing pore size.",
            description: "This balancing formula is rich in Niacinamide (10%), also known as B3, and can be very helpful for those suffering from breakouts, uneven skin tone, enlarged pores, and dull texture.",
            link: "https://www.amazon.com/Good-Molecules-g23t04-MOLECULES-Niacinamide/dp/B08R994Q1L/ref=sr_1_15?crid=3MIIKEGN4D526&dib=eyJ2IjoiMSJ9.tTJTzXpqOaAVpuI9c4glvCUyDI5oQ-LH6QkZo-Pfvwp6WPFhUh2Rs-qaCEN4q7Zf1dQwYxB8DGq_A9YsuHafYsbg1lmUnxcmZFxaNEZ1le_yCo8vWgvTlJV29arWViSxt2KKsYmJTCcsdvsrbNqOWOq8f0VyCZA3nT_mY-JBrSGraBSvCuD4GQ5r5Qh2RIrP6iX2MeqixcYAvbNlNw6jbgTVn_510xrol_PAD8r4eBD0sL3BxcNbcJxzFHItzoLnzEphDzUC8-aQD37E0yS5ZG2F1XP_quDeCCEZPO0uYH0.2iDqLQ-ZBH1lt9_8Tl-maLtCdAYsjX-MnOt5vGaf9zc&dib_tag=se&keywords=Niacinamide&qid=1745796892&sprefix=niacinamide%2Caps%2C196&sr=8-15&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71IVQLWKSsL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Naturium Niacinamide Face Serum 12% Plus Zinc 2%",
            activeIngredient: "Niacinamide",
            properties: "Niacinamide, a form of vitamin B3, offers various benefits for the face, including strengthening the skin barrier, improving texture, reducing hyperpigmentation, and minimizing pore size.",
            description: "Our concentrated niacinamide serum is high-quality, formulated with pure 12% niacinamide and 2% zinc PCA, clinically shown to reduce the appearance of dark spots, pores, fines lines & wrinkles.",
            link: "https://www.amazon.com/Niacinamide-Moisturizer-Diminishes-Wrinkles-Hyaluronic/dp/B07WSS5M4Z/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.b747a510-73a1-4cf4-a45b-74fc1ab8af95%3Aamzn1.sym.b747a510-73a1-4cf4-a45b-74fc1ab8af95&crid=3MIIKEGN4D526&cv_ct_cx=Niacinamide&keywords=Niacinamide&pd_rd_i=B07WSS5M4Z&pd_rd_r=3e45f77c-6716-4af6-bb10-7eea191aa9cf&pd_rd_w=Pt6zb&pd_rd_wg=g2pqD&pf_rd_p=b747a510-73a1-4cf4-a45b-74fc1ab8af95&pf_rd_r=P6CTVEWMX6GGXNC9X2GN&qid=1745796892&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=niacinamide%2Caps%2C196&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61KYCE62-hL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "The Ordinary Niacinamide 10% + Zinc 1%",
            activeIngredient: "Niacinamide",
            properties: "Niacinamide, a form of vitamin B3, offers various benefits for the face, including strengthening the skin barrier, improving texture, reducing hyperpigmentation, and minimizing pore size.",
            description: "The Ordinary Niacinamide 10% +Zince 1% is a universal serum for blemish-prone skin that smooths, brightens, and supports the skin barrier.",
            link: "https://www.amazon.com/Ordinary-Niacinamide-10-Zinc-30ml/dp/B01MDTVZTZ/ref=sr_1_6?crid=3MIIKEGN4D526&dib=eyJ2IjoiMSJ9.tTJTzXpqOaAVpuI9c4glvCUyDI5oQ-LH6QkZo-Pfvwp6WPFhUh2Rs-qaCEN4q7Zf1dQwYxB8DGq_A9YsuHafYsbg1lmUnxcmZFxaNEZ1le_yCo8vWgvTlJV29arWViSxt2KKsYmJTCcsdvsrbNqOWOq8f0VyCZA3nT_mY-JBrSGraBSvCuD4GQ5r5Qh2RIrP6iX2MeqixcYAvbNlNw6jbgTVn_510xrol_PAD8r4eBD0sL3BxcNbcJxzFHItzoLnzEphDzUC8-aQD37E0yS5ZG2F1XP_quDeCCEZPO0uYH0.2iDqLQ-ZBH1lt9_8Tl-maLtCdAYsjX-MnOt5vGaf9zc&dib_tag=se&keywords=Niacinamide&qid=1745796892&sprefix=niacinamide%2Caps%2C196&sr=8-6&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61QBAJHZNhL._SL1500_.jpg",
            suitableFor: "Combination"
        }
    ],
    "Dullness": [

        //AHAs
        {
            name: "The Ordinary AHA 30% + BHA 2% Peeling Solution",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "The Ordinary AHA 30% + BHA 2% advanced-level exfoliating peel for a brighter and more even-looking complexion.",
            link: "https://www.amazon.com/Ordinary-Peeling-Solution-30ml-AHA/dp/B071D4D5DT/ref=sr_1_1?crid=3K51NHP78VK0T&dib=eyJ2IjoiMSJ9.MCX84L9ql0vj6azbvzOa15BOvXkGC5Ge0Hw1kyDJvstnGGvqI8s-TXr-y7QMwK0xKpUPwjlHOTfSH1wGWE5CCX6R6w8mtHPux_QpRZgbOLSXEPnfM7zOBG5xWUVw-kcmfFe6e65HbaRzhA4Wylm5HfyMtDYIbMvK_wYoXjqATx0kjPfgnDDWRwoM3xAZukoeNg9wcOu8mFAUCITVuo8KWSHK8Fimb5UfTrHPbsFT_g2H2uaLcR5CLj4nXnHB5Nb6s5C6lhHaieGLhBeMALA0978sbSJp6LkjYbSfMyZuFik.av6kDC9rat5yQLeWlKWEa7FgXpiE7_12ODhZMpwwlIM&dib_tag=se&keywords=AHA&qid=1745798380&sprefix=ah%2Caps%2C212&sr=8-1&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61Q3p6G4DgL._SL1500_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "Good Molecules Overnight Exfoliating Treatment",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "This gentle yet exfoliating treatment targets texture, congestion, clogged pores, enlarged pores, and dullness with a formula designed to bring out the best in your skin.",
            link: "https://www.amazon.com/Good-Molecules-Exfoliating-Formulated-Unclogging/dp/B08TMDRF1L/ref=sr_1_4?crid=3K51NHP78VK0T&dib=eyJ2IjoiMSJ9.MCX84L9ql0vj6azbvzOa15BOvXkGC5Ge0Hw1kyDJvstnGGvqI8s-TXr-y7QMwK0xKpUPwjlHOTfSH1wGWE5CCX6R6w8mtHPux_QpRZgbOLSXEPnfM7zOBG5xWUVw-kcmfFe6e65HbaRzhA4Wylm5HfyMtDYIbMvK_wYoXjqATx0kjPfgnDDWRwoM3xAZukoeNg9wcOu8mFAUCITVuo8KWSHK8Fimb5UfTrHPbsFT_g2H2uaLcR5CLj4nXnHB5Nb6s5C6lhHaieGLhBeMALA0978sbSJp6LkjYbSfMyZuFik.av6kDC9rat5yQLeWlKWEa7FgXpiE7_12ODhZMpwwlIM&dib_tag=se&keywords=AHA&qid=1745798380&sprefix=ah%2Caps%2C212&sr=8-4",
            imageSrc: "https://a.media-amazon.com/images/I/7109fJ1mUAL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "COSRX AHA/BHA Treatment Toner",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "Formulated with AHA, BHA, and Purifying Botanical Ingredients, our toner improves skin texture, skin vitality, and control pores.",
            link: "https://www.amazon.com/COSRX-Clarifying-Treatment-Toner-150ml/dp/B073P6BPF5/ref=sr_1_4_sspa?crid=3DOY0HZY7DNIN&dib=eyJ2IjoiMSJ9.8hXTI9Q3IAcRlMxCuA8sehgp9GKGcwgDaxDefIrn7XEcZxLEuc1jXzcBCOfEIPO6XYfVul21ifg4959ivT4rwj7XfBQzQE-RdjSJ2vvCPPKtyPsjv_dOk3EayNZtrW_lgYbnNXNu67ZT3eJHsHoXGNLZrvsRPSyYt-JktOuwVFGnSaW2kZ3ByIFb0uo0-iu2eauUxitMTgyACd9gQMHPlLEc0TwlpvITbB7JOhUAJzr5ASmmPwkoWkIgO9XZ-Q-RNNXUT9-TCbS32NIOBP34v_HiFF4zimDjfpjfIjRipjE.6GaAjkaqLjCVslffU-FO8fjzSLTZhsHmIOkmWOlW-8g&dib_tag=se&keywords=aha+for+sensitive+skin&qid=1745867008&sprefix=AHA+for+sen%2Caps%2C165&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
            imageSrc: "https://a.media-amazon.com/images/I/618OlEn9xML._AC_SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "Paula's Choice SKIN PERFECTING 2% BHA Liquid Salicylic Acid Exfoliant",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "Our iconic global best seller, this clinically proven daily leave-on liquid exfoliant with salicylic acid quickly unclogs pores and controls oil for clear, glowing skin.",
            link: "https://www.amazon.com/Paulas-Choice-SKIN-PERFECTING-Exfoliant-Facial-Blackheads/dp/B00949CTQQ/ref=sr_1_1_sspa?crid=3K51NHP78VK0T&dib=eyJ2IjoiMSJ9.WXjTEGlqlLEFtNVJeaN2U5e5CT--A9a2zcqcQe-6vCB8HFsgmgtY810hrW-aL_b5SXtlxbrejfbkfujswfFCNUfCZB0MHvTK_7UWgHr-Rfavyj_QN7Lv0EqycC4_tU00ziDt1sZK9jbfod0ZEqKEXOfdjQQ8PV5jWqa5DiASpk2SPYcMqCQs2VSe54rPgBt1f8nFW9Uevvs7BMnTrXmlcf0GdnYMK68PcBRM8RsQ241D18BhkXfuYz_DlLl8WGJLwSmF2OiO_xT5uanxHzrw0IBucCk6Y5GyO7iaLUmmfHY.kcOmzKXYYzTP342V8_7VFqkt-RYwv1BQgkLdBObOAJI&dib_tag=se&keywords=AHA&qid=1745798321&sprefix=ah%2Caps%2C212&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61zhzjgd2xL._SL1500_.jpg",
            suitableFor: "Combination"
        },

        //Hyaluronic Acid
        {
            name: "Cerave Hyaluronic Acid Serum for Face with Vitamin B5 and Ceramides",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "Hyaluronic Acid Serum for Face is formulated with our highest concentration of hyaluronic acid, an ingredient that helps retain skin’s natural moisture. Helps skin appear more hydrated and smoother.",
            link: "https://www.amazon.com/CeraVe-Hyaluronic-Hydrating-Vitamin-Fragrance/dp/B07K3261ZD/ref=sr_1_9?crid=3EG627KWUHS3I&dib=eyJ2IjoiMSJ9.YLKZsKiEICrynefIaG5M_5ndQ9lvrgiHcbyTOgGmrK--OtaiNNhxwmkTqArkyahoSLPTNVkHlapD7N3ynyhYXgcvBqY3CJBGDYs_DHRgLEe5m5vwrrLnwSUX0xY5eCTlXX-YQKkusX5SYN-T65kpCX6wEKReQ0VlqvL_LKZIomL5vbHZWIgCwMHnKDsbbC6JuyQmPLCN4P1vcvZUWvlQsg_1x769_UybbUy3pXU9XQ5QvF6RIIQ0OfXqm3yPuxYRrTGCsvZD1nZfJwBulI9kF_hhzyv1FlZTOOVL-CXxhs0.ZHbewX-t2qBH190CkGVvpoAyGh_LenR_OpYx2kiD7eE&dib_tag=se&keywords=hyaluronic+acid+serum&qid=1745796204&sprefix=HYLA%2Caps%2C169&sr=8-9",
            imageSrc: "https://a.media-amazon.com/images/I/71F1mXunJEL._SL1500_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "Torriden DIVE IN Hyaluronic Acid Serum 50ml",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: " DIVE IN Serum focuses on hydrating and soothing the skin from the inside. Its lightweight texture absorbs rapidly and deeply into your skin, leaving no stickiness or greasiness.",
            link: "https://www.amazon.com/Torriden-Hyaluronic-Hydration-Panthenol-Allantoin/dp/B07WZ2YTDP/ref=sr_1_3_sspa?crid=3EG627KWUHS3I&dib=eyJ2IjoiMSJ9.YLKZsKiEICrynefIaG5M_5ndQ9lvrgiHcbyTOgGmrK--OtaiNNhxwmkTqArkyahoSLPTNVkHlapD7N3ynyhYXgcvBqY3CJBGDYs_DHRgLEe5m5vwrrLnwSUX0xY5eCTlXX-YQKkusX5SYN-T65kpCX6wEKReQ0VlqvL_LKZIomL5vbHZWIgCwMHnKDsbbC6JuyQmPLCN4P1vcvZUWvlQsg_1x769_UybbUy3pXU9XQ5QvF6RIIQ0OfXqm3yPuxYRrTGCsvZD1nZfJwBulI9kF_hhzyv1FlZTOOVL-CXxhs0.ZHbewX-t2qBH190CkGVvpoAyGh_LenR_OpYx2kiD7eE&dib_tag=se&keywords=hyaluronic%2Bacid%2Bserum&qid=1745796204&sprefix=HYLA%2Caps%2C169&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61g6oZPwLdL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Cerave Hyaluronic Acid Serum for Face with Vitamin B5 and Ceramides",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "Hyaluronic Acid Serum for Face is formulated with our highest concentration of hyaluronic acid, an ingredient that helps retain skin’s natural moisture. Helps skin appear more hydrated and smoother.",
            link: "https://www.amazon.com/CeraVe-Hyaluronic-Hydrating-Vitamin-Fragrance/dp/B07K3261ZD/ref=sr_1_9?crid=3EG627KWUHS3I&dib=eyJ2IjoiMSJ9.YLKZsKiEICrynefIaG5M_5ndQ9lvrgiHcbyTOgGmrK--OtaiNNhxwmkTqArkyahoSLPTNVkHlapD7N3ynyhYXgcvBqY3CJBGDYs_DHRgLEe5m5vwrrLnwSUX0xY5eCTlXX-YQKkusX5SYN-T65kpCX6wEKReQ0VlqvL_LKZIomL5vbHZWIgCwMHnKDsbbC6JuyQmPLCN4P1vcvZUWvlQsg_1x769_UybbUy3pXU9XQ5QvF6RIIQ0OfXqm3yPuxYRrTGCsvZD1nZfJwBulI9kF_hhzyv1FlZTOOVL-CXxhs0.ZHbewX-t2qBH190CkGVvpoAyGh_LenR_OpYx2kiD7eE&dib_tag=se&keywords=hyaluronic+acid+serum&qid=1745796204&sprefix=HYLA%2Caps%2C169&sr=8-9",
            imageSrc: "https://a.media-amazon.com/images/I/71F1mXunJEL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "The Ordinary Hyaluronic Acid 2% + B5 (with Ceramides)",
            activeIngredient: "Hyaluronic Acid",
            properties: "A powerful hydrating molecule that can retain water, helping the skin stay moisturized and plump.",
            description: "The Ordinary Hyaluronic Acid 2% + B5 is our most-loved hydration serum that instantly hydrates and plumps, while smoothing texture and wrinkles.",
            link: "https://www.amazon.com/Ordinary-Hyaluronic-Acid-2-30ml/dp/B01MYEZPC8/ref=sr_1_1_sspa?crid=3EG627KWUHS3I&dib=eyJ2IjoiMSJ9.YLKZsKiEICrynefIaG5M_5ndQ9lvrgiHcbyTOgGmrK--OtaiNNhxwmkTqArkyahoSLPTNVkHlapD7N3ynyhYXgcvBqY3CJBGDYs_DHRgLEe5m5vwrrLnwSUX0xY5eCTlXX-YQKkusX5SYN-T65kpCX6wEKReQ0VlqvL_LKZIomL5vbHZWIgCwMHnKDsbbC6JuyQmPLCN4P1vcvZUWvlQsg_1x769_UybbUy3pXU9XQ5QvF6RIIQ0OfXqm3yPuxYRrTGCsvZD1nZfJwBulI9kF_hhzyv1FlZTOOVL-CXxhs0.ZHbewX-t2qBH190CkGVvpoAyGh_LenR_OpYx2kiD7eE&dib_tag=se&keywords=hyaluronic%2Bacid%2Bserum&qid=1745796204&sprefix=HYLA%2Caps%2C169&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61eH32lVpdL._SL1500_.jpg",
            suitableFor: "Combination"
        },

        //Vitamin C
        {
            name: "SeoulCeuticals Korean Skin Care 20% Vitamin C Hyaluronic Acid Serum + CE Ferulic Acid",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Potent anti aging/wrinkle serum is proven to help reduce the appearance of wrinkles, fine lines & crows feet",
            link: "https://www.amazon.com/Seoul-Ceuticals-Korean-Skin-Care/dp/B072K1LNNY/ref=sr_1_2_sspa?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/81Yy0pXgQFL._SL1500_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "TruSkin Vitamin C Serum For Face",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Featuring a dual-action blend of Hyaluronic Acid and a botanical Hyaluronic Acid alternative, plus skin-loving ingredients like Vitamin C, Vitamin E, Aloe Vera, Jojoba Oil, and MSM to help hydrate, brighten, and soothe",
            link: "https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_7?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-7&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71S3iW6010L._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "GOODAL Green Tangerine Vitamin C Serum",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Green tangerines are potent in antioxidants and have 10x more vitamin C than lemons. Powered by this fruit, our formula improves dark spots and post-acne hyperpigmentation while tackling the formation of new ones that have yet to surface.",
            link: "https://www.amazon.com/GOODAL-Tangerine-Vitamin-Korean-Beauty/dp/B0DDPBV9JK/ref=sr_1_1_sspa?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/51gnjTDPZOL._SL1200_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "TruSkin Vitamin C Serum For Face",
            activeIngredient: "Vitamin C",
            properties: "A potent antioxidant that brightens skin, fades dark spots, and boosts collagen production for a radiant and youthful look.",
            description: "Featuring a dual-action blend of Hyaluronic Acid and a botanical Hyaluronic Acid alternative, plus skin-loving ingredients like Vitamin C, Vitamin E, Aloe Vera, Jojoba Oil, and MSM to help hydrate, brighten, and soothe",
            link: "https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_7?crid=2915NMYZVTPT4&dib=eyJ2IjoiMSJ9.iW8qizM0Re02Mm3q2B4v1_kW_-UG1Apz3s-CRBNlUfyHaOdPZaFZLqE-GOTqBqlXqSG4cJyM0XYBz2a6NPOVBHj4ocOc5zNwxW2VofYaFZS9SCs9tGEjo7apqXNpakgUTl3FJfchCsBc_2WksHVC9kzHX86snEje7fL1_dAJh9ACgY5dpG-KzLdLJYepSzCyZfT3-tp34C0a4R3E2u5YVG6zOFGsM_riy1ce4AcEHKgVQehGJrYVeJ0jUupfx_uQ7KTCZNKrOXA2wxkASkj4QFfQarM5KJ9nwb704fYC_1A.yC3Y3KRGtwpK8rJbVTnRqkxkOAplK_MC_pKC8q_4oWc&dib_tag=se&keywords=vitamin%2Bc%2Bserum%2Bfor%2Boily%2Bskin&qid=1745795498&rdc=1&sprefix=vitamin%2Bc%2Bserum%2Bfor%2Boil%2Caps%2C211&sr=8-7&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71S3iW6010L._SL1500_.jpg",
            suitableFor: "Combination"
        }
    ],
    "Uneven Texture": [

        //Retinol
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
            name: "The Ordinary Granactive Retinoid 2%",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Targets visible signs of aging, including fine lines and wrinkles, while improving skin texture and tone.",
            link: "https://www.amazon.com/dp/B071HHSMTT?ref=nb_sb_ss_w_as-reorder_k0_1_6&amp=&crid=2ALWULI4RNEUO&amp=&sprefix=granac",
            imageSrc: "https://a.media-amazon.com/images/I/51QK4sLpGjL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Differin Acne Treatment Gel",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Clears acne by normalizing skin cell turnover.",
            link: "https://www.amazon.com/Differin-Adapalene-0-1-Acne-Treatment/dp/B07L1PHSY9?ref_=ast_sto_dp&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/71VRnfHGbEL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "CeraVe Resurfacing Retinol Serum",
            activeIngredient: "Retinol",
            properties: "A derivative of Vitamin A that promotes cell turnover, reduces texture irregularities, and smoothens the skin over time.",
            description: "Minimizes pores to improve skin texture and reduce post-acne marks and blemishes.",
            link: "https://www.amazon.com/CeraVe-Post-Acne-Refining-Resurfacing-Brightening/dp/B07VWSN95S/ref=sr_1_6_pp?crid=2H9A8BAUV32RU&dib=eyJ2IjoiMSJ9.2uaTQPpLxNMKHeBOmitm3R3cn0vHlA39tklRpFtvzDWYLgy-uzpzBNiNmOKR_9ao6KMQz4f_mCLazZYFXQfB3y2yLEsLgAcxKtGhETzEulr62SXqzNfQoepg6vnwdO3CTnYXuoby7Lib2iXM1223kL4OPaPeenUi888CL_7Nz3xEfqY_HGmBzVO_XjAcJA3cFrF52UNaAP85iVgx7inyASzWTMhCW9Aodyb1yFCePHbXVayaoMGL0oOFON3gzLOtIBvXrthoP_A6OhCnF6G4u0vXwxyUbOdZXIi_SDU8o1g.PLLGmxMn8VN-c9WqfK8PUIh0BuojctPjWtGtIACuncY&dib_tag=se&keywords=cerave+retinol&qid=1745525452&s=beauty&sprefix=cer%2Cbeauty%2C150&sr=1-6",
            imageSrc: "https://a.media-amazon.com/images/I/71zvPJqU7FL._SL1500_.jpg",
            suitableFor: "Combination"
        },


        //AHAs
        {
            name: "The Ordinary AHA 30% + BHA 2% Peeling Solution",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "The Ordinary AHA 30% + BHA 2% advanced-level exfoliating peel for a brighter and more even-looking complexion.",
            link: "https://www.amazon.com/Ordinary-Peeling-Solution-30ml-AHA/dp/B071D4D5DT/ref=sr_1_1?crid=3K51NHP78VK0T&dib=eyJ2IjoiMSJ9.MCX84L9ql0vj6azbvzOa15BOvXkGC5Ge0Hw1kyDJvstnGGvqI8s-TXr-y7QMwK0xKpUPwjlHOTfSH1wGWE5CCX6R6w8mtHPux_QpRZgbOLSXEPnfM7zOBG5xWUVw-kcmfFe6e65HbaRzhA4Wylm5HfyMtDYIbMvK_wYoXjqATx0kjPfgnDDWRwoM3xAZukoeNg9wcOu8mFAUCITVuo8KWSHK8Fimb5UfTrHPbsFT_g2H2uaLcR5CLj4nXnHB5Nb6s5C6lhHaieGLhBeMALA0978sbSJp6LkjYbSfMyZuFik.av6kDC9rat5yQLeWlKWEa7FgXpiE7_12ODhZMpwwlIM&dib_tag=se&keywords=AHA&qid=1745798380&sprefix=ah%2Caps%2C212&sr=8-1&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61Q3p6G4DgL._SL1500_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "Good Molecules Overnight Exfoliating Treatment",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "This gentle yet exfoliating treatment targets texture, congestion, clogged pores, enlarged pores, and dullness with a formula designed to bring out the best in your skin.",
            link: "https://www.amazon.com/Good-Molecules-Exfoliating-Formulated-Unclogging/dp/B08TMDRF1L/ref=sr_1_4?crid=3K51NHP78VK0T&dib=eyJ2IjoiMSJ9.MCX84L9ql0vj6azbvzOa15BOvXkGC5Ge0Hw1kyDJvstnGGvqI8s-TXr-y7QMwK0xKpUPwjlHOTfSH1wGWE5CCX6R6w8mtHPux_QpRZgbOLSXEPnfM7zOBG5xWUVw-kcmfFe6e65HbaRzhA4Wylm5HfyMtDYIbMvK_wYoXjqATx0kjPfgnDDWRwoM3xAZukoeNg9wcOu8mFAUCITVuo8KWSHK8Fimb5UfTrHPbsFT_g2H2uaLcR5CLj4nXnHB5Nb6s5C6lhHaieGLhBeMALA0978sbSJp6LkjYbSfMyZuFik.av6kDC9rat5yQLeWlKWEa7FgXpiE7_12ODhZMpwwlIM&dib_tag=se&keywords=AHA&qid=1745798380&sprefix=ah%2Caps%2C212&sr=8-4",
            imageSrc: "https://a.media-amazon.com/images/I/7109fJ1mUAL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "COSRX AHA/BHA Treatment Toner",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "Formulated with AHA, BHA, and Purifying Botanical Ingredients, our toner improves skin texture, skin vitality, and control pores.",
            link: "https://www.amazon.com/COSRX-Clarifying-Treatment-Toner-150ml/dp/B073P6BPF5/ref=sr_1_4_sspa?crid=3DOY0HZY7DNIN&dib=eyJ2IjoiMSJ9.8hXTI9Q3IAcRlMxCuA8sehgp9GKGcwgDaxDefIrn7XEcZxLEuc1jXzcBCOfEIPO6XYfVul21ifg4959ivT4rwj7XfBQzQE-RdjSJ2vvCPPKtyPsjv_dOk3EayNZtrW_lgYbnNXNu67ZT3eJHsHoXGNLZrvsRPSyYt-JktOuwVFGnSaW2kZ3ByIFb0uo0-iu2eauUxitMTgyACd9gQMHPlLEc0TwlpvITbB7JOhUAJzr5ASmmPwkoWkIgO9XZ-Q-RNNXUT9-TCbS32NIOBP34v_HiFF4zimDjfpjfIjRipjE.6GaAjkaqLjCVslffU-FO8fjzSLTZhsHmIOkmWOlW-8g&dib_tag=se&keywords=aha+for+sensitive+skin&qid=1745867008&sprefix=AHA+for+sen%2Caps%2C165&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
            imageSrc: "https://a.media-amazon.com/images/I/618OlEn9xML._AC_SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "Paula's Choice SKIN PERFECTING 2% BHA Liquid Salicylic Acid Exfoliant",
            activeIngredient: "AHAs",
            properties: "A chemical exfoliant that removes dead skin cells, improving texture and promoting a brighter complexion.",
            description: "Our iconic global best seller, this clinically proven daily leave-on liquid exfoliant with salicylic acid quickly unclogs pores and controls oil for clear, glowing skin.",
            link: "https://www.amazon.com/Paulas-Choice-SKIN-PERFECTING-Exfoliant-Facial-Blackheads/dp/B00949CTQQ/ref=sr_1_1_sspa?crid=3K51NHP78VK0T&dib=eyJ2IjoiMSJ9.WXjTEGlqlLEFtNVJeaN2U5e5CT--A9a2zcqcQe-6vCB8HFsgmgtY810hrW-aL_b5SXtlxbrejfbkfujswfFCNUfCZB0MHvTK_7UWgHr-Rfavyj_QN7Lv0EqycC4_tU00ziDt1sZK9jbfod0ZEqKEXOfdjQQ8PV5jWqa5DiASpk2SPYcMqCQs2VSe54rPgBt1f8nFW9Uevvs7BMnTrXmlcf0GdnYMK68PcBRM8RsQ241D18BhkXfuYz_DlLl8WGJLwSmF2OiO_xT5uanxHzrw0IBucCk6Y5GyO7iaLUmmfHY.kcOmzKXYYzTP342V8_7VFqkt-RYwv1BQgkLdBObOAJI&dib_tag=se&keywords=AHA&qid=1745798321&sprefix=ah%2Caps%2C212&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/61zhzjgd2xL._SL1500_.jpg",
            suitableFor: "Combination"
        },

        //Peptides
        {
            name: "Good Molecules Super Peptide Serum",
            activeIngredient: "Peptides",
            properties: "Boost collagen production, enhancing firmness and promoting even texture.",
            description: "This formula is full of powerful peptides to rejuvenate your complexion! Copper tripeptides work to reinforce the look of firmness while acetyl hexapeptide-8 and acetyl octapeptide-3 help to reduce the appearance of fine lines and wrinkles.",
            link: "https://www.amazon.com/Good-Molecules-Formulated-Tripeptides-Youthful-Looking/dp/B091MTKS35/ref=sr_1_7?crid=F7FWWL50VZS&dib=eyJ2IjoiMSJ9.TyApC_k1nIiJ6OxdPI1heyURDGt_b1ftEYLJO2w4g-Xcyx00AYnf_tllRIx2k5qMQLYWkQ0JJ-ELBridOuA-9kDTZKCZXJJIXZV4QQxyydUrdDg2BLbOGUfYkVS_sTiOP_gGocRP1vmuNmCbIjrL4TfJ80lwKS9Izln0Blq1YG1vCucWpyntJgPGMhohduHJIqknpUXgHdVLprFSnbS3crXLR15xh_TKjVRJ5ZOXTVNy5StHbX7S5B8AiA1MOb10iyvSzckZkzvqLeWJCwKWZ7xP89k8a7OV6NgJGcPZubA.7QJ3LesYFnKDzCZ8lfo5Js1wFFoUFeBPS3ROTr83pcw&dib_tag=se&keywords=peptides+serum+for+face&qid=1745798756&sprefix=peptides%2Caps%2C138&sr=8-7",
            imageSrc: "https://a.media-amazon.com/images/I/71Wi2u+HQAL._SL1500_.jpg",
            suitableFor: "Oily"
        },
        {
            name: "COSRX 6X Peptide Collagen Booster Toner Serum",
            activeIngredient: "Peptides",
            properties: "Boost collagen production, enhancing firmness and promoting even texture.",
            description: "Skin Boosting Serum with 6 Peptides that improve skin elasticity, fine lines, pores, and radiance.",
            link: "https://www.amazon.com/COSRX-Collagen-Boosting-Niacinamide-Hyaluronic/dp/B0CCJ3SRB9/ref=sr_1_6?crid=F7FWWL50VZS&dib=eyJ2IjoiMSJ9.TyApC_k1nIiJ6OxdPI1heyURDGt_b1ftEYLJO2w4g-Xcyx00AYnf_tllRIx2k5qMQLYWkQ0JJ-ELBridOuA-9kDTZKCZXJJIXZV4QQxyydUrdDg2BLbOGUfYkVS_sTiOP_gGocRP1vmuNmCbIjrL4TfJ80lwKS9Izln0Blq1YG1vCucWpyntJgPGMhohduHJIqknpUXgHdVLprFSnbS3crXLR15xh_TKjVRJ5ZOXTVNy5StHbX7S5B8AiA1MOb10iyvSzckZkzvqLeWJCwKWZ7xP89k8a7OV6NgJGcPZubA.7QJ3LesYFnKDzCZ8lfo5Js1wFFoUFeBPS3ROTr83pcw&dib_tag=se&keywords=peptides+serum+for+face&qid=1745798756&sprefix=peptides%2Caps%2C138&sr=8-6",
            imageSrc: "https://a.media-amazon.com/images/I/71Wi2u+HQAL._SL1500_.jpg",
            suitableFor: "Dry"
        },
        {
            name: "Collagen Peptide Serum",
            activeIngredient: "Peptides",
            properties: "Boost collagen production, enhancing firmness and promoting even texture.",
            description: "Our Peptide Complex Serum works by boosting collagen production, smoothing out wrinkles and giving your skin a smoother, softer feel.",
            link: "https://www.amazon.com/Collagen-Brightening-Wrinkles-Microneedling-Hyaluronic/dp/B013O70Z3M/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.e1fd0544-6483-4e4f-b389-bc90db9d388a%3Aamzn1.sym.e1fd0544-6483-4e4f-b389-bc90db9d388a&crid=F7FWWL50VZS&cv_ct_cx=peptides%2Bserum%2Bfor%2Bface&keywords=peptides%2Bserum%2Bfor%2Bface&pd_rd_i=B013O70Z3M&pd_rd_r=b1363dfa-aa13-4c5d-9821-a763567e3207&pd_rd_w=8njAL&pd_rd_wg=vmjPw&pf_rd_p=e1fd0544-6483-4e4f-b389-bc90db9d388a&pf_rd_r=EWZAXKRE2TKM9SEYR1C9&qid=1745798756&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=peptides%2Caps%2C138&sr=1-5-9428117c-b940-4daa-97e9-ad363ada7940-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/6175+X-hBHL._SL1500_.jpg",
            suitableFor: "Sensitive"
        },
        {
            name: "The Ordinary Multi-Peptide + Copper Peptides 1%",
            activeIngredient: "Peptides",
            properties: "Boost collagen production, enhancing firmness and promoting even texture.",
            description: "The Ordinary Multi-Peptide + Copper Peptides 1% Serum is an advanced age-supporting serum.",
            link: "https://www.amazon.com/Ordinary-Multi-Peptide-Copper-Peptides-Serum/dp/B0C9DXGXZ3/ref=sr_1_8?crid=F7FWWL50VZS&dib=eyJ2IjoiMSJ9.TyApC_k1nIiJ6OxdPI1heyURDGt_b1ftEYLJO2w4g-Xcyx00AYnf_tllRIx2k5qMQLYWkQ0JJ-ELBridOuA-9kDTZKCZXJJIXZV4QQxyydUrdDg2BLbOGUfYkVS_sTiOP_gGocRP1vmuNmCbIjrL4TfJ80lwKS9Izln0Blq1YG1vCucWpyntJgPGMhohduHJIqknpUXgHdVLprFSnbS3crXLR15xh_TKjVRJ5ZOXTVNy5StHbX7S5B8AiA1MOb10iyvSzckZkzvqLeWJCwKWZ7xP89k8a7OV6NgJGcPZubA.7QJ3LesYFnKDzCZ8lfo5Js1wFFoUFeBPS3ROTr83pcw&dib_tag=se&keywords=peptides%2Bserum%2Bfor%2Bface&qid=1745798756&sprefix=peptides%2Caps%2C138&sr=8-8&th=1",
            imageSrc: "https://a.media-amazon.com/images/I/514zyceikzL._SL1500_.jpg",
            suitableFor: "Combination"
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