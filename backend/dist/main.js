"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useStaticAssets((0, path_1.join)(__dirname, '../..', 'frontend', 'dist'));
    app.use((req, res, next) => {
        if (!req.url.startsWith('/api')) {
            res.sendFile((0, path_1.join)(__dirname, '../..', 'frontend', 'dist', 'index.html'));
        }
        else {
            next();
        }
    });
    await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map