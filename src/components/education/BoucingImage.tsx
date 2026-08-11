import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}
interface Velocity {
  dx: number;
  dy: number;
}

export function BouncingImage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const [vel, setVel] = useState<Velocity>({ dx: 0, dy: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const mousePos = useRef<Point>({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (containerRef.current && imageRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const img = imageRef.current.getBoundingClientRect();
      setPos({
        x: container.width / 2 - img.width / 2,
        y: container.height / 2 - img.height / 2,
      });
    }
  }, []);

  useEffect(() => {
    if (!isMoving) return;

    const move = (): void => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const img = imageRef.current.getBoundingClientRect();

      setPos((prev) => {
        // 1. Calculate base movement
        let newDx = vel.dx;
        let newDy = vel.dy;

        // 2. Mouse Avoidance Logic (Overrides current velocity)
        const imgCenterX = prev.x + img.width / 2;
        const imgCenterY = prev.y + img.height / 2;
        const relativeMouseX = mousePos.current.x - container.left;
        const relativeMouseY = mousePos.current.y - container.top;

        const dist = Math.sqrt(
          Math.pow(imgCenterX - relativeMouseX, 2) +
            Math.pow(imgCenterY - relativeMouseY, 2),
        );

        if (dist < 120) {
          const speed = 2; // Boost speed when fleeing
          newDx = relativeMouseX < imgCenterX ? speed : -speed;
          newDy = relativeMouseY < imgCenterY ? speed : -speed;
        }

        // 3. Wall Collision & Logic
        let nextX = prev.x + newDx;
        let nextY = prev.y + newDy;

        // Bounce and Clamp Horizontal
        if (nextX <= 0) {
          nextX = 0;
          newDx = Math.abs(newDx);
        } else if (nextX + img.width >= container.width) {
          nextX = container.width - img.width;
          newDx = -Math.abs(newDx);
        }

        // Bounce and Clamp Vertical
        if (nextY <= 0) {
          nextY = 0;
          newDy = Math.abs(newDy);
        } else if (nextY + img.height >= container.height) {
          nextY = container.height - img.height;
          newDy = -Math.abs(newDy);
        }

        setVel({ dx: newDx, dy: newDy });
        return { x: nextX, y: nextY };
      });
    };

    const frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [pos, vel, isMoving]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    if (!isMoving) setIsMoving(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-4/5 overflow-hidden rounded-xl"
    >
      <img
        ref={imageRef}
        src="assets/university_img.png"
        alt="Bouncer"
        className="absolute size-20 lg:size-50 object-contain pointer-events-none select-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          // Removed transition for frame-perfect clamping
          willChange: "transform",
        }}
      />
    </div>
  );
}
