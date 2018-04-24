# assertivity.prototype

**Assertivity.prototype** is a simple JavaScript object that holds a set of methods that return `true` or `false`. 

# 1. Installation

~$ `npm install assertivity.prototype`

# 2. Usage

All the methods work more or less the same way.

**First parameter:** `{Any} reference`. 

**Other parameters:** `{Any}`. Some methods have 0 additional parameters, 1 or infinite.

# 3. API

List of all the available methods:

```js
Assertivity.prototype.it.is(reference,other)
Assertivity.prototype.it.is.true(reference)
Assertivity.prototype.it.is.truthy(reference)
Assertivity.prototype.it.is.false(reference)
Assertivity.prototype.it.is.falsy(reference)
Assertivity.prototype.it.is.equal.to(reference,other)
Assertivity.prototype.it.is.similar.to(reference,other)
Assertivity.prototype.it.is.like(reference,other)
Assertivity.prototype.it.is.different.from(reference,other)
Assertivity.prototype.it.is.defined(reference)
Assertivity.prototype.it.is.undefined(reference)
Assertivity.prototype.it.is.something(reference)
Assertivity.prototype.it.is.boolean(reference)
Assertivity.prototype.it.is.number(reference)
Assertivity.prototype.it.is.float(reference)
Assertivity.prototype.it.is.integer(reference)
Assertivity.prototype.it.is.func(reference)
Assertivity.prototype.it.is.string(reference)
Assertivity.prototype.it.is.date(reference)
Assertivity.prototype.it.is.promise(reference)
Assertivity.prototype.it.is.action(reference)
Assertivity.prototype.it.is.array(reference)
Assertivity.prototype.it.is.object(reference)
Assertivity.prototype.it.is.instance.of(reference,other)
Assertivity.prototype.it.is.more.than(reference,other)
Assertivity.prototype.it.is.more.or.equal.to(reference,other)
Assertivity.prototype.it.is.less.than(reference,other)
Assertivity.prototype.it.is.less.or.equal.to(reference,other)
Assertivity.prototype.it.is.empty(reference)
Assertivity.prototype.it.has(reference,other)
Assertivity.prototype.it.has.key(reference,other)
Assertivity.prototype.it.has.keys(reference,other)
Assertivity.prototype.it.has.value(reference,other)
Assertivity.prototype.it.has.values(reference,other)
Assertivity.prototype.it.is.not(reference,other)
Assertivity.prototype.it.is.not.true(reference)
Assertivity.prototype.it.is.not.truthy(reference)
Assertivity.prototype.it.is.not.false(reference)
Assertivity.prototype.it.is.not.falsy(reference)
Assertivity.prototype.it.is.not.equal.to(reference,other)
Assertivity.prototype.it.is.not.similar.to(reference,other)
Assertivity.prototype.it.is.not.like(reference,other)
Assertivity.prototype.it.is.not.different.from(reference,other)
Assertivity.prototype.it.is.not.defined(reference)
Assertivity.prototype.it.is.not.undefined(reference)
Assertivity.prototype.it.is.not.something(reference)
Assertivity.prototype.it.is.not.boolean(reference)
Assertivity.prototype.it.is.not.number(reference)
Assertivity.prototype.it.is.not.float(reference)
Assertivity.prototype.it.is.not.integer(reference)
Assertivity.prototype.it.is.not.func(reference)
Assertivity.prototype.it.is.not.string(reference)
Assertivity.prototype.it.is.not.date(reference)
Assertivity.prototype.it.is.not.promise(reference)
Assertivity.prototype.it.is.not.action(reference)
Assertivity.prototype.it.is.not.array(reference)
Assertivity.prototype.it.is.not.object(reference)
Assertivity.prototype.it.is.not.instance.of(reference,other)
Assertivity.prototype.it.is.not.more.than(reference,other)
Assertivity.prototype.it.is.not.more.or.equal.to(reference,other)
Assertivity.prototype.it.is.not.less.than(reference,other)
Assertivity.prototype.it.is.not.less.or.equal.to(reference,other)
Assertivity.prototype.it.is.not.empty(reference)
Assertivity.prototype.it.has.not(reference,other)
Assertivity.prototype.it.has.not.key(reference,other)
Assertivity.prototype.it.has.not.keys(reference,other)
Assertivity.prototype.it.has.not.value(reference,other)
Assertivity.prototype.it.has.not.values(reference,other)
```js

# 4. Conclusion

This is a basic class only.