document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const collapseElement = document.querySelector('.navbar-collapse');
                const bsCollapse = bootstrap.Collapse.getInstance(collapseElement);
                if (bsCollapse) bsCollapse.hide();
            });
        });