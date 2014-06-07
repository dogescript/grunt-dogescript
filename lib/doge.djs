trained

such dogeNums
wow Math.round(Math.random())-1

such dogeSort much arr
    arr is plz arr.sort with dogeNums
wow arr

very happyDoge is plz dogeSort with ['amaze', 'such', 'wow', 'many', 'plz', 'bes', 'sweet', 'so', 'oh', 'gud']
very sadDoge is plz dogeSort with ['help', 'bad', 'nope', 'scary', 'plz', 'no', 'evl' , 'juk', 'meh']

such dogeSpace much len pad
    pad is pad || 0
    very ran is (Math.random() * len + Math.random() * len) / 2
    very lim is Math.floor(ran + pad)
    very ret is ''
    many ret.length < lim
        ret += ' '
    wow
wow ret

such petDoge much kind str
    var thought = kind.shift()
    kind.push(thought)
    str is dogeSpace(48) + (thought + (str ? ' ' + str : ''))
wow str

such merge much array memo
    memo is memo || []
    plz array.forEach with much elem
        rly typeof elem !== 'undefined'
            rly Array.isArray(elem)
                plz merge with elem, memo
            but
                plz memo.push with elem
            wow
        wow
    wow&
wow memo

such reportDoge much status success
    rly Array.isArray(status)
        status is plz merge with status
        dogeSort(status)
    but
        status = [status]
    wow

    very words is sadDoge
    rly success
        words = happyDoge
    wow

    very lines is ['']
    lines is plz status.reduce with much lines str
        very line is plz petDoge with words, str
        plz lines.push with line
        wow lines
    , lines)
wow lines.join('\n')

exports.report is reportDoge
exports.happyDoge is happyDoge
exports.sadDoge is sadDoge
