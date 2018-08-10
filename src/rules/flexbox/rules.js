const options = {
	flexbox: ({ column, reverse }) => `
    display: flex;
    flex-direction: ${column ? 'column' : 'row'}${reverse ? '-reverse' : ''};
  `,

	flex: {
		_: ({ flex }) => `flex: ${flex};`,
		true: `flex: 1 1 auto;`,
	},

	wrap: {
		_: ({ wrap }) => `flex-wrap: ${wrap};`,
		true: `flex-wrap: wrap;`,
	},

	justify: ({ justify }) => `
    justify-content: ${justify};
  `,

	align: ({ align }) => `
    align-items: ${align};
  `,

	self: ({ self }) => `
    align-self: ${self};
  `,

	shrink: ({ shrink }) => `
    flex-shrink: ${shrink};
  `,

	noShrink: `
    flex-shrink: 0;
  `,

	center: `
    align-items: center;
    justify-content: center;
  `,

	blocked: `
    align-self: stretch;
  `,
}

export default options
