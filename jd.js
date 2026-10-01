/* --- JAVASCRIPT: IMIKORERE --- */
    function goToStep(stepNumber) {
        // Kugenzura niba igice cya mbere cyuzuye
        if (stepNumber === 2) {
            const name = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            if (!name || !email) {
                alert("Dear customer you have to fill in all information related to you here !");
                return;
            }
        }
        

        // Guhinduranya ibice
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.querySelectorAll('.step-circle').forEach(dot => dot.classList.remove('active'));

        document.getElementById('step' + stepNumber).classList.add('active');
        document.getElementById('dot' + stepNumber).classList.add('active');
    }

    // Igihe akanze ohereza
    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hisha form yose utereho ubutumwa bw'ishimwe
        document.getElementById('myForm').style.display = 'none';
        document.querySelector('.steps-header').style.display = 'none';
        document.getElementById('success-msg').style.display = 'block';
    });
