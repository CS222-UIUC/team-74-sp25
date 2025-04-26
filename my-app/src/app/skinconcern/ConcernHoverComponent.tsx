'use client'
import React, { useState } from 'react';

export default function ConcernHoverComponent({ name, onConcernSelect }: { name: string; onConcernSelect?: (type: string) => void }) {
    const [isHovering, setIsHovering] = useState(false);

    const displayText = (name: string) => {
        switch (name) {
            case "Acne":
                return "Acne is the result of hair follicles being clogged with oil and dead skin cells, and bacteria, resulting in whiteheads, blackheads, and pimples across your body.";
            case "Aging":
                return "As a natural consequence of getting older, your body will produce less collagen and elastin, resulting in thinner, drier skin that produces more wrinkles and less elasticity.";
            case "Hyperpigmentation":
                return "Hyperpigmentation occurs when certain parts of the skin become darker in color than other parts, caused by an excess amount of melanin production.";
            case "Sensitivity":
                return "Sensitive skin tends to react easily to environmental factors, products, or allergens, often resulting in redness, irritation, or discomfort.";
            case "Dullness":
                return "Dull skin often appears lackluster, uneven, or tired, and is usually caused by a buildup of dead skin cells, dehydration, or lack of circulation.";
            case "Uneven Texture":
                return "Uneven skin texture refers to a lack of smoothness, often caused by factors such as clogged pores, buildup of dead skin cells, acne scars, or dehydration.";
            case "Not sure":
                return "Take our quick quiz to help determine your primary skin concern based on a few simple questions.";
            default:
                return "";
        }
    }

    const handleClick = () => {
        if (onConcernSelect) {
            onConcernSelect(name);
        }
    };

    return (
        <div
            className="mb-6 text-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <button 
                className="w-40 h-15 font-bold text-center bg-sky-600 text-white p-2 rounded-full transition duration-150 ease-in-out hover:bg-sky-800 hover:drop-shadow-md"
                onClick={handleClick}
            >
                {name}
            </button>
            <div className="mt-1 min-h-[20px]">
            {isHovering && <p className="text-gray-700 text-sm transition-opacity duration-150 ease-in-out p-2">{displayText(name)}</p>}
            </div>
        </div>
    );
}