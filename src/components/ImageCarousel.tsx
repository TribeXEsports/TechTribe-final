
"use client"

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Card } from './ui/card'

type ImageInfo = {
    src: string
    alt: string
    hint: string
}

interface ImageCarouselProps {
    images: ImageInfo[]
    className?: string
}

export const ImageCarousel = ({ images, className }: ImageCarouselProps) => {
    const extendedImages = [...images, ...images]; // Duplicate for seamless loop

    return (
        <div
            className={cn(
                "w-full overflow-hidden relative",
                "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]",
                className
            )}
        >
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                {extendedImages.map((image, index) => (
                    <Card key={index} className="flex-shrink-0 w-[400px] h-[300px] mx-4 overflow-hidden shadow-md">
                         <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={300}
                            data-ai-hint={image.hint}
                            className="h-full w-full object-cover"
                        />
                    </Card>
                ))}
            </div>
        </div>
    )
}
