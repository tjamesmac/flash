import { app } from './app';


const server = app.listen(3005, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        3005,
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
})

export { server };