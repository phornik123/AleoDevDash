// Shared styles for the dashboard

// Font settings
export const FONTS = {
  primary: "IBM Plex Mono",
  fontImports: `
      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
    `,
};

// Color palette
export const COLORS = {
  primary: "#0366d6",
  primaryLight: "#e6f0ff",
  secondary: "#868e96",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  warningDark: "#fd7e14",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
  white: "#ffffff",
  black: "#000000",
  gray: "#495057",
  grayLight: "#adb5bd",
  grayLighter: "#e9ecef",
  grayDark: "#343a40",
  border: "#ddd",
  background: "#f8f9fa",
  text: "#333",
  textLight: "#666",
  textMuted: "#868e96",
  chartColors: [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#8dd1e1",
    "#a4de6c",
    "#d0ed57",
    "#83a6ed",
    "#8dd1e1",
  ],
};

// Spacing values
export const SPACING = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
};

// Typography sizes
export const TYPOGRAPHY = {
  heading1: "24px",
  heading2: "20px",
  heading3: "16px",
  heading4: "14px",
  body: "14px",
  small: "12px",
  tiny: "10px",
};

// Border radius
export const BORDER_RADIUS = {
  sm: "2px",
  md: "4px",
  lg: "8px",
  xl: "16px",
  pill: "50px",
  circle: "50%",
};

// Shadows
export const SHADOWS = {
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 2px 4px rgba(0,0,0,0.1)",
  lg: "0 4px 8px rgba(0,0,0,0.1)",
  xl: "0 8px 16px rgba(0,0,0,0.1)",
};

// Layout
export const LAYOUT = {
  maxWidth: "1200px",
  containerPadding: "20px",
  sectionMarginBottom: "20px",
  cardPadding: "16px",
};

// Common component styles
export const COMPONENT_STYLES = {
  // Card
  card: {
    backgroundColor: COLORS.white,
    padding: LAYOUT.cardPadding,
    borderRadius: BORDER_RADIUS.md,
    border: `1px solid ${COLORS.border}`,
    boxShadow: SHADOWS.sm,
    marginBottom: LAYOUT.sectionMarginBottom,
  },

  // Section title
  sectionTitle: {
    fontSize: TYPOGRAPHY.heading2,
    fontWeight: "bold",
    marginBottom: SPACING.lg,
  },

  // Card title
  cardTitle: {
    fontSize: TYPOGRAPHY.heading3,
    fontWeight: "bold",
    marginBottom: SPACING.md,
  },

  // Button
  button: {
    padding: `${SPACING.sm} ${SPACING.md}`,
    borderRadius: BORDER_RADIUS.md,
    border: "none",
    cursor: "pointer",
    fontFamily: FONTS.primary,
    fontWeight: "normal",
  },

  // Primary button
  primaryButton: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
  },

  // Secondary button
  secondaryButton: {
    backgroundColor: COLORS.grayLighter,
    color: COLORS.textLight,
  },

  // Table styles
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
    fontSize: TYPOGRAPHY.body,
  },

  // Table header cell
  tableHeaderCell: {
    padding: `${SPACING.sm} ${SPACING.md}`,
    backgroundColor: COLORS.grayLighter,
    borderBottom: `1px solid ${COLORS.border}`,
    textAlign: "left",
    color: COLORS.text,
  },

  // Table cell
  tableCell: {
    padding: `${SPACING.sm} ${SPACING.md}`,
    borderBottom: `1px solid ${COLORS.border}`,
  },

  // Badge
  badge: {
    padding: `${SPACING.xs} ${SPACING.sm}`,
    borderRadius: BORDER_RADIUS.md,
    fontSize: TYPOGRAPHY.small,
  },

  // Tabs
  tabButton: {
    padding: `${SPACING.sm} ${SPACING.md}`,
    marginRight: SPACING.sm,
    border: "none",
    borderRadius: BORDER_RADIUS.md,
    cursor: "pointer",
    fontFamily: FONTS.primary,
  },

  // Methodology box
  methodologyBox: {
    backgroundColor: COLORS.primaryLight,
    border: `1px solid ${COLORS.primary}`,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    fontSize: TYPOGRAPHY.small,
  },

  // Chart container
  chartContainer: {
    height: "300px",
    marginTop: SPACING.lg,
  },
};

export default {
  FONTS,
  COLORS,
  SPACING,
  TYPOGRAPHY,
  BORDER_RADIUS,
  SHADOWS,
  LAYOUT,
  COMPONENT_STYLES,
};
