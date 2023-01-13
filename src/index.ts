export default {
  async fetch(
    request: Request
    // env: Env
    // ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);
    const { search } = url;

    const santized = search.replace("?r=", "");
    return Response.redirect(santized, 302);
  }
};

// https://yhb.redirect.v01.io/?r=https://mail.google.com/mail/u/0/
