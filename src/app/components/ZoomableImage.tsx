"use client";

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/app/components/ui/dialog";

export function ZoomableImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img 
          src={src} 
          alt={alt} 
          className={`cursor-zoom-in transition-transform duration-300 hover:scale-[1.01] ${className || ""}`} 
        />
      </DialogTrigger>
      <DialogContent className="w-fit h-fit max-w-[90vw] sm:max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none [&>button]:text-white [&>button]:bg-black/50 [&>button]:p-2 [&>button]:rounded-full [&>button]:hover:bg-black/80 [&>button]:right-4 [&>button]:top-4">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <img 
          src={src} 
          alt={alt} 
          className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl" 
        />
      </DialogContent>
    </Dialog>
  );
}
