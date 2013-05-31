alert("top of StarPractice.js");
define(['../StarPractice/main'], function (StarPractice) {
    return {
        configure: function (config) {
        	alert("in configure function of StarPractice.js");
            if (StarPractice) {
                StarPractice.configure(config);
            }
        }
    }
});
