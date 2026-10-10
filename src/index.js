export default {
  async fetch(request) {
    const url = new URL(request.url);

    return Response.json(
      {
        ok: true,
        message: "atlas-ai worker is active",
        hostname: url.hostname,
        pathname: url.pathname,
        method: request.method,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  },
};
