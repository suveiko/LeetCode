var flipAndInvertImage = function (image) {
	for (let i = 0; i < image.length; i++) {
		image[i] = image[i].reverse()
		for (let j = 0; j < image[i].length; j++) {
			if (image[i][j] === 0) {
				image[i][j] = 1
			} else {
				image[i][j] = 0
			}
		}
	}

	return image
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
//   Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]