exports.install = function (Vue, options) {
	Vue.prototype.emptyString = function(value) {
	    return value === undefined || value == "";
	};

	Vue.prototype.isInt = function(value) {
	    return /^\-?\d+$/.test(value)
	};

	Vue.prototype.isNum = function(value) {
		return /^\-?\d+(\.\d+)?$/.test(value)
	};

	Vue.prototype.fillPixelSuffix = function (value){
		return this.isInt(value) ? value + "px" : value;
	};

	Vue.prototype.appendStyle = function(style, key, value, defaultValue){
		if (value === undefined || value == "") {
			if (defaultValue === undefined) {
				return style;
			}
			value = defaultValue;
		}
		return style + key + ":" + value + ";";
	}
};