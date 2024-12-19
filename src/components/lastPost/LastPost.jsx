import React, { useEffect } from "react";
import styles from "./LastPost.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function LastPost({ post, index }) {
  const navigate = useNavigate()
  const variants = {
    initial:{
      x:0
    },
    after:{
      x:-10,
      transition:{delay:1}

    }
  }
  return (
    <motion.div
    initial="initial"
    whileHover="after"
    // variants={variants}
    className={`${styles.wrapper} box_shadow`}
    onClick={()=> navigate(`/post/${index}`)}>
      <img
        src={`/public${post.image}`}
        alt=""
        className={styles.image}
      />
      <div className={styles.postTheme}>
        {post.title}
      </div>
      <div className={styles.description}>
        {post.description}
      </div>
    </motion.div>
  );
}
