"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/BotanicalArt";
import { galleryItems } from "@/data/gallery";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % galleryItems.length));
      if (event.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length
        );
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section id="galeria" className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Um pouco do nosso jardim"
          description="Fachada, vasos, plantas e arranjos que fazem parte do dia a dia da loja."
        />

        <Reveal className="mt-14">
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {galleryItems.map((item, i) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative aspect-square w-[75vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-auto sm:shrink"
                aria-label={`Ampliar imagem: ${item.label}`}
              >
                <MediaFrame
                  variant={item.variant}
                  label={item.label}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </Container>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/90 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-6 top-6 text-ivory/80 hover:text-ivory"
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) =>
                i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length
              );
            }}
            className="absolute left-4 text-ivory/70 hover:text-ivory sm:left-8"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>

          <div
            className="w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <MediaFrame
              variant={galleryItems[activeIndex].variant}
              label={galleryItems[activeIndex].label}
              className="aspect-square w-full rounded-2xl"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? i : (i + 1) % galleryItems.length));
            }}
            className="absolute right-4 text-ivory/70 hover:text-ivory sm:right-8"
            aria-label="Próxima"
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
