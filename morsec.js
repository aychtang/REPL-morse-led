
var morse = function(letter) {
	if (letter === ' ') return '       ';
	var codes = {
		'a' : [".", "-"],
		'b' : ["-", ".", ".", "."],
		'c' : ["-", ".", "-", "."],
		'd' : ["-", ".", "."],
		'e' : ["."],
		'f' : [".", ".", "-", "."],
		'g' : ["-", "-", "."],
		'h' : ['.','.','.','.'],
		'i' : ['.','.'],
		'j' : ['.','-','-','-'],
		'k' : ['-','.','-'],
		'l' : ['.','-','.','.'],
		'n' : ['-','.'],
		'm' : ['-','-'],
		'o' : ['-','-','-'],
		'p' : ['.','-','-','.'],
		'q' : ['-','-','.','-'],
		'r' : ['.', '-','.'],
		's' : ['.','.','.'],
		't' : ['-'],
		'u' : ['.','.','-'],
		'v' : ['.','.','.','-'],
		'w' : ['.','-','-'],
		'x' : ['-','.','.','-'],
		'y' : ['-','.','-','-'],
		'z' : ['-','-','.','.']
	};

	return codes[letter].join(' ');
};

var mapStr = function(str, fn) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		result += fn(str[i]);
	}
	return result;
};

var sentanceBuilder = function(fn) {
	return function(i) {
		return fn(i) + '   ';
	};
};

var trimRight = function(str) {
	return str.trim();
};

var morsify = function(str) {
	return trimRight(mapStr(str, sentanceBuilder(morse)));
};

module.exports = morsify;