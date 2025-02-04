(function () {
    function FreeCaptcha() {
        this.init = function () {
            var forms = document.querySelectorAll('form');
            forms.forEach(this.setupForm.bind(this));
        };

        this.setupForm = function (form) {
            var honeypot = document.createElement('div');
            honeypot.style.display = 'none';

            var honeypotInput = document.createElement('input');
            honeypotInput.setAttribute('type', 'text');
            honeypotInput.setAttribute('name', 'free_captcha_honeypot');
            honeypot.appendChild(honeypotInput);
            form.appendChild(honeypot);

            form.addEventListener('submit', this.handleSubmit.bind(this));
        };

        this.handleSubmit = function (event) {
            var form = event.target;
            var honeypotInput = form.querySelector('input[name="free_captcha_honeypot"]');
            if (honeypotInput.value) {
                event.preventDefault();
                return false;
            }
            return true;
        };
    }

    document.addEventListener('DOMContentLoaded', function () {
        var freeCaptcha = new FreeCaptcha();
        freeCaptcha.init();
    });
})();