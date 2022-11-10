import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
const inter = Inter();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ duration: 0.75 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily}, -apple-system,
              BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
              Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
