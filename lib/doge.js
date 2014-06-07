'use strict';

function dogeNums(){
	return (Math.round(Math.random())-1);
}
function dogeSort(arr) {
	return arr.sort(dogeNums);
}

var happyDoge = dogeSort(['amaze', 'such', 'wow', 'many', 'plz', 'bes', 'sweet', 'so', 'oh', 'gud']);
var sadDoge = dogeSort(['help', 'bad', 'nope', 'scary', 'plz', 'no', 'evl' , 'juk', 'meh']);

function dogeSpace(len, pad) {
	pad = pad || 0;
	var ran = (Math.random() * len + Math.random() * len) / 2;
	var lim = Math.floor(ran + pad);
	var ret = '';
	while (ret.length < lim) {
		ret += ' ';
	}
	return ret;
}
function petDoge(kind, str) {
	var thought = kind.shift();
	kind.push(thought);
	return dogeSpace(48) + (thought + (str ? ' ' + str : ''));
}

function merge(array, memo) {
	memo = memo || [];
	array.forEach(function(elem) {
		if (typeof elem !== 'undefined') {
			if (Array.isArray(elem)) {
				merge(elem, memo);
			}
			else {
				memo.push(elem);
			}
		}
	});
	return memo;
}

function reportDoge(status, success) {
	if (!Array.isArray(status)) {
		status = [status];
	}
	else {
		status = merge(status);
		dogeSort(status);
	}

	var words = happyDoge;
	if (!success) {
		words = sadDoge;
	}
	var lines = [''];
	lines = status.reduce(function (lines, str) {
		lines.push(petDoge(words, str));
		return lines;
	}, lines);
	return lines.join('\n');
}

module.exports = {
	report: reportDoge,
	happyDoge: happyDoge,
	sadDoge: sadDoge
};
