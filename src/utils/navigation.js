import { roles } from "@/helpers/constants";

export const getRedirectPath = (rol) => {
    switch (rol) {
        case roles.ADMIN:
            return "/admin";
        case roles.USUARIO:
            return "/menu";
        default:
            return "/";
    }
}