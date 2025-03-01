/*
Disclaimer: these styles do not follow a specific figma design, but are
meant to be placeholders until new designs are developed
*/

import type { IComposeSettings } from '@uifabricshared/foundation-compose';
import type { TabsType } from './Tabs.types';
import { tabsName } from './Tabs.types';

export const settings: IComposeSettings<TabsType> = [
  {
    tokens: {
      color: 'menuItemText',
      variant: 'bodySemibold',
      fontWeight: 'bold',
      fontSize: 14,
    },
    root: {
      accessible: true,
      style: {
        marginLeft: 4,
      },
    },
    stack: {
      style: {
        marginTop: 6,
        flexDirection: 'row',
      },
    },
  },
  tabsName,
];
