import style from "./style.module.scss";
import Icon from "../Icon/Index";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const History = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `Minha intenção ao criar essa biblioteca online é tornar o conhecimento acessível a todos. 
Quero que qualquer pessoa, de qualquer lugar, possa ter acesso a livros, artigos e conteúdos que inspirem, eduquem 
e ajudem no crescimento pessoal e profissional.`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Texto copiado!");
    });
  };

  return (
    <section className={style.history}>
      <div className={style.history__header}>
        <h1>History</h1>
        <div
          className={style.history__icon}
          onClick={handleCopy}
          title="Clique para copiar a história"
        >
          <Icon name="album" width="40px" height="40px" />
        </div>
      </div>

      <div className={style.history__card}>
        <p>
          Minha intenção ao criar essa biblioteca online é tornar o conhecimento
          acessível a todos.
        </p>
        <p>
          Quero que qualquer pessoa, de qualquer lugar, possa encontrar livros e
          artigos úteis.
        </p>
        <p>
          Essa plataforma não é apenas um espaço de leitura, mas um lugar de
          troca e aprendizado.
        </p>
        <p>
          Acredito que o conhecimento transforma vidas e quero contribuir para
          isso.
        </p>
        <p>
          Clique no ícone acima para copiar essa missão e compartilhar com quem
          você quiser.
        </p>
      </div>

      {copied && <Toaster />}
    </section>
  );
};

export default History;
