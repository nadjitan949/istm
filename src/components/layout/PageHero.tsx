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
    <div className={["relative overflow-hidden", className].filter(Boolean).join(" ")}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`Bannière ${title}`}
          className="w-full h-64 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative px-4 py-12 md:py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};