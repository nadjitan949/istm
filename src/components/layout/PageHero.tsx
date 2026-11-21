"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as React from "react";
import { images } from "@/data/images";

interface PageHeroProps {
  title: string;
  href?: string;
  className?: string;
}

export const PageHero = ({ title, href, className }: PageHeroProps) => {
  const pageHeroImages = images.pageHero as Record<string, string>;
  const imageUrl = href ? pageHeroImages[href] ?? images.hero : images.hero;

  return (
    <div className={["relative overflow-hidden bg-istm-900", className].filter(Boolean).join(" ")}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`Bannière ${title}`}
          className="h-80 w-full object-cover md:h-88"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,44,78,0.92)_0%,rgba(8,44,78,0.75)_45%,rgba(11,79,148,0.36)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="mt-6 text-4xl text-white md:text-6xl">
            {title}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};