import express from "express";

const app = express();

const PORT = Number(process.env.PORT ?? 8080);
const HOST = process.env.HOST ?? "0.0.0.0";

app.disable("x-powered-by");

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use(express.static("public", {
  etag: false,
  lastModified: false,
  setHeaders(res) {
    res.setHeader("Cache-Control", "no-store");
  }
}));

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Web PoC escuchando en http://${HOST}:${PORT}`);
});
