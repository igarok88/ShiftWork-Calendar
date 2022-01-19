Coloris({
	// The default behavior is to append the color picker's dialog to the end of the document's
	// body. but it is possible to append it to a custom parent instead. This is especially useful
	// if the color fields are in a scrollable container and you want color picker' dialog to stay
	// anchored to them. You will need to set the position of the container to relative or absolute.
	// Note: This should be a scrollable container with enough space to display the picker.
	parent: ".right-click-menu",

	// A custom selector to bind the color picker to. This must point to input fields.
	el: ".color-field",

	// The bound input fields are wrapped in a div that adds a thumbnail showing the current color
	// and a button to open the color picker (for accessibility only). If you wish to keep your
	// fields unaltered, set this to false, in which case you will lose the color thumbnail and
	// the accessible button (not recommended).
	// Note: This only works if you specify a custom selector to bind the picker (option above),
	// it doesn't work on the default [data-coloris] attribute selector.
	wrap: true,

	// Available themes: default, large, polaroid.
	// More themes might be added in the future.
	theme: "default",

	// Set the theme to light or dark mode:
	// * light: light mode (default).
	// * dark: dark mode.
	// * auto: automatically enables dark mode when the user prefers a dark color scheme.
	themeMode: "light",

	// The margin in pixels between the input fields and the color picker's dialog.
	margin: 2,

	// Set the preferred color string format:
	// * hex: outputs #RRGGBB or #RRGGBBAA (default).
	// * rgb: outputs rgb(R, G, B) or rgba(R, G, B, A).
	// * hsl: outputs hsl(H, S, L) or hsla(H, S, L, A).
	// * auto: guesses the format from the active input field. Defaults to hex if it fails.
	// * mixed: outputs #RRGGBB when alpha is 1; otherwise rgba(R, G, B, A).
	format: "hex",

	// Set to true to enable format toggle buttons in the color picker dialog.
	// This will also force the format (above) to auto.
	formatToggle: false,

	// Enable or disable alpha support.
	// When disabled, it will strip the alpha value from the existing color value in all formats.
	alpha: true,

	// Set to true to hide all the color picker widgets (spectrum, hue, ...) except the swatches.
	swatchesOnly: false,

	// Focus the color value input when the color picker dialog is opened.
	focusInput: true,

	// Show an optional clear button and set its label
	clearButton: {
		show: true,
		label: "Сброс",
	},

	// An array of the desired color swatches to display. If omitted or the array is empty,
	// the color swatches will be disabled.
	swatches: [
		"#264653",
		"#2a9d8f",
		"#e9c46a",
		"rgb(244,162,97)",
		"#e76f51",
		"#d62828",
		"navy",
		"#07b",
		"#0096c7",
		"#00b4d880",
		"rgba(0,119,182,0.8)",
	],
});
