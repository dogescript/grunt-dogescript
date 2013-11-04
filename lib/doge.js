var happy = ['amaze', 'such', 'wow', 'nice'];
var sad = ['help', 'bad', 'such', 'scary', 'nooo'];

function dogeNums(){
	return (Math.round(Math.random())-0.5);
}

function dogeSort(arr) {
	return arr.sort(dogeNums);
}

function dogeSpace(lim) {
	var lim = Math.floor(Math.random() * lim);
	var ret = '';
	while (ret.length < lim) {
		ret += ' ';
	}
	return ret;
}
function petDoge(kind, str) {
	return dogeSpace(8) + (kind[Math.floor(Math.random() * kind.length)](str ? +' ' + str : '')).rainbow;
}

function reportDoge(status, succes) {
	if (!Array.isArray(status)) {
		status = [status];
	}
	else {
		status = status.slice(0);
	}
	dogeSort(status);

	var words = good;
	if (!succes) {
		words = bad;
		status.unshift('no');
	}
	else {
		status.unshift('wow');
	}
	return status.reduce(function (lines, str) {
		if (Math.random() < .2) {
			lines.push(petDoge(words));
		}
		if (Math.random() < .2) {
			lines.push('');
		}
		lines.push(petDoge(words, str));
		if (Math.random() < .2) {
			lines.push('');
		}
		if (Math.random() < .2) {
			lines.push(petDoge(words));
		}
		if (Math.random() < .2) {
			lines.push('');
		}
	}, []).join('\n');
}

module.exports = {
	reportDoge: reportDoge,
	petDoge: petDoge,
	dogeSpace: dogeSpace,
	happy: happy,
	sad: sad
};