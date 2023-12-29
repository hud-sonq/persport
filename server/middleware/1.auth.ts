import { getServerSession } from "#auth" 

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);

  const protectedRoutes = ['/api/users', '/api/weathers',];
  const isProtectedRoute = protectedRoutes.some((route) => getRequestURL(event).pathname.startsWith(route));
  if (!isProtectedRoute) {
    return;
  }

  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: "You must be logged in to access this"
    })
  }

  event.context.user = session.user;
})
