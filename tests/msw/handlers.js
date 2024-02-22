import { http, HttpResponse } from "msw";
import alerts from "../../packages/alert/src/__tests__/fixtures/alerts.json";

export const handlers = [
  http.get(/\/api\/v1\/alerts.json/, () => {
    return HttpResponse.json(alerts);
  }),
];
