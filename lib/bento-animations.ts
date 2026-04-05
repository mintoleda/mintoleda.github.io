import gsap from "gsap";

export function magneticSnapEntrance(elements: NodeListOf<Element> | Element[]) {
  // Clear any existing animations
  gsap.killTweensOf(elements);
  
  // Set initial state
  gsap.set(elements, { 
    opacity: 0, 
    scale: 0.9,
    y: 20
  });

  // Entrance animation
  gsap.to(elements, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1,
    stagger: 0.1,
    ease: "elastic.out(1, 0.7)",
  });
}

// Magnetic hover effect applied directly to DOM elements
export function applyMagneticHover(element: HTMLElement) {
  let isHovered = false;

  const handleMouseEnter = () => {
    isHovered = true;
    gsap.to(element, { scale: 1.02, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    isHovered = false;
    gsap.to(element, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isHovered) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * 0.05, // Subtle magnetic pull
      y: y * 0.05,
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
  };
}
