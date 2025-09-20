// src/components/ui/FeatureCard.jsx
"use client";

import React from "react";

export default function FeatureCard({ videoSrc, title, description }) {
    return (
        <div className="bg-white text-center h-[347px] w-full lg:h-[360px] rounded-[20px] shadow-xl p-4 flex flex-col justify-center items-center">
            <div className="h-[227px] w-full bg-[#EDEEEF] flex items-center justify-center rounded-lg">
                <video
                    className="rounded-lg md:h-[190px] h-[150px] w-[174px] object-cover mb-2"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
            <div className="p-2">
                <h3 className="lg:text-[24px] lg:mb-4 font-medium">
                    {title}
                </h3>
                <p className="lg:text-[18px] text-[14px] text-[#808080] max-w-xl">
                    {description}
                </p>
            </div>
        </div>
    );
}
