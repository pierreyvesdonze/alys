import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QuestSession from "../../QuestSession";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import RainSound from "./RainSound";
import Animation from "./Animation";
import GameTitleAnimation from "./GameTItleAnimation";

const Home = () => {
  const questSession = QuestSession();
  const [path, setPath] = useState("");

  /* questSession.initializeSession(); */

  // Niveau 1 si on débute le jeu, sinon niveau suivant
  useEffect(() => {
    const nextPath = questSession.getQuestResult(0);
    if (!nextPath) {
      questSession.setQuestResult(0, "/level1");
      setPath("/level1");
    } else {
      setPath(nextPath);
    }
  }, [questSession]);

  // On trim le titre selon la provenance du niveau précédent (fin de dialogue ou checkpoint)
  const trimmedRoute = path.startsWith("/") ? path.slice(1) : path;
  const formattedTitle =
    trimmedRoute.charAt(0).toUpperCase() + trimmedRoute.slice(1);

  return (
    <AnimatePresence>
      {/* ANIMATION BANDES BLANCHES */}
      <Animation />

      <motion.div
        key={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: 3 }}
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* TEMPORAIRE SON DE PLUIE */}
        <RainSound />

        {/* TITRE DU JEU */}
        <GameTitleAnimation />

        <Typography
          variant="h4"
          style={{ color: "var(--second-text-color)" }}
          className="home-title-level"
        >
          {formattedTitle}
        </Typography>

        <Link to={path} className="custom-link-btn play-btn">
          JOUER
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
