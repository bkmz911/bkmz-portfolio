"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Вспомогательный компонент для сброса скролла
function ScrollReset() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            // immediate: true мгновенно обнуляет инерцию и позицию
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    return null;
}

export default function LenisProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.05,
                duration: 1.5,
                smoothWheel: true,
                syncTouch: true,
            }}
        >
            <ScrollReset />
            {/* @ts-ignore */}
            {children}
        </ReactLenis>
    );
}
