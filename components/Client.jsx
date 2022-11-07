import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Client = ({ clientName, clientsLogoImage, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {}, [isInView]);

  return (
    <motion.div className="w-full" ref={ref}>
      <Image
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          transitionDelay: `${delay}s`,
        }}
        className="object-contain w-full"
        src={clientsLogoImage.url}
        width={clientsLogoImage.width}
        height={clientsLogoImage.height}
        alt={`${clientName} logo`}
      />
    </motion.div>
  );
};

export default Client;
