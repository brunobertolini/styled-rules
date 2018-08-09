import test from "ava";
import getColor from "./";

const colors = {
	bg: "#F4F4F4",
	text: {
		base: "#333333",
		contrast: "#F1F1F1"
	}
};

test("should return passed color", t => {
	const color = "#FFF";
	const result = getColor(colors, color);

	t.is(result, color);
});

test("should return bg theme", t => {
	const color = "bg";
	const result = getColor(colors, color);

	t.is(result, colors[color]);
});

test("should return text.base theme color", t => {
	const color = "text";
	const result = getColor(colors, color);

	t.is(result, colors.text.base);
});

test("should return inverted theme color (text.contrast)", t => {
	const color = "!text";
	const result = getColor(colors, color);

	t.is(result, colors.text.contrast);
});
