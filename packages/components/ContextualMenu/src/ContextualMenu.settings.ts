import type { ContextualMenuType } from './ContextualMenu.types';
import { contextualMenuName } from './ContextualMenu.types';
import type { IComposeSettings } from '@uifabricshared/foundation-compose';

export const settings: IComposeSettings<ContextualMenuType> = [
  {
    tokens: {
      backgroundColor: 'menuBackground',
      beakWidth: 20,
      borderColor: 'buttonBorder',
      borderWidth: 1,
      directionalHint: 'bottonLeftEdge',
      gapSpace: 0,
      minPadding: 0,
    },
    container: {
      style: {
        padding: 1,
        minWidth: 180,
        flex: 1,
      },
    },
  },
  contextualMenuName,
];
