'use client'
import React, { useState } from 'react';

export default function HoverComponent( { name }: { name: string } ) {
    const [isHovering, setIsHovering] = useState(false);

    const displayText = (name: string) => {
        switch (name) {
            case "Oily":
                return "Skin produces excess oil (sebum), often leading to a shiny appearance, enlarged pores, and a higher likelihood of acne or blackheads."
            case "Dry":
                return "Lacks sufficient moisture and natural oils, often feeling tight, rough, or flaky. May appear dull and is prone to irritation or redness."
            case "Combination":
                return "Features areas of both oily and dry skin. Typically, the T-zone (forehead, nose, and chin) is oily, while cheeks are dry or normal."
            case "Sensitive":
                return "Easily irritated or inflamed by products, environmental factors, or stress. Frequently experiences redness, itching, or stinging sensations."
        }
    }

    return (
        <div
            className="mb-6 text-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <button className="w-40 h-15 font-bold text-center bg-sky-600 text-white p-2 rounded-full transition duration-150 ease-in-out hover:bg-sky-800 hover:drop-shadow-md">{name}</button>
            <div className="mt-1 min-h-[20px]">
            {isHovering && <p className="text-gray-700 text-sm transition-opacity duration-150 ease-in-out p-2">{displayText(name)}</p>}
            </div>
        </div>
    );
}