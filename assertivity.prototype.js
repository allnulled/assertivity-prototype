Assertivity = {};
Assertivity.prototype = {};
Assertivity.prototype.it = function() {}
Assertivity.prototype.it.is = function($, a) {
	return $ === a;
};
Assertivity.prototype.it.is.true = function($, a) {
	return $ === true;
};
Assertivity.prototype.it.is.truthy = function($, a) {
	return (!!$) === true;
};
Assertivity.prototype.it.is.false = function($, a) {
	return $ === false;
};
Assertivity.prototype.it.is.falsy = function($, a) {
	return (!!$) === false;
};
Assertivity.prototype.it.is.equal = {};
Assertivity.prototype.it.is.equal.to = function($, a) {
	return $ === a;
};
Assertivity.prototype.it.is.similar = {};
Assertivity.prototype.it.is.similar.to = function($, a) {
	return $ == a;
};
Assertivity.prototype.it.is.like = function($, a) {
	return $ == a;
};
Assertivity.prototype.it.is.different = {};
Assertivity.prototype.it.is.different.from = function($, a) {
	return $ !== a;
};
Assertivity.prototype.it.is.defined = function($, a) {
	return typeof $ !== "undefined";
};
Assertivity.prototype.it.is.undefined = function($, a) {
	return typeof $ === "undefined";
};
Assertivity.prototype.it.is.inside = function() {
	if (a instanceof Array || typeof a === "string") {
		return -1 !== a.indexOf($);
	} else if (typeof a === "object") {
		return -1 !== (Object.keys(a).concat(Object.values(a))).indexOf($);
	}
	return false;
};
Assertivity.prototype.it.is.something = function($, a) {
	return !!$;
};
Assertivity.prototype.it.is.boolean = function($, a) {
	return typeof $ === "boolean";
};
Assertivity.prototype.it.is.number = function($, a) {
	return typeof $ === "number";
};
Assertivity.prototype.it.is.float = function($, a) {
	return typeof $ === "number" && ($ % 1 !== 0);
};
Assertivity.prototype.it.is.integer = function($, a) {
	return typeof $ === "number" && ($ % 1 === 0);
};
Assertivity.prototype.it.is.func = function($, a) {
	return typeof $ === "function";
};
Assertivity.prototype.it.is.string = function($, a) {
	return typeof $ === "string";
};
Assertivity.prototype.it.is.date = function($, a) {
	return $ instanceof Date;
};
Assertivity.prototype.it.is.promise = function($, a) {
	return typeof $ === "function";
};
Assertivity.prototype.it.is.action = function($, a) {
	return typeof $ === "function";
};
Assertivity.prototype.it.is.array = function($, a) {
	return typeof $ === "boolean";
};
Assertivity.prototype.it.is.object = function($, a) {
	return typeof $ === "object";
};
Assertivity.prototype.it.is.instance = {};
Assertivity.prototype.it.is.instance.of = function($, a) {
	return $ instanceof a;
};
Assertivity.prototype.it.is.more = {};
Assertivity.prototype.it.is.more.than = function($, a) {
	return $ > a;
};
Assertivity.prototype.it.is.more.or = {};
Assertivity.prototype.it.is.more.or.equal = {};
Assertivity.prototype.it.is.more.or.equal.to = function($, a) {
	return $ >= a;
};
Assertivity.prototype.it.is.less = {};
Assertivity.prototype.it.is.less.than = function($, a) {
	return $ < a;
};
Assertivity.prototype.it.is.less.or = {};
Assertivity.prototype.it.is.less.or.equal = {};
Assertivity.prototype.it.is.less.or.equal.to = function($, a) {
	return $ <= a;
};
Assertivity.prototype.it.is.empty = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return $.length !== 0;
	} else if (typeof $ === "object") {
		return Object.values($).length !== 0;
	}
	return !!$;
};
Assertivity.prototype.it.has = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return -1 !== $.indexOf(a);
	} else if (typeof $ === "object") {
		return -1 !== Object.keys($).concat(Object.values($)).indexOf(a);
	}
	return false;
};
Assertivity.prototype.it.has.key = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return $.length > parseInt(a);
	} else if (typeof $ === "object") {
		return a in $;
	}
	return false;
};
Assertivity.prototype.it.has.keys = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return $.length > parseInt(a);
	} else if (typeof $ === "object") {
		return a in $;
	}
	return false;
};
Assertivity.prototype.it.has.value = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return $.indexOf(a) !== -1;
	} else if (typeof $ === "object") {
		return -1 !== Object.values($).indexOf(a);
	}
	return false;
};
Assertivity.prototype.it.has.values = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return $.indexOf(a) !== -1;
	} else if (typeof $ === "object") {
		return -1 !== Object.values($).indexOf(a);
	}
	return false;
};
Assertivity.prototype.it.is.not = function($, a) {
	return !($ === a);
};
Assertivity.prototype.it.is.not.true = function($, a) {
	return !($ === true);
};
Assertivity.prototype.it.is.not.truthy = function($, a) {
	return !((!!$) === true);
};
Assertivity.prototype.it.is.not.false = function($, a) {
	return !($ === false);
};
Assertivity.prototype.it.is.not.falsy = function($, a) {
	return !((!!$) === false);
};
Assertivity.prototype.it.is.not.equal = {};
Assertivity.prototype.it.is.not.equal.to = function($, a) {
	return !($ === a);
};
Assertivity.prototype.it.is.not.similar = {};
Assertivity.prototype.it.is.not.similar.to = function($, a) {
	return !($ == a);
};
Assertivity.prototype.it.is.not.like = function($, a) {
	return !($ == a);
};
Assertivity.prototype.it.is.not.different = {};
Assertivity.prototype.it.is.not.different.from = function($, a) {
	return !($ !== a);
};
Assertivity.prototype.it.is.not.defined = function($, a) {
	return !(typeof $ !== "undefined");
};
Assertivity.prototype.it.is.not.undefined = function($, a) {
	return !(typeof $ === "undefined");
};
Assertivity.prototype.it.is.not.inside = function() {
	if (a instanceof Array || typeof a === "string") {
		return !(-1 !== a.indexOf($));
	} else if (typeof a === "object") {
		return !(-1 !== (Object.keys(a).concat(Object.values(a))).indexOf($));
	}
	return !(false);
};
Assertivity.prototype.it.is.not.something = function($, a) {
	return !(!!$);
};
Assertivity.prototype.it.is.not.boolean = function($, a) {
	return !(typeof $ === "boolean");
};
Assertivity.prototype.it.is.not.number = function($, a) {
	return !(typeof $ === "number");
};
Assertivity.prototype.it.is.not.float = function($, a) {
	return !(typeof $ === "number" && ($ % 1 !== 0));
};
Assertivity.prototype.it.is.not.integer = function($, a) {
	return !(typeof $ === "number" && ($ % 1 === 0));
};
Assertivity.prototype.it.is.not.func = function($, a) {
	return !(typeof $ === "function");
};
Assertivity.prototype.it.is.not.string = function($, a) {
	return !(typeof $ === "string");
};
Assertivity.prototype.it.is.not.date = function($, a) {
	return !($ instanceof Date);
};
Assertivity.prototype.it.is.not.promise = function($, a) {
	return !(typeof $ === "function");
};
Assertivity.prototype.it.is.not.action = function($, a) {
	return !(typeof $ === "function");
};
Assertivity.prototype.it.is.not.array = function($, a) {
	return !(typeof $ === "boolean");
};
Assertivity.prototype.it.is.not.object = function($, a) {
	return !(typeof $ === "object");
};
Assertivity.prototype.it.is.not.instance = {};
Assertivity.prototype.it.is.not.instance.of = function($, a) {
	return !($ instanceof a);
};
Assertivity.prototype.it.is.not.more = {};
Assertivity.prototype.it.is.not.more.than = function($, a) {
	return !($ > a);
};
Assertivity.prototype.it.is.not.more.or = {};
Assertivity.prototype.it.is.not.more.or.equal = {};
Assertivity.prototype.it.is.not.more.or.equal.to = function($, a) {
	return !($ >= a);
};
Assertivity.prototype.it.is.not.less = {};
Assertivity.prototype.it.is.not.less.than = function($, a) {
	return !($ < a);
};
Assertivity.prototype.it.is.not.less.or = {};
Assertivity.prototype.it.is.not.less.or.equal = {};
Assertivity.prototype.it.is.not.less.or.equal.to = function($, a) {
	return !($ <= a);
};
Assertivity.prototype.it.is.not.empty = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return !($.length !== 0);
	} else if (typeof $ === "object") {
		return !(Object.values($).length !== 0);
	}
	return !(!!$);
};
Assertivity.prototype.it.has.not = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return !(-1 !== $.indexOf(a));
	} else if (typeof $ === "object") {
		return !(-1 !== Object.keys($).concat(Object.values($)).indexOf(a));
	}
	return !(false);
};
Assertivity.prototype.it.has.not.key = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return !($.length > parseInt(a));
	} else if (typeof $ === "object") {
		return !(a in $);
	}
	return !(false);
};
Assertivity.prototype.it.has.not.keys = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return !($.length > parseInt(a));
	} else if (typeof $ === "object") {
		return !(a in $);
	}
	return !(false);
};
Assertivity.prototype.it.has.not.$ = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return !($.indexOf(a) !== -1);
	} else if (typeof $ === "object") {
		return !(-1 !== Object.values($).indexOf(a));
	}
	return !(false);
};
Assertivity.prototype.it.has.not.values = function($, a) {
	if ($ instanceof Array || typeof $ === "string") {
		return !($.indexOf(a) !== -1);
	} else if (typeof $ === "object") {
		return !(-1 !== Object.values($).indexOf(a));
	}
	return !(false);
};