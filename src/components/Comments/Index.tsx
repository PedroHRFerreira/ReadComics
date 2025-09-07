"use client";
import { useState } from "react";
import style from "./style.module.scss";

const Comments = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [comments, setComments] = useState([
    { id: 1, user: "Peter Parker", text: "Esse capítulo foi incrível!" },
    { id: 2, user: "Mary Jane", text: "A arte está cada vez melhor 👏" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([
      ...comments,
      { id: comments.length + 1, user: "Você", text: newComment },
    ]);
    setNewComment("");
  };

  return (
    <div className={style.comments}>
      <h1>Comentários</h1>
      <div className={style.comments__list}>
        {comments.map((c) => (
          <div key={c.id} className={style.comments__list__item}>
            <span className={style.user}>{c.user}:</span>
            <p className={style.text}>{c.text}</p>
          </div>
        ))}
      </div>
      {isLoggedIn ? (
        <div className={style.comments__form}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escreva seu comentário..."
          />
          <button onClick={handleAddComment}>Comentar</button>
        </div>
      ) : (
        <p className={style.loginWarning}>
          Você precisa estar logado para comentar.
        </p>
      )}
    </div>
  );
};

export default Comments;
