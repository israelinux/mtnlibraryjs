(function () {
    var global = this;
    if (typeof Mtn === 'undefined') {
        global.Mtn = {};
    }
    if (typeof Mtn.utils === 'undefined') {
        Mtn.utils = {};
    }
    if (typeof Mtn.getUrl === 'undefined') {
        Mtn.getUrl = function () { return Mtn.SERVER_URL; };
    }
    if (typeof Mtn.utils.createNamespace === 'undefined') {
        Mtn.utils.createNamespace = function (namespace) {
            var me = window;
            var arrNs = namespace.split('.');
            var lastObj = me;
            for (var i = 0; i < arrNs.length; i++) {
                var ns = arrNs[i];
                if (typeof lastObj[ns] === 'undefined')
                    lastObj[ns] = {};
                lastObj = lastObj[ns];
            }
        };
    }

    Mtn.ns = Mtn.utils.createNamespace;
    Mtn.utils.isNullOrUndefined = function (o) {
        if (typeof o === 'undefined') return true;
        if (o === null) return true;
        return false;
    };
    Mtn.isNullOrUndefined = Mtn.utils.isNullOrUndefined;
    Mtn.utils.isEmpty = function (o) {
        return (typeof o !== 'string' || o.length === 0);
    };
    Mtn.isEmpty = Mtn.utils.isEmpty;
    Mtn.utils.createId = function (el, matchDate) {
        if (Mtn.isNullOrUndefined(el))
            el = 'id';
        var replaceMatch = 'xxxxxxxx-xxxx-4xxx-yxxx-';
        if (matchDate) {
            var dateVal = (new Date().getTime() + '');
            replaceMatch += dateVal.slice(dateVal.length - 12);
        }
        else {
            replaceMatch += 'xxxxxxxxxxxx';
        }
        var id = replaceMatch.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        var lel = (Mtn.isEmpty(el) ? '' : el + '-');
        lel += id;
        if (Mtn.isNullOrUndefined(document.getElementById(lel)))
            return lel;
        else
            return Mtn.utils.createId(el);
    };
    Mtn.id = Mtn.utils.createId;
    Mtn.support = {};
    var fi = document.createElement('input');
    fi.type = 'file';
    if (fi.multiple === false || fi.multiple === true) {
        fi.multiple = true;
    }
    else if (fi.min === '' && fi.max === '') {
        fi.min = 1;
        fi.max = 9999;
    }
    Mtn.support.multipleFile = (typeof fi.multiple !== 'undefined');
    Mtn.support.uploadXhr = (Mtn.support.multipleFile && typeof (new XMLHttpRequest()).upload !== 'undefined');

    // from jQuery
    Mtn.getType = function (obj) {
        var class2type = {};
        var toString = class2type.toString;
        if (obj == null) {
            return obj + '';
        }
        // Support: Android < 4.0, iOS < 6 (functionish RegExp)
        return typeof obj === 'object' || typeof obj === 'function' ?
			class2type[toString.call(obj)] || 'object' :
			typeof obj;
    };
    //from jquery
    Mtn.isFunction = function (obj) {
        return Mtn.getType(obj) === 'function';
    };

    Mtn.reset = function (obj) {
        for (var name in obj) {
            if (Mtn.isFunction(obj[name]))
                continue;
            this[name] = '';
        };
    };
    Mtn.trim = function (text) {
        //from jquery
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return text == null ? '' : (text + '').replace(rtrim, '');
    };

    Mtn.removeAt = function (array, pos) {
        if (pos < 0 || pos >= array.length)
            return array;
        var nArr = [];
        for (var i = pos + 1; i < array.length; i++) {
            nArr.push(array[i]);
        }
        return nArr;
    };
    Mtn.utils.simpleLambda = function (query) {
        if (Mtn.isEmpty(query))
            return new Function('return true;');
        if (query.indexOf('=>') < 0)
            return new Function(query);

        var arr = query.split('=>');
        var qualifier = Mtn.trim(arr[0]);
        var body = Mtn.removeAt(arr, 0);
        body = body.join('=>');
        var code = 'return ' + body + ';';
        var fn = new Function(qualifier, code);
        return fn;
    };

    Mtn.lambda = Mtn.utils.simpleLambda;

    Mtn.whereMtn = function (array, query) {
        var fn = Mtn.lambda(query);
        var nArr = [];
        for (var i = 0; i < array.length; i++) {
            if (fn(array[i])) {
                nArr.push(array[i]);
            }
        }
        return nArr;
    };

    Mtn.firstMtn = function (array, query) {
        var fn = Mtn.lambda(query);
        for (var i = 0; i < array.length; i++) {
            if (fn(array[i])) {
                return array[i];
            }
        }
        return null;
    };

    Mtn.anyMtn = function (array, query) {
        var fn = Mtn.lambda(query);
        for (var i = 0; i < array.length; i++) {
            if (fn(array[i])) {
                return true;
            }
        }
        return false;
    };

    Mtn.version = function (password) {
        Mtn.Library.Internals.Utilities.version({ data: { password: password }, success: function (r) { console.log(r); }, error: function () { console.log(arguments); } });
    };

})();
