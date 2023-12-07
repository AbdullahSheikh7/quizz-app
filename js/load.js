function deleteAllCookies() {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const cookieParts = cookies[i].split("=");
        const cookieName = cookieParts[0];
        document.cookie = `${cookieName}=; path="/"`;
    }
}

deleteAllCookies();
