let x = [2, 2, 1, 1, -2, -2, -1, -1]; //possible moves-+
let y = [1, -1, 2, -2, 1, -1, 2, -2]; //possible moves

function predictMoves(pos, m, n) {
	//where m and n represent the length in x and y axis resp.
	if (!pos.hasOwnProperty("x") || !pos.hasOwnProperty("y"))
		return "Invalid input, input must be in {x:0,y:0} form.";
	let X = pos.x;
	let Y = pos.y;
	let result = [];
	for (let i = 0; i < 8; i++) {
		let a = X + x[i];
		let b = Y + y[i];
		if (a >= 0 && b >= 0 && a < m && b < n) {
			result.push({ x: a, y: b });
		}
	}
	return result;
}

console.log(predictMoves({ x: 7, y: 7 }, 8, 8));
