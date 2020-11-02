"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const app_1 = require("./app");
const server = app_1.app.listen(3005, () => {
    console.log("  App is running at http://localhost:%d in %s mode", 3005, app_1.app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.server = server;
//# sourceMappingURL=server.js.map