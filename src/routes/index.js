export const register = (app) => {
    app.get("/", (req, res) => {
		res.json({ message: "success" });
	});
}