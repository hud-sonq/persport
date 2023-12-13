export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  const headers = event.req.headers;
  console.log("Header Authorization:", headers.authorization);

  if (headers.authorization == config.openaiSecret) {
    return "You are authorized";
  }
  else {
    return "Access denied!"
  }
});