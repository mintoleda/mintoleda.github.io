import gsap from "gsap";

export function rippleEntrance(elements: NodeListOf<Element> | Element[]) {
  gsap.killTweensOf(elements);
  
  // Set initial state: tiny and faded
  gsap.set(elements, { 
    opacity: 0, 
    scale: 0.5,
    transformOrigin: "center center",
    filter: "blur(10px)"
  });

  // Calculate distance from center to create a ripple stagger
  const gridCenter = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  
  // Create an array with distance data
  const elementsWithData = Array.from(elements).map(el => {
    const rect = el.getBoundingClientRect();
    const elCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    const distance = Math.sqrt(
      Math.pow(elCenter.x - gridCenter.x, 2) + Math.pow(elCenter.y - gridCenter.y, 2)
    );
    return { el, distance };
  });

  // Sort by distance
  elementsWithData.sort((a, b) => a.distance - b.distance);
  
  // Animate with stagger based on sorted order
  elementsWithData.forEach((item, index) => {
    gsap.to(item.el, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.2,
      delay: index * 0.08,
      ease: "expo.out",
    });
  });
}

// Hybrid: Glow effect + Magnetic pull applied directly to DOM elements
export function applyLiquidMagneticHover(element: HTMLElement) {
  let isHovered = false;

  // Add the glow element dynamically
  const glow = document.createElement("div");
  glow.className = "absolute inset-0 z-0 opacity-0 pointer-events-none transition-opacity duration-300";
  glow.style.background = "radial-gradient(circle 300px at 0px 0px, var(--color-primary), transparent)";
  glow.style.mixBlendMode = "overlay";
  
  // Prepend glow
  element.insertBefore(glow, element.firstChild);

  const handleMouseEnter = () => {
    isHovered = true;
    glow.style.opacity = "0.2";
    gsap.to(element, { scale: 1.02, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    isHovered = false;
    glow.style.opacity = "0";
    gsap.to(element, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isHovered) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Direct style update for glow performance
    glow.style.background = `radial-gradient(circle 300px at ${x}px ${y}px, var(--color-primary), transparent)`;

    // Calculate center-relative coordinates for magnetic pull
    const centerX = x - rect.width / 2;
    const centerY = y - rect.height / 2;

    // Apply subtle magnetic pull
    gsap.to(element, {
      x: centerX * 0.05, 
      y: centerY * 0.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);
  element.addEventListener("mousemove", handleMouseMove);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
    element.removeEventListener("mousemove", handleMouseMove);
    if (element.contains(glow)) element.removeChild(glow);
  };
}
