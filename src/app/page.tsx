"use client";

import { useEffect } from "react";

export default function RootRedirect() {
    useEffect(() => {
        window.location.href = "https://visualandgrowth.com/";
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg text-gray-600">Redirecting to Visual & Growth...</p>
        </div>
    );
}
