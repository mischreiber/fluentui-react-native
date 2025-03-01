/** @jsx withSlots */
import { useEffect, useCallback } from 'react';
import type { ColorValue } from 'react-native';
import { Animated, Easing, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import type { UseSlots } from '@fluentui-react-native/framework';
import { compose, mergeProps, withSlots } from '@fluentui-react-native/framework';
import type { SpinnerProps, SpinnerType } from './Spinner.types';
import { spinnerName } from './Spinner.types';
import { diameterSizeMap, lineThicknessSizeMap, stylingSettings } from './Spinner.styling';

const getSpinnerPath = (diameter: number, width: number, color: ColorValue) => {
  const start = {
    x: width / 2,
    y: diameter / 2,
  };
  const innerRadius = diameter / 2 - width / 2;
  const path = `M${start.x} ${start.y} a${innerRadius} ${innerRadius} 0 1 1 ${innerRadius} ${innerRadius}`;

  return <Path d={path} stroke={color} strokeWidth={width} strokeLinecap="round" />;
};

export const AnimatedSvg = Animated.createAnimatedComponent(Svg);
export const Spinner = compose<SpinnerType>({
  displayName: spinnerName,
  ...stylingSettings,
  slots: {
    root: View,
    svg: AnimatedSvg,
  },
  useRender: (props: SpinnerProps, useSlots: UseSlots<SpinnerType>) => {
    const Slots = useSlots(props);
    const animating = props.animating != undefined ? props.animating : true;
    const hidesWhenStopped = props.hidesWhenStopped != undefined ? props.hidesWhenStopped : true;
    const hideOpacity = animating == false && hidesWhenStopped == true ? 0 : 1;
    const rotationAngle = new Animated.Value(0);

    const startRotation = useCallback(() => {
      Animated.loop(
        Animated.timing(rotationAngle, {
          toValue: 360,
          duration: 750,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    }, [rotationAngle, animating]);

    const stopRotation = () => {
      rotationAngle.stopAnimation();
    };

    useEffect(() => {
      Animated.loop(
        Animated.timing(rotationAngle, {
          toValue: 360,
          duration: 750,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();

      if (animating) {
        startRotation();
      } else {
        stopRotation();
      }
    }, [animating, hidesWhenStopped, rotationAngle]);

    const interpolateSpin = rotationAngle.interpolate({
      inputRange: [0, 359],
      outputRange: ['0deg', '359deg'],
    });

    const path = getSpinnerPath(
      diameterSizeMap[Slots.root({}).props.size],
      lineThicknessSizeMap[Slots.root({}).props.size],
      Slots.root({}).props.trackColor,
    );

    // perspective is needed for animations to work on Android. See https://reactnative.dev/docs/animations#bear-in-mind
    const animatedSvgProps = {
      style: {
        transform: [{ rotateZ: interpolateSpin }, { perspective: 10 }],
      },
    };

    const otherRootProps = {
      style: {
        opacity: hideOpacity,
      },
      accessibilityState: { busy: animating },
    };
    return (rest: SpinnerProps) => {
      const { ...mergedProps } = mergeProps(props, rest, otherRootProps);
      return (
        <Slots.root {...mergedProps}>
          <Slots.svg {...animatedSvgProps}>{path}</Slots.svg>
        </Slots.root>
      );
    };
  },
});
