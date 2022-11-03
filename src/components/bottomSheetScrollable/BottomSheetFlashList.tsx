import { memo } from 'react';
import {
  FlashList as RNFlashList,
  FlashListProps as RNFlashListProps,
} from '@shopify/flash-list';
import Animated from 'react-native-reanimated';
import { SCROLLABLE_TYPE } from '../../constants';
import { createBottomSheetScrollableComponent } from './createBottomSheetScrollableComponent';
import type {
  BottomSheetFlashListMethods,
  BottomSheetFlashListProps,
} from './types';

const AnimatedFlatList =
  Animated.createAnimatedComponent<RNFlashListProps<any>>(RNFlashList);

const BottomSheetFlashListComponent = createBottomSheetScrollableComponent<
  BottomSheetFlashListMethods,
  BottomSheetFlashListProps<any>
>(SCROLLABLE_TYPE.FLATLIST, AnimatedFlatList);

const BottomSheetFlashList = memo(BottomSheetFlashListComponent);
BottomSheetFlashList.displayName = 'BottomSheetFlashList';

export default BottomSheetFlashList as <T>(
  props: BottomSheetFlashListProps<T>
) => ReturnType<typeof BottomSheetFlashList>;
