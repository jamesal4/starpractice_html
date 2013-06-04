define(['../StarPractice/main'], function (StarPractice) {
    return {
        configure: function (config) {
        	alert("StarPractice.js:configure");
            if (StarPractice) {
                StarPractice.configure(config);
            }
        }
    }
});
