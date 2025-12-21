  
        // DOM elements
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const showSignupLink = document.getElementById('show-signup');
        const showLoginLink = document.getElementById('show-login');
        const loginPasswordToggle = document.getElementById('loginPasswordToggle');
        const signupPasswordToggle = document.getElementById('signupPasswordToggle');
        const loginPassword = document.getElementById('loginPassword');
        const signupPassword = document.getElementById('signupPassword');
        const confirmPassword = document.getElementById('confirmPassword');
        const loginAlert = document.getElementById('login-alert');
        const signupAlert = document.getElementById('signup-alert');
        const passwordStrengthBar = document.getElementById('password-strength-bar');
        const passwordStrengthText = document.getElementById('password-strength-text');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        
        // Switch between login and signup forms
        showSignupLink.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.classList.remove('active');
            signupForm.classList.add('active');
            clearFormAlerts();
        });
        
        showLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            signupForm.classList.remove('active');
            loginForm.classList.add('active');
            clearFormAlerts();
        });
        
        // Password visibility toggle
        loginPasswordToggle.addEventListener('click', function() {
            togglePasswordVisibility(loginPassword, this);
        });
        
        signupPasswordToggle.addEventListener('click', function() {
            togglePasswordVisibility(signupPassword, this);
        });
        
        function togglePasswordVisibility(passwordField, toggleIcon) {
            const icon = toggleIcon.querySelector('i');
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordField.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }
        
        // Password strength indicator
        signupPassword.addEventListener('input', function() {
            checkPasswordStrength(this.value);
        });
        
        function checkPasswordStrength(password) {
            let strength = 0;
            let text = '';
            let color = '';
            
            // Check password length
            if (password.length >= 8) strength++;
            if (password.length >= 12) strength++;
            
            // Check for lowercase, uppercase, numbers and special characters
            if (/[a-z]/.test(password)) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;
            if (/[^A-Za-z0-9]/.test(password)) strength++;
            
            // Determine strength level
            if (password.length === 0) {
                passwordStrengthText.style.display = 'none';
                passwordStrengthBar.style.width = '0%';
                return;
            }
            
            if (strength <= 2) {
                text = 'Weak password';
                color = '#dc3545'; // Red
                passwordStrengthBar.style.width = '30%';
            } else if (strength <= 4) {
                text = 'Moderate password';
                color = '#ffc107'; // Yellow
                passwordStrengthBar.style.width = '60%';
            } else {
                text = 'Strong password';
                color = '#198754'; // Green
                passwordStrengthBar.style.width = '100%';
            }
            
            passwordStrengthBar.style.backgroundColor = color;
            passwordStrengthText.textContent = text;
            passwordStrengthText.style.color = color;
            passwordStrengthText.style.display = 'block';
        }
        
        // Confirm password validation
        confirmPassword.addEventListener('input', function() {
            if (signupPassword.value !== confirmPassword.value) {
                confirmPassword.classList.add('is-invalid');
                confirmPassword.classList.remove('is-valid');
            } else {
                confirmPassword.classList.remove('is-invalid');
                confirmPassword.classList.add('is-valid');
            }
        });
        
        // Login form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Show loading state
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Signing In...';
            loginBtn.disabled = true;
            
            // Simulate API call with timeout
            setTimeout(() => {
                // For demo purposes, check for specific credentials
                if (email === "demo@example.com" && password === "password123") {
                    showAlert(loginAlert, 'success', 'Login successful! Redirecting...');
                    // In a real app, you would redirect to dashboard or make API call
                    console.log('Login successful for:', email, 'Remember me:', rememberMe);
                } else {
                    showAlert(loginAlert, 'danger', 'Invalid email or password. Please try again.');
                }
                
                // Reset button state
                loginBtn.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>Sign In';
                loginBtn.disabled = false;
            }, 1500);
        });
        
        // Signup form submission
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPass = document.getElementById('confirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Validate passwords match
            if (password !== confirmPass) {
                showAlert(signupAlert, 'danger', 'Passwords do not match.');
                return;
            }
            
            // Validate terms agreement
            if (!agreeTerms) {
                showAlert(signupAlert, 'danger', 'You must agree to the terms and conditions.');
                return;
            }
            
            // Show loading state
            signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Creating Account...';
            signupBtn.disabled = true;
            
            // Simulate API call with timeout
            setTimeout(() => {
                showAlert(signupAlert, 'success', `Account created successfully! Welcome ${firstName}.`);
                console.log('Signup successful for:', {firstName, lastName, email, password});
                
                // Reset button state
                signupBtn.innerHTML = '<i class="fas fa-user-plus me-2"></i>Create Account';
                signupBtn.disabled = false;
                
                // Clear form
                document.getElementById('signupForm').reset();
                confirmPassword.classList.remove('is-valid');
                passwordStrengthText.style.display = 'none';
                passwordStrengthBar.style.width = '0%';
                
                // Auto switch to login form after successful signup
                setTimeout(() => {
                    signupForm.classList.remove('active');
                    loginForm.classList.add('active');
                    clearFormAlerts();
                    // Pre-fill login email with the newly registered email
                    document.getElementById('loginEmail').value = email;
                }, 2000);
            }, 1500);
        });
        
        // Helper function to show alerts
        function showAlert(alertElement, type, message) {
            alertElement.className = `alert alert-${type}`;
            alertElement.querySelector('span').textContent = message;
            alertElement.style.display = 'block';
            
            // Auto-hide alert after 5 seconds
            setTimeout(() => {
                alertElement.style.display = 'none';
            }, 5000);
        }
        
        // Clear all form alerts
        function clearFormAlerts() {
            loginAlert.style.display = 'none';
            signupAlert.style.display = 'none';
        }
        
        // Demo credentials hint
        window.addEventListener('load', function() {
            console.log('Demo credentials:');
            console.log('Email: demo@example.com');
            console.log('Password: password123');
        });
    