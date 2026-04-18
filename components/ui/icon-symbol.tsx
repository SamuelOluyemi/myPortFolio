// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from "@expo/vector-icons/Octicons";
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

// type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;

/** Including Octicons */
type IconMapping = Partial<Record<SymbolViewProps['name'],
// type IconMapping = Record<string,
  | { lib: 'material'; name: ComponentProps<typeof MaterialIcons>['name'] }
  | { lib: 'octicons'; name: ComponentProps<typeof Octicons>['name'] }
>>;

type IconSymbolName = keyof typeof MAPPING;


/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
// const MAPPING = {
//   'house.fill': 'home',
//   'paperplane.fill': 'send',
//   'briefcase': 'work',
//   'chevron.left.forwardslash.chevron.right': 'code',
//   'chevron.right': 'chevron-right',
// } as IconMapping;
const MAPPING: IconMapping = {
  "house.fill": { lib: "material", name: "home" },
  "briefcase": { lib: "material", name: "work" },
  "square.stack.3d.down.right.fill": { lib: "octicons", name: "stack" },
  "chevron.left": { lib: "octicons", name: "chevron-left" },
  "chevron.right": { lib: "octicons", name: "chevron-right" },
};

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
// export function IconSymbol({
//   name,
//   size = 24,
//   color,
//   style,
// }: {
//   name: IconSymbolName;
//   size?: number;
//   color: string | OpaqueColorValue;
//   style?: StyleProp<TextStyle>;
//   weight?: SymbolWeight;
// }) {
//   return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
// }

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const mapped = MAPPING[name];

  if (!mapped) {
    return (
      <MaterialIcons
        name="help-outline"
        size={size}
        color={color}
        style={style}
      />
    );
  }

  if (mapped.lib === "octicons") {
    return (
      <Octicons name={mapped.name} size={size} color={color} style={style} />
    );
  }

  return (
    <MaterialIcons name={mapped.name} size={size} color={color} style={style} />
  );
}
