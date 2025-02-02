import type { FormEvent } from "react";
import "./Register.css";

function Register() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const createUser = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
      method: "POST",
      body: formData,
    });

    if (createUser.ok) {
      form.reset();
    }
  }

  return (
    <main id="register-page">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Votre email</label>
        <input type="email" name="email" placeholder="Ex: jean@hotmail.com" />

        <label htmlFor="password">Votre mot de passe</label>
        <input type="password" name="password" autoComplete="no" />

        <label htmlFor="email">Votre image de profil</label>
        <input type="file" name="file" />

        <button type="submit">Valider</button>
      </form>
    </main>
  );
}

export default Register;
