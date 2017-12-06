var globalFunction = {

    /**
     * 打开 win
     * @param name window 名字
     * @param url 页面地址
     * @param pageParam 页面参数，新页面中可以通过 api.pageParam 获取
     * @param otherParam 其他参数
     */
    openWin: function (name, url, pageParam, otherParam) {
        var obj = {
            name: name,
            url: url,
            slidBackEnabled: false
        };
        if (pageParam) {
            obj.pageParam = pageParam;
        }
        api.openWin(obj);
    },

    /**
     * 获取参数，若为假值，返回默认参数
     * 假值：
     *      undefined
     *      null
     *      NaN
     *      0, +0, -0
     *      '', ""
     *      false
     * @param param 参数
     * @param defaultParam 默认参数
     * @returns {*}
     */
    getParamAndCheckDefault: function (param, defaultParam) {
        if (param) {
            return param;
        } else {
            return defaultParam;
        }
    },
};