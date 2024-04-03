import { createSharedComposable } from "@vueuse/core";
import { computed, ref, type ComputedRef, type Ref } from "vue";

export enum EAction {
  MOVE = 'MOVE',
  SEE = 'SEE',
  SPEAK = 'SPEAK',
  USE = 'USE'
}

export type TSceneActionItem = {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const useScene = createSharedComposable(function () {
  const name = 'Rua Crisântemo';
  const description = 'Ruas se desgarram do núcleo, como galhos de árvore partidos por vendavais repentinos. Essa é uma destas ruas, planando sobre um espaço avulso em um vácuo indivisível de escuridão. Congelada no tempo, banhada pela luz alaranjada dos postes de luz, que avança receosa em direção a escuridão.';

  const ACTIONS_DICT: Record<EAction, TSceneActionItem[]> = {
    [EAction.MOVE]: [{
      id: 'placeholder',
      name: 'placeholder',
      icon: 'ri-information-line',
      description: 'placeholder'
    }],
    [EAction.SEE]: [{
      id: 'white-car',
      name: 'Carro branco',
      icon: 'ri-car-fill',
      description: 'Carro branco na garagem, com as rodas brancas e o chassi branco. Reflete a rua, mas não me reflete. Não há rosto, nem membros. Apenas a superfície branca.'
    }, {
      id: 'lamp-post',
      name: 'Luz do poste',
      icon: 'ri-lightbulb-fill',
      description: 'Uma luz, sem calor algum. Apenas incinde sobre o ambiente, sem existir sobre ele.'
    }],
    [EAction.SPEAK]: [{
      id: 'placeholder',
      name: 'placeholder',
      icon: 'ri-information-line',
      description: 'placeholder'
    }],
    [EAction.USE]: [{
      id: 'placeholder',
      name: 'placeholder',
      icon: 'ri-information-line',
      description: 'placeholder'
    }]
  }


  const currentAction = ref<EAction>();
  const currentActionOptions = computed(() => (currentAction.value ? ACTIONS_DICT[currentAction.value] : undefined));

  return {
    name,
    description,
    state: {
      currentAction,
      currentActionOptions
    }
  }
})