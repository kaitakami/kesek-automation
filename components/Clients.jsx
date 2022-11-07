import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Client from "./Client";

const Clients = ({ clients, t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {}, [isInView]);
  return (
    <section className="p-8 pt-20 mt-12 max-w-screen-2xl m-auto">
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h3 className="text-center font-bold md:text-4xl text-2xl pb-8 md:pb-12 text-dark-gray">
          {t.clientsText}
        </h3>
      </motion.div>

      <div className="w-full lg:flex md:px-8 md:py-4 md:gap-12 grid grid-cols-2 gap-5">
        {clients.map(({ clientName, clientsLogoImage }, i) => (
          <Client
            key={clientName}
            clientName={clientName}
            clientsLogoImage={clientsLogoImage}
            // delay of the reveal animation in each Client component
            delay={((i + 1) / 6) + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
