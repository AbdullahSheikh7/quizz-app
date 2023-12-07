function deleteAllCookies() {
    let cookie = document.cookie.split("; ");
    for (i = 0; i < cookie.length; i++) {
        let name = cookie[i].split("=")[0];
        document.cookie = `${name}=; path=/`
    }
}

deleteAllCookies();
