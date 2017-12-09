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

    /**
     * 弹出提示
     * @param message 提示信息
     */
    showToast: function (message) {
        globalFunction.showToastWithLocation(message, 'bottom');
    },

    /**
     * 弹出提示
     * @param message 提示信息
     * @param location 位置：top, middle, bottom
     */
    showToastWithLocation: function(message, location) {
        api.toast({
            msg: message,
            duration: 2000,
            location: location
        })
    },

    /**
     * 退出 APP
     * @param id APP ID
     */
    exitApp: function(id) {
        api.addEventListener({
            name: 'keyback'
        }, function (ret, err) {
            globalFunction.showToast('再按一次返回键退出 ' + api.appName);
            api.addEventListener({
                name: 'keyback'
            }, function (ret, err) {
                api.closeWidget({
                    id: id,
                    silent: true
                });
            });
            setTimeout(function () {
                globalFunction.exitApp();
            }, 2000)
        });
    },

    /**
     * 对动态生成的元素进行 tapmode 属性解析
     */
    parseTapmode: function () {
        setTimeout(function () {
            api.parseTapmode();
        }, 100);
    }
};

var globalColor = {
    blue: '#039be5',
    red: '#F4606C',
    redActive: '#f9505e',
    green: '#19CAAD',
    greenActive: '#36bfa9'
};