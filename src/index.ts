export default {
  async fetch(
    request: Request
    // env: Env
    // ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);
    const { search } = url;

    const sanitized = decodeURIComponent(search.replace("?r=", ""));

    // return new Response(sanitized);
    return Response.redirect(sanitized, 302);
  }
};
