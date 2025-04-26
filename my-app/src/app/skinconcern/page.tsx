'use client'
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ConcernHoverComponent from "./ConcernHoverComponent";
import ProductDisplay from "./ProductDisplay";
import SkinConcernQuiz from "./SkinConcernQuiz";

// Create a client component that uses useSearchParams
function SkinConcernContent() {
    const searchParams = useSearchParams();
    const [skinType, setSkinType] = useState<string | null>(null);
    const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
    const [showProducts, setShowProducts] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    
    const fetchData = () => {
        fetch("http://localhost:3001/skin_concern", {
            method: "POST",
            body: JSON.stringify({
                skin_type: selectedConcern,
            }),
            headers: {
                "Content-type":
                    "application/json; charset=UTF-8",
            },
        })
    }
    
    useEffect(() => {
        const type = searchParams.get('skinType');
        setSkinType(type);
    }, [searchParams]);
    
    const handleConcernSelect = (concern: string) => {
        if (concern === "Not sure") {
            setShowQuiz(true);
            setSelectedConcern(null);
        } else {
            setSelectedConcern(concern);
            setShowProducts(false);
            setShowQuiz(false);
        }
    };

    const handleQuizComplete = (concern: string | null) => {
        setSelectedConcern(concern);
        setShowQuiz(false);
    };

    const handleContinue = () => {
        fetchData();
        if (selectedConcern) {
            setShowProducts(true);
        }
    };

    const displayConcernDescription = (concern: string) => {
        switch (concern) {
            case "Acne":
                return "Acne is the result of hair follicles being clogged with oil and dead skin cells, and bacteria, resulting in whiteheads, blackheads, and pimples across your body. It can usually be treated with topical medications, gentle cleansers, and oral antibiotics.";
            case "Aging":
                return "As a natural consequence of getting older, your body will produce less collagen and elastin, resulting in thinner, drier skin that produces more wrinkles and less elasticity.";
            case "Hyperpigmentation":
                return "Hyperpigmentation occurs when certain parts of the skin become darker in color than other parts, caused by an excess amount of melanin production. It can also be aggravated by excessive sun exposure, genetics, and inflammation.";
            case "Sensitivity":
                return "Sensitive skin tends to react easily to environmental factors, products, or allergens, often resulting in redness, irritation, or discomfort. It's usually more prone to dryness and may require gentle, soothing products free of harsh chemicals, fragrances, and alcohol.";
            case "Dullness":
                return "Dull skin often appears lackluster, uneven, or tired, and is usually caused by a buildup of dead skin cells, dehydration, or lack of circulation.";
            case "Uneven Texture":
                return "Uneven skin texture refers to a lack of smoothness, often caused by factors such as clogged pores, buildup of dead skin cells, acne scars, or dehydration.";
            default:
                return "";
        }
    };

    const renderSelectedConcernMessage = () => {
        if (!selectedConcern) return null;

        return (
            <div className="mt-6 p-8 rounded-lg">
                <h2 className="font-bold text-3xl text-sky-600 mb-4 text-center">
                    Your Skin Concern: {selectedConcern}
                </h2>
                <p className="text-gray-700 text-center mb-8">
                    {displayConcernDescription(selectedConcern)}
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => setSelectedConcern(null)}
                        className="font-bold text-center bg-sky-600 text-white py-3 px-8 rounded-full transition duration-150 ease-in-out hover:bg-sky-700"
                    >
                        Select a Different Concern
                    </button>
                    <button
                        onClick={handleContinue}
                        className="font-bold text-center bg-sky-600 text-white py-3 px-8 rounded-full transition duration-150 ease-in-out hover:bg-sky-700"
                    >
                        Continue
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="grid justify-center p-7">
                <Image
                    className="m-auto"
                    src="/skinconcern.webp"
                    alt="Skin concern"
                    width={300}
                    height={300}
                    priority
                />

                {!selectedConcern && !showQuiz && !showProducts && (
                    <>
                        <h1 className="font-bold text-4xl p-4 text-center">
                            What is your primary skin concern?
                        </h1>
                        <ConcernHoverComponent
                            name="Acne"
                            onConcernSelect={handleConcernSelect}
                        />
                        <ConcernHoverComponent
                            name="Aging"
                            onConcernSelect={handleConcernSelect}
                        />
                        <ConcernHoverComponent
                            name="Hyperpigmentation"
                            onConcernSelect={handleConcernSelect}
                        />
                        <ConcernHoverComponent
                            name="Sensitivity"
                            onConcernSelect={handleConcernSelect}
                        />
                        <ConcernHoverComponent
                            name="Dullness"
                            onConcernSelect={handleConcernSelect}
                        />
                        <ConcernHoverComponent
                            name="Uneven Texture"
                            onConcernSelect={handleConcernSelect}
                        />
                        <ConcernHoverComponent
                            name="Not sure"
                            onConcernSelect={handleConcernSelect}
                        />
                    </>
                )}

                {showQuiz && (
                    <div className="mt-4">
                        <h1 className="font-bold text-4xl p-4 text-center">
                            Let&apos;s determine your skin concern
                        </h1>
                        <SkinConcernQuiz onComplete={handleQuizComplete} />
                    </div>
                )}

                {selectedConcern && !showProducts && renderSelectedConcernMessage()}
                
                {showProducts && selectedConcern && (
                    <div className="mt-6">
                        <ProductDisplay 
                            concern={selectedConcern} 
                            skinType={skinType}
                        />
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setShowProducts(false)}
                                className="font-bold text-center bg-sky-600 text-white py-3 px-8 rounded-full transition duration-150 ease-in-out hover:bg-sky-700"
                            >
                                Back to Skin Concern
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Add a loading UI
function LoadingUI() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-600"></div>
        </div>
    );
}

// Main component wrapped in Suspense
export default function SkinConcernPage() {
    return (
        <Suspense fallback={<LoadingUI />}>
            <SkinConcernContent />
        </Suspense>
    );
}