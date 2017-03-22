import { StyleSheet } from 'react-native';

export default function getCommonStyles(consts) {
  const avatarRadius = 20;

  return StyleSheet.create({
    text: {
      fontSize: consts.fontSize,
      color: consts.color,
    },
    heading: {
      fontSize: consts.fontSizeLarge,
      color: consts.color,
    },
    hint: {
      fontSize: consts.fontSizeSmall,
      color: consts.colorDim,
    },
    avatar: {
      width: avatarRadius * 2,
      height: avatarRadius * 2,
      borderRadius: avatarRadius,
      marginLeft: 10,
      marginRight: 10,
    },
  });
}
