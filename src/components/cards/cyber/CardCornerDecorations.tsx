/**
 * CardCornerDecorations Component
 * 
 * Decorative corner elements for cyber theme cards.
 * Shows gradient lines in top-right and bottom-left corners
 * with opacity changes on hover.
 */
export default function CardCornerDecorations() {
  return (
    <>
      {/* Top-right corner */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-lime-400 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-lime-400 to-transparent" />
      </div>
      
      {/* Bottom-left corner */}
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-magenta-500 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-magenta-500 to-transparent" />
      </div>
    </>
  );
}
