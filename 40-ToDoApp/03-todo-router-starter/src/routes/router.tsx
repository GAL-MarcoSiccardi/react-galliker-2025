import {createRootRoute, createRoute, createRouter} from '@tanstack/react-router';
import {ToDoScreen} from './todo/ToDoScreen.tsx';
import {Layout} from '../Layout.tsx';

const rootRoute = createRootRoute({
  component: Layout
})

export const todoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ToDoScreen
});

// Exercise: implement the `/done` Route

const routeTree = rootRoute.addChildren([todoRoute]);
export const router = createRouter({ routeTree });


// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}