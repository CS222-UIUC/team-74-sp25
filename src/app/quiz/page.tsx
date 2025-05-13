"use client";
import { useState } from "react";
import HoverComponent from "./HoverComponent";
import SkinTypeQuiz from "./SkinTypeQuiz";
import { useRouter } from "next/navigation";


export default function Quiz() {
    const getAssetPath = (path: string) => {
        const basePath = process.env.NODE_ENV === 'production' ? '/TEAM-74-SP25' : '';
        return `${basePath}${path}`;
    };

    const getInternalPath = (path: string) => {
        const basePath = process.env.NODE_ENV === 'production' ? '/TEAM-74-SP25' : '';
        return `${basePath}${path}`;
    };

    const [selectedSkinType, setSelectedSkinType] = useState<string | null>(
        null
    );
    const [showQuiz, setShowQuiz] = useState(false);

    const router = useRouter();

    const handleClick = () => {
        router.push(getInternalPath(`/skinconcern?skinType=${selectedSkinType}`));
    }

    const handleSkinTypeSelect = (type: string) => {
        if (type === "Not sure") {
            setShowQuiz(true);
            setSelectedSkinType(null);
        } else {
            setSelectedSkinType(type);
            setShowQuiz(false);
        }
    };

    const handleQuizComplete = (type: string | null) => {
        setSelectedSkinType(type);
        setShowQuiz(false);
    };

    const renderSelectedTypeMessage = () => {
        if (!selectedSkinType) return null;

        return (
            <div className="mt-6 p-8 rounded-lg">
                <h2 className="font-bold text-3xl text-sky-600 mb-4 text-center">
                    Your Skin Type: {selectedSkinType}
                </h2>
                <p className="text-gray-700 text-center mb-8">
                    {displaySkinTypeDescription(selectedSkinType)}
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => setSelectedSkinType(null)}
                        className="font-bold text-center bg-sky-600 text-white py-3 px-8 rounded-full transition duration-150 ease-in-out hover:bg-sky-700"
                    >
                        Select a Different Skin Type
                    </button>
                    <button
                        onClick={handleClick}
                        className="font-bold text-center bg-sky-600 text-white py-3 px-8 rounded-full transition duration-150 ease-in-out hover:bg-sky-700"
                    >
                        Continue
                    </button>
                </div>
            </div>
        );
    };

    const displaySkinTypeDescription = (type: string) => {
        switch (type) {
            case "Oily":
                return "Skin produces excess oil (sebum), often leading to a shiny appearance, enlarged pores, and a higher likelihood of acne or blackheads.";
            case "Dry":
                return "Lacks sufficient moisture and natural oils, often feeling tight, rough, or flaky. May appear dull and is prone to irritation or redness.";
            case "Combination":
                return "Features areas of both oily and dry skin. Typically, the T-zone (forehead, nose, and chin) is oily, while cheeks are dry or normal.";
            case "Sensitive":
                return "Easily irritated or inflamed by products, environmental factors, or stress. Frequently experiences redness, itching, or stinging sensations.";
            default:
                return "";
        }
    };

    return (
        <div>
            <div className="grid justify-center p-7">
                <img
                    className="m-auto"
                    src={getAssetPath("/skintype.webp")}
                    alt="Skin type"
                    width={300}
                    height={300}
                />

                {!showQuiz && !selectedSkinType && (
                    <>
                        <h1 className="font-bold text-4xl p-4 text-center">
                            What is your skin type?
                        </h1>
                        <HoverComponent
                            name="Oily"
                            onSkinTypeSelect={handleSkinTypeSelect}
                        />
                        <HoverComponent
                            name="Dry"
                            onSkinTypeSelect={handleSkinTypeSelect}
                        />
                        <HoverComponent
                            name="Combination"
                            onSkinTypeSelect={handleSkinTypeSelect}
                        />
                        <HoverComponent
                            name="Sensitive"
                            onSkinTypeSelect={handleSkinTypeSelect}
                        />
                        <HoverComponent
                            name="Not sure"
                            onSkinTypeSelect={handleSkinTypeSelect}
                        />
                    </>
                )}

                {showQuiz && (
                    <div className="mt-4">
                        <h1 className="font-bold text-4xl p-4 text-center">
                            Let&apos;s determine your skin type
                        </h1>
                        <SkinTypeQuiz onComplete={handleQuizComplete} />
                    </div>
                )}

                {selectedSkinType && renderSelectedTypeMessage()}
            </div>
        </div>
    );
}