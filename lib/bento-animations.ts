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

// Glow effect applied directly to DOM elements
export function applyGlowHover(element: HTMLElement) {
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
  };

  const handleMouseLeave = () => {
    isHovered = false;
    glow.style.opacity = "0";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isHovered) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Direct style update for performance (gsap ticker could also be used)
    glow.style.background = `radial-gradient(circle 300px at ${x}px ${y}px, var(--color-primary), transparent)`;
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
