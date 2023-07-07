/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		fontFamily: {
			"compressed": ["Coolvetica_Compressed", "sans-serif"],
			"condensedrg": ["Coolvetica_Condensed_rg", "sans-serif"],
			"crammedrg": ["Coolvetica_Crammed_rg", "sans-serif"],
			"rgit": ["Coolvetica_rg_it", "sans-serif"],
			"rg": ["Coolvetica_rg", "sans-serif"],
			"alte-bold": ["AlteHaasGroteskBold", "sans-serif"],
			"alte-rg": ["AlteHaasGroteskRegular", "sans-serif"]
		},
		extend: {
			colors: {
				"custom-white": "#E9E9E9",
				"custom-red": "#F05D5E",
				"custom-red-hover": "#D64D4E",
				"custom-dark-blue": "#040916",
				"custom-extra-dark-blue": "#02060F",
				"custom-light-blue": "#111E42",
				"custom-background": "#0E2258"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--gradient-color-stops))"
			},
			animation: {
				popUpMenuIn: "popUpMenuIn 0.3s ease-out",
				popUpMenuOut: "popUpMenuOut 0.3s ease-in",
				menuItemHover: "menuItemHover 0.3s ease-out",
				fadeIn: "fadeIn 0.3s ease-out",
				fadeOut: "fadeOut 0.3s ease-in",
				widthExpandXL: "widthExpandXL 0.5s ease-in-out",
				widthShrinkXL: "widthShrinkXL 0.5s ease-in-out",
				widthButtonExpandXL: "widthButtonExpandXL 0.5s ease-in-out",
				widthButtonShrinkXL: "widthButtonShrinkXL 0.5s ease-in-out",
				widthExpandLG: "widthExpandLG 0.5s ease-in-out",
				widthShrinkLG: "widthShrinkLG 0.5s ease-in-out",
				widthButtonExpandLG: "widthButtonExpandLG 0.5s ease-in-out",
				widthButtonShrinkLG: "widthButtonShrinkLG 0.5s ease-in-out",
				widthExpandMD: "widthExpandMD 0.5s ease-in-out",
				widthShrinkMD: "widthShrinkMD 0.5s ease-in-out",
				widthExpandSM: "widthExpandSM 0.5s ease-in-out",
				widthShrinkSM: "widthShrinkSM 0.5s ease-in-out",
				fadeInSlide: "fadeInSlide 0.7s ease-in-out",
				fadeOutSlide: "fadeOutSlide 0.7s ease-in-out",
				backgroundUpTransition: "backgroundUpTransition 1.5s ease-in-out",
				backgroundDownTransition: "backgroundDownTransition 1.5s ease-in-out",
				introWidthExpand: "introWidthExpand 0.5s ease-in",
				introFadeIn: "fadeIn 1s ease-in-out",
				introFadeOut: "fadeOut 1s ease-in-out",

			},
			keyframes: {
				popUpMenuIn: {
					"0%": {
						transform: "translate(320px, 0px)"
					},
					"100%": {
						transform: "translate(0px, 0px)"
					}
				},
				popUpMenuOut: {
					"0%": {
						transform: "translate(0px, 0px)"
					},
					"100%": {
						transform: "translate(320px, 0px)"
					}
				},
				menuItemHover: {
					"0%": {
						width: "0rem"
					},
					"100%": {
						width: "14rem"
					}
				},
				fadeIn: {
					"0%": {
						opacity: "0%"
					},
					"100%": {
						opacity: "100%"
					}
				},
				fadeOut: {
					"0%": {
						opacity: "100%"
					},
					"100%": {
						opacity: "0%"
					}
				},
				widthExpandXL: {
					"0%": {
						width: "55rem"
					},
					"100%": {
						width: "75rem"
					}
				},
				widthShrinkXL: {
					"0%": {
						width: "75rem"
					},
					"100%": {
						width: "55rem"
					}
				},
				widthButtonExpandXL: {
					"0%": {
						width: "60rem"
					},
					"100%": {
						width: "80rem"
					}
				},
				widthButtonShrinkXL: {
					"0%": {
						width: "80rem"
					},
					"100%": {
						width: "60rem"
					}
				},
				widthExpandLG: {
					"0%": {
						width: "55rem"
					},
					"100%": {
						width: "40rem"
					}
				},
				widthShrinkLG: {
					"0%": {
						width: "40rem"
					},
					"100%": {
						width: "55rem"
					}
				},
				widthButtonExpandLG: {
					"0%": {
						width: "60rem"
					},
					"100%": {
						width: "45rem"
					}
				},
				widthButtonShrinkLG: {
					"0%": {
						width: "45rem"
					},
					"100%": {
						width: "60rem"
					}
				},
				widthExpandMD: {
					"0%": {
						width: "40rem"
					},
					"100%": {
						width: "40rem"
					}
				},
				widthShrinkMD: {
					"0%": {
						width: "40rem"
					},
					"100%": {
						width: "40rem"
					}
				},
				widthExpandSM: {
					"0%": {
						width: "40rem"
					},
					"100%": {
						width: "100vw"
					}
				},
				widthShrinkSM: {
					"0%": {
						width: "100vw"
					},
					"100%": {
						width: "40rem"
					}
				},
				fadeInSlide: {
					"0%": {
						transform: "translate(50px, 0px)",
						opacity: "0%"
					},
					"100%": {
						transform: "translate(0px, 0px)",
						opacity: "100%"
					},
				},
				fadeOutSlide: {
					"0%": {
						transform: "translate(0px, 0px)",
						opacity: "100%"
					},
					"100%": {
						transform: "translate(-50px, 0px)",
						opacity: "0%"
					},
				},
				backgroundUpTransition: {
					"0%": {
						transform: "translate(0px, 0px)"
					},
					"100%": {
						transform: "translate(0px, 570px)"
					}
				},
				backgroundDownTransition: {
					"0%": {
						transform: "translate(0px, 0px)"
					},
					"100%": {
						transform: "translate(0px, -570px)"
					}
				},
				introWidthExpand: {
					"0%": {
						width: "0rem"
					},
					"100%": {
						width: "8rem"
					}
				}
			}
		}
	},
	plugins: [],
};

