document.querySelector('.child').classList.add('active');
        document.querySelector('.contenedor-3-1 li:first-child').classList.add('active-li');

        document.querySelectorAll('.contenedor-3-1 a').forEach(link => {
            link.addEventListener('click', function(event) {
                document.querySelectorAll('.contenedor-3-1 li').forEach(li => {
                    li.classList.remove('active-li');
                });
                this.parentElement.classList.add('active-li');
            });
        });