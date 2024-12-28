import React from "react";
import styles from "./Home.module.css";
import { Container } from "@mui/material";
import Section from "./animate-section/Section_3";
import RecentPosts from "./recentPosts/RecentPosts";
import { useTranslation } from "react-i18next";
import LastPosts from "./last-posts/LastPosts";
import { motion } from "framer-motion";
import AnimateBar from "./animateBar/AnimateBar";
export default function Home() {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const textAnimationRe = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const { t} = useTranslation();
  return (
    <div>
      <div className={`${styles.section_1} box_shadow`}>
        <Container maxWidth="xl">
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            className={styles.section_1_row_1}
          >
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView={"visible"}
            custom={1}
            variants={textAnimation}
            className={styles.section_1_row_2}
          >
            {"the role of agriculture and medicine in science".toUpperCase()}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView={"visible"}
            custom={2}
            variants={textAnimationRe}
            className={`${styles.section_1_row_3}`}
          >
            {t("mainH2")}
          </motion.p>
          <AnimateBar />
        </Container>
      </div>
      <div className={styles.section_03}>
          <LastPosts />
      </div>
    </div>
  );
}
