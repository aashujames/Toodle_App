export function getToken(def = "refresh") {
    if (def) {
        return localStorage.getItem("refresh");
    } else {
        return localStorage.getItem("access");
    }
}

export function setToken(param1 = "access", param2) {
    if (param1) {
        localStorage.setItem("access", param1);
    }
    if (param1 && param2) {
        localStorage.setItem("access", param1);
        localStorage.setItem("refresh", param2);
    }
}

export function clearAllTokens() {
    return localStorage.clear();
}
