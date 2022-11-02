import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const getSaludo = async (ctx: Context): Promise<void> => {

    ctx.response.status = 200;
    ctx.response.body =  `
    <!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1 style="color: blue;">Hola como estas??</h1>
      </body>
    </html>
    `;
  }


export default {getSaludo}
