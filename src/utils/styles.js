import { makeStyles } from "@rneui/themed";

export const sharedStyles = makeStyles((theme) => ({
  primary: {
    color: theme.colors.primary,
  },
  primaryText: {
    color: theme.colors.primary_text,
  },
  primaryBG: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    color: theme.colors.secondary,
  },
  secondaryText: {
    color: theme.colors.secondary_text,
  },
  secondaryBG: {
    backgroundColor: theme.colors.secondary,
  },
  success: {
    color: theme.colors.success,
  },
  successBG: {
    backgroundColor: theme.colors.success,
  },
  error: {
    color: theme.colors.error,
  },
  errorBG: {
    backgroundColor: theme.colors.error,
  },
  background: {
    backgroundColor: theme.colors.background,
  },
  black: {
    color: theme.colors.black,
  },
  white: {
    color: theme.colors.white,
  },
  grey2: {
    color: theme.colors.grey2,
  },
  grey3: {
    color: theme.colors.grey3,
  },
  grey5: {
    color: theme.colors.grey5,
  },
  greyOutline: {
    color: theme.colors.greyOutline,
  },
  icon: {
    color: theme.colors.icon,
  },
  tabIcon: {
    color: theme.colors.tabIcon,
  },
}));
