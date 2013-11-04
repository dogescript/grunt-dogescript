'use strict';

var happyDoge = ['amaze', 'such', 'wow', 'nice', 'plz', 'bes', 'sweet', 'so', 'oh', 'wonder', 'great', 'good'];
var sadDoge = ['help', 'bad', 'nope', 'scary', 'plz', 'no', 'evil', 'feline', 'yuk', 'meh'];

function dogeNums(){
	return (Math.round(Math.random())-0.5);
}

function dogeSort(arr) {
	return arr.sort(dogeNums);
}

function dogeSpace(len, pad) {
	pad = pad || 0;
	var lim = Math.floor(Math.random() * len) + pad;
	var ret = '';
	while (ret.length < lim) {
		ret += ' ';
	}
	return ret;
}
function petDoge(kind, str) {
	return dogeSpace(48) + (kind[Math.floor(Math.random() * kind.length)] + (str ? ' ' + str : ''));
}

function reportDoge(status, success) {
	if (!Array.isArray(status)) {
		status = [status];
	}
	else {
		status = status.slice(0);
	}
	dogeSort(status);

	var words = happyDoge;
	if (!success) {
		words = sadDoge;
	}
	var lines = [''];
	lines = status.reduce(function (lines, str) {
		var wordChance = 0.2;
		var added = false;
		if (Math.random() < wordChance) {
			lines.push(petDoge(words));
		}
		lines.push(petDoge(words, str));

		if (!added && Math.random() < wordChance) {
			lines.push(petDoge(words));
		}
		return lines;
	}, lines);
	return lines.join('\n');
}

module.exports = {
	report: reportDoge,
	happyDoge: happyDoge,
	sadDoge: sadDoge
};