import { motion } from "framer-motion";

const lines = [
  "Boot sequence initiated...",
  "Calibrating neural uplink... OK",
  "Establishing secure link... OK",
  "Decrypting archives... OK",
  "Loading visual cortex shaders... OK",
  "Preparing timeline... OK",
];

export default function Loader() {
  return (
    <div className="min-h-dvh bg-black flex items-center justify-center">
      <div className="w-[min(700px,92vw)]">
        <header className="mb-6 text-center">
          <h1 className="font-oi text-3xl text-neon-orange drop-shadow-[0_0_12px_#ff7b54] rgb-fringe">
            Innovatia 4.0
          </h1>
        </header>

        <div className="bg-base-panel/60 border border-white/10 rounded-xl p-5 overflow-hidden">
          <div className="space-y-2 font-vt323 text-lg">
            {lines.map((l, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.5, duration: 0.4 }}
                className="text-white/90"
              >
                {">"} {l}
              </motion.p>
            ))}
          </div>

          {/* progress bar */}
          <motion.div
            className="mt-6 h-2 w-full rounded bg-white/10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: lines.length * 0.5 }}
          >
            <motion.div
              className="h-full bg-neon-orange"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: lines.length * 0.5 }}
              style={{ boxShadow: "0 0 12px #ff7b54" }}
            />
          </motion.div>

          {/* scanning line */}
          <div className="relative mt-6 h-32 bg-black/40 rounded">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-x-0 h-10 bg-white/5 animate-scan" />
            </div>
            <div className="absolute inset-0 grid grid-cols-12 opacity-20">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-white/10" />
              ))}
            </div>
            <p className="absolute inset-0 m-3 font-vt323 text-white/80">
              &gt; Initializing visual matrix...
            </p>
          </div>
        </div>

        <p className="text-center mt-5 font-vt323 text-white/60 animate-flicker">
          PRESS START TO CONTINUE
        </p>
      </div>
    </div>
  );
}