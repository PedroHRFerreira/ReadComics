"use client";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import style from "./style.module.scss";
import { IUser } from "./IUser.types";
const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const [formData, setFormData] = useState<IUser>({
    name: "",
    email: "",
    birthDate: "",
    profileImage: "",
    bio: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.email || !formData.birthDate) {
      toast.error(
        "⚠️ Preencha os campos obrigatórios: Nome, Email e Data de Nascimento"
      );
      return;
    }
    setUser(formData);
    setIsLoggedIn(true);
    toast.success("✅ Usuário salvo com sucesso!");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setFormData({
      name: "",
      email: "",
      birthDate: "",
      profileImage: "",
      bio: "",
      location: "",
    });
    toast("👋 Você saiu da conta.");
  };

  return (
    <div className={style.users}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            style: {
              background: "#2e7d32",
            },
          },
          error: {
            style: {
              background: "#d32f2f",
            },
          },
        }}
      />

      {!isLoggedIn ? (
        <>
          <h1 className={style.users__title}>Criar Conta</h1>
          <div className={style.users__form}>
            <input
              type="text"
              name="name"
              placeholder="Nome *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="profileImage"
              placeholder="URL da Imagem de Perfil"
              value={formData.profileImage}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Localização"
              value={formData.location}
              onChange={handleChange}
            />
            <textarea
              name="bio"
              placeholder="Bio"
              value={formData.bio}
              onChange={handleChange}
            />
            <button onClick={handleSave}>Salvar</button>
          </div>
        </>
      ) : (
        <>
          <h1 className={style.users__title}>Perfil do Usuário</h1>
          <div className={style.users__profile}>
            {user?.profileImage ? (
              <img src={user.profileImage} alt={user.name} />
            ) : (
              <div className={style.users__avatar}>{user?.name[0]}</div>
            )}
            <div className={style.users__info}>
              <p>
                <strong>Nome:</strong> {user?.name}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Data de Nascimento:</strong> {user?.birthDate}
              </p>
              {user?.location && (
                <p>
                  <strong>Localização:</strong> {user.location}
                </p>
              )}
              {user?.bio && (
                <p>
                  <strong>Bio:</strong> {user.bio}
                </p>
              )}
            </div>
          </div>
          <div className={style.users__actions}>
            <button onClick={() => setIsLoggedIn(false)}>Editar</button>
            <button onClick={handleLogout}>Sair</button>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
