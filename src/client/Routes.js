import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import UserListPage from "./pages/UserListPage"

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UserListPage,
        path: '/users',
    },
    {
        ...NotFoundPage
    }
]