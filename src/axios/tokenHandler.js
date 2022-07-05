export function getToken(def = "refresh") {
    if (def) {
        return localStorage.getItem("refresh");
    } else {
        return localStorage.getItem("access");
    }
}

export function setToken(param1 = "access", param2) {
    console.log(param1, param2);
    if (param1) {
        localStorage.setItem("access", JSON.stringify("access"));
    }
    if (param1 && param2) {
        localStorage.setItem("access", JSON.stringify("access"));
        localStorage.setItem("refresh", JSON.stringify("refresh"));
    }
}

export function clearAllTokens() {
    return localStorage.clear();
}
