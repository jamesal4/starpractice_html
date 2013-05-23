define(['../StarPractice/main'], function (StarPractice) {
    return {
        configure: function (config) {
            if (StarPractice) {
                StarPractice.configure(config);
            }
        }
    }
});
