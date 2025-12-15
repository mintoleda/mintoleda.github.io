export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      {/* Grid Pattern - Neutral Grey with opacity */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border),transparent_80%)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border),transparent_80%)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Radial Vignette/Mask to fade out edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
    </div>
  );
}
