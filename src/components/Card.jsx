import React, { useState } from "react";
import { motion } from "framer-motion";

function Card(props) {
  const [like, setLike] = useState(Number(localStorage.getItem(props.id)) || 0);

  const clickHandler = event => {
    event.target.name == "increase" ? setLike(like + 1) : setLike(like - 1);
  };

  localStorage.setItem(props.id, like);

  const { title, body, imgUrl } = props.item;
  const ITEM = props.item;

  const aboutTransition = {
    duration: 2
  };

  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100vw"
    }
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={aboutTransition}
      className="col mb-2 "
    >
      <div style={{ width: "20rem" }} className="card">
        <img src={ITEM.imgUrl} className="img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-muted">{ITEM.title}</h5>
          <p className="card-text text-muted">{ITEM.body}</p>
          <button
            type="button"
            name="increase"
            className="btn btn-success mx-2"
            onClick={clickHandler}
          >
            Like
          </button>
          <button
            type="button"
            name="decrease"
            className="btn btn-danger"
            onClick={clickHandler}
          >
            Unlike
          </button>
        </div>
        <small className="text-muted text-end my-3 mx-3 "> {like} Like</small>
      </div>
    </motion.div>
  );
}

export default Card;
