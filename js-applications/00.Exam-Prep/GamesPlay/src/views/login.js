import { html } from "../lib.js";
import { login } from "../api/data.js";


const loginTemplate = (onSubmit) => html `
        <section id="login-page" class="auth">
            <form @submit=${onSubmit} id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>


`

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const email = formData.get("email").trim();
      const password = formData.get("password").trim();

      console.log(password);
  
      if (!email || !password) {
        alert("Please fill in both fields!");
        return;
      }
  
      try {
        await login(email, password);
        ctx.setUserNav();
        ctx.page.redirect("/");
        
      } catch (error) {
        alert(error.message);
      }
    }
  

}