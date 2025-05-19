import React from "react";
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS, SHADOWS } from "./styles";

const DeveloperFunnel = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
          paddingBottom: SPACING.sm,
        }}
      >
        {/* First Stage: First Touch */}
        <div
          style={{
            width: "280px",
            backgroundColor: COLORS.primaryLight,
            borderRadius: BORDER_RADIUS.md,
            padding: SPACING.md,
            borderLeft: `4px solid ${COLORS.primary}`,
            boxShadow: SHADOWS.sm,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: SPACING.sm,
            }}
          >
            <div
              style={{
                padding: SPACING.sm,
                backgroundColor: COLORS.white,
                borderRadius: "50%",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={COLORS.primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
            </div>
            <span
              style={{
                fontSize: TYPOGRAPHY.heading3,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              1,358
            </span>
          </div>
          <h3
            style={{
              fontSize: TYPOGRAPHY.heading4,
              fontWeight: "bold",
              color: COLORS.text,
            }}
          >
            First Touch Developers
          </h3>
          <p
            style={{
              fontSize: TYPOGRAPHY.small,
              color: COLORS.textLight,
              marginTop: SPACING.xs,
            }}
          >
            Developers who engaged with 50+ Aleo GitHub repos
          </p>
        </div>

        {/* Arrow */}
        <div
          style={{
            fontSize: TYPOGRAPHY.heading3,
            color: COLORS.textLight,
            margin: `0 ${SPACING.sm}`,
          }}
        >
          →
        </div>

        {/* Analysis Stage */}
        <div
          style={{
            width: "320px",
            backgroundColor: COLORS.grayLighter,
            borderRadius: BORDER_RADIUS.md,
            padding: SPACING.md,
            borderLeft: `4px solid ${COLORS.primary}`,
            boxShadow: SHADOWS.sm,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: SPACING.sm,
            }}
          >
            <div
              style={{
                padding: SPACING.sm,
                backgroundColor: COLORS.white,
                borderRadius: "50%",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={COLORS.primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: TYPOGRAPHY.small,
                    fontWeight: "medium",
                    color: COLORS.primary,
                    marginRight: SPACING.xs,
                  }}
                >
                  GitHub Score
                </span>
                <div
                  style={{
                    width: "80px",
                    height: "6px",
                    backgroundColor: COLORS.grayLight,
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      backgroundColor: COLORS.primary,
                      borderRadius: "999px",
                      width: "75%",
                    }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: SPACING.xs,
                }}
              >
                <span
                  style={{
                    fontSize: TYPOGRAPHY.small,
                    fontWeight: "medium",
                    color: COLORS.primary,
                    marginRight: SPACING.xs,
                  }}
                >
                  Aleo Immersion
                </span>
                <div
                  style={{
                    width: "80px",
                    height: "6px",
                    backgroundColor: COLORS.grayLight,
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      backgroundColor: COLORS.primary,
                      borderRadius: "999px",
                      width: "65%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <h3
            style={{
              fontSize: TYPOGRAPHY.heading4,
              fontWeight: "bold",
              color: COLORS.text,
            }}
          >
            Holistic Analysis
          </h3>
          <p
            style={{
              fontSize: TYPOGRAPHY.small,
              color: COLORS.textLight,
              marginTop: SPACING.xs,
            }}
          >
            Analyzed based on contribution quality, engagement & ecosystem
            impact
          </p>
        </div>

        {/* Arrow */}
        <div
          style={{
            fontSize: TYPOGRAPHY.heading3,
            color: COLORS.textLight,
            margin: `0 ${SPACING.sm}`,
          }}
        >
          →
        </div>

        {/* Final Stage: High/Medium Quality */}
        <div
          style={{
            width: "280px",
            backgroundColor: COLORS.grayLighter,
            borderRadius: BORDER_RADIUS.md,
            padding: SPACING.md,
            borderLeft: `4px solid ${COLORS.primary}`,
            boxShadow: SHADOWS.sm,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: SPACING.sm,
            }}
          >
            <div
              style={{
                padding: SPACING.sm,
                backgroundColor: COLORS.white,
                borderRadius: "50%",
                marginRight: SPACING.sm,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={COLORS.primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3
              style={{
                fontSize: TYPOGRAPHY.heading4,
                fontWeight: "bold",
                color: COLORS.text,
              }}
            >
              High/Medium Quality Devs
            </h3>
          </div>
          <p
            style={{
              fontSize: TYPOGRAPHY.small,
              color: COLORS.textLight,
              marginTop: SPACING.xs,
            }}
          >
            Developers with quality score ≥ 50, driving ecosystem growth
          </p>
        </div>
      </div>

      {/* Legend/Explanation */}
      <div
        style={{
          marginTop: SPACING.sm,
          fontSize: TYPOGRAPHY.small,
          color: COLORS.textLight,
          backgroundColor: COLORS.grayLighter,
          padding: SPACING.sm,
          borderRadius: BORDER_RADIUS.md,
        }}
      >
        <p>
          <strong>Quality Score Components:</strong> GitHub engagement (40%),
          Aleo immersion (30%), Technical complexity (20%), Ecosystem impact
          (10%)
        </p>
      </div>
    </div>
  );
};

export default DeveloperFunnel;
