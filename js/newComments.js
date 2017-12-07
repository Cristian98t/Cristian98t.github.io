var _0xa491 = ["ready", "Giselda Capon", "Fausto Greco", "Lia Piazza", "Anacleto", "Batista", "Priscilla", "Adelia Conti", "Marilena", "Ivo Zetticci", "Chris Jericho", "Abelardo", "Jonathan", "Mafalda", "Sam", "Igor", "Andrew", "Eliano Fallaci", "Ermes", "Calvin", "Concordio", "", "10000", "20000", "30000", "40000", "50000", "60000", "70000", "80000", "90000", "100000", "1000000", "gems", "! ", ". ", ".. ", " ", "Wow", "WOW", "wow", "This trick is amazing ", "this generator is incredible", "This software is awesome ", "this is legit web ", "this web give some real stuff ", "thanks for sharing ", "awesome man! you should sell this method", "I can not believe believe that this really works", "awesome tool indeed ", "now i dont need to buy gems! thanks a lot ", " ", " ", " ", "", " ", "", "", "", "", "", "", "amazing tool bro. thanks you so much for sharing this ", "thank you admin! works for me!", "the most powerful tool ever! thank you ", "i wonder why this wasn’t on the news. this is stunning tool! ", "thanks a lot dude!!!! WORKS like a charm!!! ", "AWESOME!!", " Thanks for this dude… at first i thought this is some shit again.. thanks a lot! ", "that was amazing!!! thanks a lot for this. ", "works like a charm.. thanks admin.. ", "thanks! I was looking for this in a long time! ", "", "", "", "", "", "", "", "", "", "", "", "", " ", " ", " ", " ", "  ", " ", "", "", "", "", "works! FREAKING AAMZING!! ", "thank you admin! ", "Perfect! this is what i am looking for! ", "amazing job admin… thank you for sharing  ", " ", " ", " ", "thank you", "thanks", "thanks a lot", "thank you so much", "many thanks", "thank you", "thanks", "thanks a lot", ":D ", ":3 ", ":) ", "c: ", "=D ", "=3 ", "=) ", "c= ", "commented", "state-disabled", "addClass", "#commentUsernameLabel", "disabled", "attr", "#commentUsername", "#commentCommentLabel", "#commentComment", "comment1Cookie", "username1Cookie", "username2Cookie", "username3Cookie", "timePosted11Cookie", "timePosted22Cookie", "timePosted33Cookie", "comment2Cookie", "comment3Cookie", "click", "#commentSubmit", "random", "floor", "join", "length", "html", "#username", "</br> </br>", "#comment", "#timePosted", "Posted few seconds ago", "Posted a minute ago", "Posted ", " minutes ago", "round", "val", "state-error", "getTime", "setTime", "; expires=", "toGMTString", "cookie", "=", "; path=/", ";", "split", "substring", "charAt", "indexOf"];
$(document)[_0xa491[0]](main);
usernames = [_0xa491[1], _0xa491[2], _0xa491[3], _0xa491[4], _0xa491[5], _0xa491[6], _0xa491[7], _0xa491[8], _0xa491[9], _0xa491[10], _0xa491[11], _0xa491[12], _0xa491[13], _0xa491[14], _0xa491[15], _0xa491[16], _0xa491[17], _0xa491[18], _0xa491[19]];
minPostTime = 10;
maxPostTime = 300;
refreshRate = randomRange(minPostTime * 1000, maxPostTime * 1000);
websiteName = _0xa491[20];
website = _0xa491[21];
amount = [_0xa491[22], _0xa491[23], _0xa491[24], _0xa491[25], _0xa491[26], _0xa491[27], _0xa491[28], _0xa491[29], _0xa491[30], _0xa491[31], _0xa491[32]];
resources = [_0xa491[33]];
punctuation = [_0xa491[34], _0xa491[35], _0xa491[36], _0xa491[37]];
wowKeywords = [_0xa491[38], _0xa491[39], _0xa491[40]];
thisKeywords = [_0xa491[41], _0xa491[42], _0xa491[43], _0xa491[44], _0xa491[45], _0xa491[46]];
thisKeywords2 = [_0xa491[47], _0xa491[48], _0xa491[49], _0xa491[50]];
adverbKeywords = [_0xa491[51], _0xa491[52], _0xa491[53], _0xa491[54], _0xa491[55]];
adjectivesKeywords = [_0xa491[56], _0xa491[57], _0xa491[58], _0xa491[59], _0xa491[60], _0xa491[61]];
iKeywords = [_0xa491[62], _0xa491[63], _0xa491[64], _0xa491[65], _0xa491[66], _0xa491[67], _0xa491[68], _0xa491[69], _0xa491[70], _0xa491[71]];
workingKeywords = [_0xa491[72], _0xa491[73], _0xa491[74], _0xa491[75], _0xa491[76], _0xa491[77], _0xa491[78], _0xa491[79], _0xa491[80], _0xa491[81], _0xa491[82], _0xa491[83]];
conjunctionKeywords = [_0xa491[84], _0xa491[85], _0xa491[86], _0xa491[87], _0xa491[88], _0xa491[89]];
conKeywords = [_0xa491[90], _0xa491[91], _0xa491[92], _0xa491[93]];
meKeywords = [_0xa491[94], _0xa491[95], _0xa491[96], _0xa491[97]];
gotKeywords = [_0xa491[98], _0xa491[99], _0xa491[100]];
thanksKeywords = [_0xa491[101], _0xa491[102], _0xa491[103], _0xa491[104], _0xa491[105], _0xa491[106], _0xa491[107], _0xa491[108]];
emotes1 = [_0xa491[109], _0xa491[110], _0xa491[111], _0xa491[112]];
emotes2 = [_0xa491[113], _0xa491[114], _0xa491[115], _0xa491[116]];

function main() {
    if (readCookie(_0xa491[117]) != null) {
        $(_0xa491[120])[_0xa491[119]](_0xa491[118]);
        $(_0xa491[123])[_0xa491[122]](_0xa491[121], _0xa491[21]);
        $(_0xa491[124])[_0xa491[119]](_0xa491[118]);
        $(_0xa491[125])[_0xa491[122]](_0xa491[121], _0xa491[21]);
    };
    if (readCookie(_0xa491[126]) != null && readCookie(_0xa491[127]) != null) {
        username1 = readCookie(_0xa491[127]);
        username2 = readCookie(_0xa491[128]);
        username3 = readCookie(_0xa491[129]);
        usernameArray = [username1, username2, username3];
        timePosted11 = parseInt(readCookie(_0xa491[130]));
        timePosted22 = parseInt(readCookie(_0xa491[131]));
        timePosted33 = parseInt(readCookie(_0xa491[132]));
        timePosted1 = timePostedTimer(timePosted11);
        timePosted2 = timePostedTimer(timePosted22);
        timePosted3 = timePostedTimer(timePosted33);
        timePostedArray = [timePosted1, timePosted2, timePosted3];
        comment1 = readCookie(_0xa491[126]);
        comment2 = readCookie(_0xa491[133]);
        comment3 = readCookie(_0xa491[134]);
        commentsArray = [comment1, comment2, comment3];
    } else {
        username1 = randomKeyword(usernames);
        username2 = randomKeyword(usernames);
        while (username2 == username1) {
            username2 = randomKeyword(usernames);
        };
        username3 = randomKeyword(usernames);
        while (username3 == username2) {
            username3 = randomKeyword(usernames);
        };
        usernameArray = [username1, username2, username3];
        timePosted11 = randomRange(minPostTime * 1000, maxPostTime * 1000);
        timePosted22 = randomRange(minPostTime * 1000, timePosted11);
        timePosted33 = randomRange(minPostTime * 1000, timePosted22);
        timePosted1 = timePostedTimer(timePosted11);
        timePosted2 = timePostedTimer(timePosted22);
        timePosted3 = timePostedTimer(timePosted33);
        timePostedArray = [timePosted1, timePosted2, timePosted3];
        comment1 = newCommentCreator();
        comment2 = newCommentCreator();
        comment3 = newCommentCreator();
        commentsArray = [comment1, comment2, comment3];
        createCookie(_0xa491[127], username1, 0.003);
        createCookie(_0xa491[128], username2, 0.003);
        createCookie(_0xa491[129], username3, 0.003);
        createCookie(_0xa491[126], comment1, 0.003);
        createCookie(_0xa491[133], comment2, 0.003);
        createCookie(_0xa491[134], comment3, 0.003);
    };
    updateComments();
    var _0x53c9x2 = setInterval(timer, 1000);
    var _0x53c9x3 = setInterval(getNewComment, refreshRate);
    $(_0xa491[136])[_0xa491[135]](submitEvent);
};

function getNewComment() {
    username1 = username2;
    username2 = username3;
    username3 = randomKeyword(usernames);
    while (username3 == username2 || username3 == username1) {
        username3 = randomKeyword(usernames);
    };
    usernameArray = [username1, username2, username3];
    timePosted11 = timePosted22;
    timePosted22 = timePosted33;
    timePosted33 = 1000;
    timePosted1 = timePostedTimer(timePosted11);
    timePosted2 = timePostedTimer(timePosted22);
    timePosted3 = timePostedTimer(timePosted33);
    timePostedArray = [timePosted1, timePosted2, timePosted3];
    comment1 = comment2;
    comment2 = comment3;
    comment3 = newCommentCreator();
    commentsArray = [comment1, comment2, comment3];
    createCookie(_0xa491[127], username1, 0.003);
    createCookie(_0xa491[128], username2, 0.003);
    createCookie(_0xa491[129], username3, 0.003);
    createCookie(_0xa491[126], comment1, 0.003);
    createCookie(_0xa491[133], comment2, 0.003);
    createCookie(_0xa491[134], comment3, 0.003);
    refreshRate = randomRange(minPostTime * 1000, maxPostTime * 1000);
    updateComments();
};

function newCommentCreator() {
    emotesType = Math[_0xa491[138]]((Math[_0xa491[137]]() * 2) + 1);
    part1 = part1Creator();
    part2 = part2Creator();
    part3 = part3Creator();
    part4 = part4Creator();
    part5 = part5Creator();
    allParts = [part2, part3, part4, part5];
    allPartsShuffled = shuffle(allParts);
    newComment = part1 + allPartsShuffled[_0xa491[139]](_0xa491[21]);
    if (newComment == _0xa491[21]) {
        return newCommentCreator();
    } else {
        return newComment;
    };
};

function part1Creator() {
    if (Math[_0xa491[137]]() > 0.8) {
        return randomKeyword(wowKeywords) + randomKeyword(punctuation) + emote();
    } else {
        return _0xa491[21];
    };
};

function part2Creator() {
    if (Math[_0xa491[137]]() > 0.4) {
        if (Math[_0xa491[137]]() > 0.5) {
            return randomKeyword(thisKeywords) + randomKeyword(adverbKeywords) + randomKeyword(adjectivesKeywords) + randomKeyword(punctuation) + emote();
        } else {
            return randomKeyword(thisKeywords) + randomKeyword(adjectivesKeywords) + randomKeyword(punctuation) + emote();
        };
    } else {
        return _0xa491[21];
    };
};

function part3Creator() {
    if (Math[_0xa491[137]]() > 0.6) {
        return thanks() + emote();
    } else {
        return _0xa491[21];
    };
};

function part4Creator() {
    if (Math[_0xa491[137]]() > 0.6) {
        if (Math[_0xa491[137]]() > 0.7) {
            return randomKeyword(iKeywords) + randomKeyword(workingKeywords) + _0xa491[37] + randomKeyword(conjunctionKeywords) + randomKeyword(thisKeywords2) + randomKeyword(conKeywords) + randomKeyword(punctuation) + emote();
        } else {
            return randomKeyword(iKeywords) + randomKeyword(workingKeywords) + randomKeyword(punctuation) + emote();
        };
    } else {
        return _0xa491[21];
    };
};

function part5Creator() {
    if (Math[_0xa491[137]]() > 0.7) {
        return randomKeyword(meKeywords) + randomKeyword(gotKeywords) + randomKeyword(amount) + _0xa491[37] + randomKeyword(resources) + randomKeyword(punctuation) + emote();
    } else {
        return _0xa491[21];
    };
};

function randomKeyword(_0x53c9xc) {
    return _0x53c9xc[Math[_0xa491[138]]((Math[_0xa491[137]]() * _0x53c9xc[_0xa491[140]]))];
};

function emote() {
    if (emotesType == 1) {
        if (Math[_0xa491[137]]() > 0.3) {
            return _0xa491[21];
        } else {
            return randomKeyword(emotes1);
        };
    } else {
        if (Math[_0xa491[137]]() > 0.3) {
            return _0xa491[21];
        } else {
            return randomKeyword(emotes2);
        };
    };
};

function thanks() {
    if (Math[_0xa491[137]]() > 0.35) {
        return randomKeyword(thanksKeywords) + randomKeyword(punctuation);
    } else {
        if (Math[_0xa491[137]]() > 0.5) {
            return randomKeyword(thanksKeywords) + _0xa491[37] + website + randomKeyword(punctuation);
        } else {
            return randomKeyword(thanksKeywords) + _0xa491[37] + websiteName + randomKeyword(punctuation);
        };
    };
};

function shuffle(_0x53c9x10) {
    for (var _0x53c9x11, _0x53c9x12, _0x53c9x13 = _0x53c9x10[_0xa491[140]]; _0x53c9x13; _0x53c9x11 = Math[_0xa491[138]](Math[_0xa491[137]]() * _0x53c9x13), _0x53c9x12 = _0x53c9x10[--_0x53c9x13], _0x53c9x10[_0x53c9x13] = _0x53c9x10[_0x53c9x11], _0x53c9x10[_0x53c9x11] = _0x53c9x12) {;;
    };
    return _0x53c9x10;
};

function updateComments() {
    for (i = 0; i <= 3; i++) {
        $(_0xa491[142] + i)[_0xa491[141]](usernameArray[i - 1]);
        $(_0xa491[144] + i)[_0xa491[141]](commentsArray[i - 1] + _0xa491[143]);
        $(_0xa491[145] + i)[_0xa491[141]](timePostedArray[i - 1]);
    };
};

function timePostedTimer(_0x53c9x16) {
    var _0x53c9x17 = _0x53c9x16 / 1000;
    if (_0x53c9x17 < 60) {
        return _0xa491[146];
    } else {
        if (_0x53c9x17 >= 60 && _0x53c9x17 < 120) {
            return _0xa491[147];
        } else {
            var _0x53c9x18 = Math[_0xa491[138]](_0x53c9x17 / 60);
            return _0xa491[148] + _0x53c9x18 + _0xa491[149];
        };
    };
};

function randomRange(_0x53c9x1a, _0x53c9x1b) {
    return Math[_0xa491[150]]((Math[_0xa491[137]]() * (_0x53c9x1b - _0x53c9x1a) + _0x53c9x1a));
};

function timer() {
    timePosted11 = timePosted11 + 1000;
    timePosted22 = timePosted22 + 1000;
    timePosted33 = timePosted33 + 1000;
    eraseCookie(_0xa491[130]);
    eraseCookie(_0xa491[131]);
    eraseCookie(_0xa491[132]);
    createCookie(_0xa491[130], timePosted11, 0.003);
    createCookie(_0xa491[131], timePosted22, 0.003);
    createCookie(_0xa491[132], timePosted33, 0.003);
    timePosted1 = timePostedTimer(timePosted11);
    timePosted2 = timePostedTimer(timePosted22);
    timePosted3 = timePostedTimer(timePosted33);
    timePostedArray = [timePosted1, timePosted2, timePosted3];
    for (i = 0; i <= 3; i++) {
        $(_0xa491[145] + i)[_0xa491[141]](timePostedArray[i - 1]);
    };
};

function submitEvent() {
    if ($(_0xa491[123])[_0xa491[151]]() != _0xa491[21] && $(_0xa491[125])[_0xa491[151]]() != _0xa491[21]) {
        username1 = username2;
        username2 = username3;
        username3 = $(_0xa491[123])[_0xa491[151]]();
        usernameArray = [username1, username2, username3];
        timePosted11 = timePosted22;
        timePosted22 = timePosted33;
        timePosted33 = 1000;
        timePosted1 = timePostedTimer(timePosted11);
        timePosted2 = timePostedTimer(timePosted22);
        timePosted3 = timePostedTimer(timePosted33);
        timePostedArray = [timePosted1, timePosted2, timePosted3];
        comment1 = comment2;
        comment2 = comment3;
        comment3 = $(_0xa491[125])[_0xa491[151]]();
        commentsArray = [comment1, comment2, comment3];
        updateComments();
        createCookie(_0xa491[117], _0xa491[21], 24);
        $(_0xa491[123])[_0xa491[151]](_0xa491[21]);
        $(_0xa491[125])[_0xa491[151]](_0xa491[21]);
        $(_0xa491[120])[_0xa491[119]](_0xa491[118]);
        $(_0xa491[123])[_0xa491[122]](_0xa491[121], _0xa491[21]);
        $(_0xa491[124])[_0xa491[119]](_0xa491[118]);
        $(_0xa491[125])[_0xa491[122]](_0xa491[121], _0xa491[21]);
    } else {
        $(_0xa491[120])[_0xa491[119]](_0xa491[152]);
        $(_0xa491[124])[_0xa491[119]](_0xa491[152]);
    };
};

function createCookie(_0x53c9x1f, _0x53c9x20, _0x53c9x21) {
    if (_0x53c9x21) {
        var _0x53c9x22 = new Date();
        _0x53c9x22[_0xa491[154]](_0x53c9x22[_0xa491[153]]() + (_0x53c9x21 * 24 * 60 * 60 * 1000));
        var _0x53c9x23 = _0xa491[155] + _0x53c9x22[_0xa491[156]]();
    } else {
        var _0x53c9x23 = _0xa491[21];
    };
    document[_0xa491[157]] = _0x53c9x1f + _0xa491[158] + _0x53c9x20 + _0x53c9x23 + _0xa491[159];
};

function readCookie(_0x53c9x1f) {
    var _0x53c9x25 = _0x53c9x1f + _0xa491[158];
    var _0x53c9x26 = document[_0xa491[157]][_0xa491[161]](_0xa491[160]);
    for (var _0x53c9x13 = 0; _0x53c9x13 < _0x53c9x26[_0xa491[140]]; _0x53c9x13++) {
        var _0x53c9x27 = _0x53c9x26[_0x53c9x13];
        while (_0x53c9x27[_0xa491[163]](0) == _0xa491[37]) {
            _0x53c9x27 = _0x53c9x27[_0xa491[162]](1, _0x53c9x27[_0xa491[140]]);
        };
        if (_0x53c9x27[_0xa491[164]](_0x53c9x25) == 0) {
            return _0x53c9x27[_0xa491[162]](_0x53c9x25[_0xa491[140]], _0x53c9x27[_0xa491[140]]);
        };
    };
    return null;
};

function eraseCookie(_0x53c9x1f) {
    createCookie(_0x53c9x1f, _0xa491[21], -1);
};