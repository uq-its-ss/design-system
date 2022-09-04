import { rest } from "msw";
import alerts from "@uqds/alert/src/__tests__/fixtures/alerts.json";

const server = [
  rest.get(/\/api\/v1\/alerts.json$/, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(alerts));
  }),
];

export default server;
