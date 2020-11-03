/*
 * @Author: trry
 * @Date: 2020-10-22 15:41:17
 * @LastEditors: trry
 * @LastEditTime: 2020-10-26 09:10:33
 * @Description: file content
 */
// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            .assert.elementPresent('.hello')
            .assert.containsText('h1', 'Welcome to Your Vue.js App')
            .assert.elementCount('img', 1)
            .end()
    }
}
