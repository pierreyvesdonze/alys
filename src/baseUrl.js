let baseUrl;

if (process.env.NODE_ENV === 'development') {
    // Environnement de développement
    baseUrl = process.env.PUBLIC_URL;
} else {
    // Environnement de production
    baseUrl = "https://pierreyvesdonze.github.io/alys";
}

export default baseUrl;
