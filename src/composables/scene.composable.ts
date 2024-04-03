import { createSharedComposable } from "@vueuse/core";
import { computed, ref } from "vue";

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

export type TSceneActorItem = Omit<TSceneActionItem, 'description'> & {
  lines: string[];
}

export const useScene = createSharedComposable(function () {
  const name = 'Rua Crisântemo';
  const background = 'src/assets/backgrounds/street-at-night.jpg';

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
  };

  const ACTORS_DICT: Record<string, TSceneActorItem> = {
    'DEFAULT': {
      id: 'conscience',
      name: 'Consciência',
      icon: 'ri-brain-fill',
      lines: ['Ruas se desgarram do núcleo, como galhos de árvore partidos por vendavais repentinos. Essa é uma destas ruas, planando sobre um espaço avulso em um ponto neutro entre existência e inexistência. Congelada no tempo, banhada pela luz alaranjada dos postes de luz, que avança receosa em direção a escuridão.']
    }
  }

  const currentAction = ref<EAction>();
  const currentActionOptions = computed(() => (currentAction.value ? ACTIONS_DICT[currentAction.value] : undefined));

  const currentActor = ref('DEFAULT');
  const currentActorDetails = computed(() => (currentActor.value ? ACTORS_DICT[currentActor.value] : undefined));

  return {
    name,
    background,
    state: {
      currentAction,
      currentActionOptions,
      currentActor,
      currentActorDetails,
    }
  }
})