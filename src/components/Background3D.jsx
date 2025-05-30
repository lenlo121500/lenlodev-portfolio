import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Background3D = () => {
  const mountRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Setup scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111827, 0.1);
    mount.appendChild(renderer.domElement);

    camera.position.set(0, 2, 15);

    // Geometries
    const shapes = [];
    const geometries = [
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.7),
    ];

    const baseMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < 8; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const mesh = new THREE.Mesh(geometry, baseMaterial.clone());

      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        },
        originalY: mesh.position.y,
      };

      shapes.push(mesh);
      scene.add(mesh);
    }

    // Particles
    const particleCount = 100;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      shapes.forEach((shape, index) => {
        const { rotationSpeed, originalY } = shape.userData;
        shape.rotation.x += rotationSpeed.x;
        shape.rotation.y += rotationSpeed.y;
        shape.rotation.z += rotationSpeed.z;
        shape.position.y = originalY + Math.sin(elapsedTime + index) * 0.5;
      });

      particles.rotation.y = elapsedTime * 0.1;

      camera.position.x = Math.sin(elapsedTime * 0.2) * 0.5;
      camera.position.y = 2 + Math.cos(elapsedTime * 0.15) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }

      shapes.forEach((shape) => {
        shape.geometry.dispose();
        shape.material.dispose();
      });

      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0"
      style={{
        zIndex: -1,
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      }}
    />
  );
};

export default Background3D;
