export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig();
    console.log("middleware config var, ", config);
})
