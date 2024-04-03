import { createSharedComposable } from "@vueuse/core";

export const useScene = createSharedComposable(function () {
  const name = 'Rua Crisântemo';
  const description = `
    Ruas se desgarram do núcleo, como galhos de árvore partidos por vendavais repentinos.
    Essa é uma destas ruas, planando sobre um espaço avulso em um vácuo indivisível de escuridão.
    Congelada no tempo, banhada pela luz alaranjada dos postes de luz, que avança receosos em direção a escuridão.
  `;

  return {
    name,
    description
  }
})