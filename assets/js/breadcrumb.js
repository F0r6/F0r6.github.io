// breadcrumbs.js
document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbList = document.getElementById('breadcrumbs');
    const currentPath = window.location.pathname;
    let history = JSON.parse(localStorage.getItem('breadcrumbHistory')) || [];

    if (!history.includes(currentPath)) {
        history.push(currentPath);
        localStorage.setItem('breadcrumbHistory', JSON.stringify(history));
    }

    history.forEach((path, index) => {
        if (index > 0) { // Skip the first element (which should be the root)
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = path;
            a.textContent = path.substring(1) || 'Home';
            li.appendChild(a);
            breadcrumbList.appendChild(li);
        }
    });
});
