import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useSchoolRegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    country: '',
    phone: '',
    schoolName: '',
    schoolAddress: '',
    email: '',
    username: '',
    password: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = (data) => {
    let newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Required';
    else if (!/^[A-Za-z\s]+$/.test(data.name)) newErrors.name = 'Only alphabets allowed';

    if (!data.designation.trim()) newErrors.designation = 'Required';
    if (!data.country) newErrors.country = 'Required';

    if (!data.phone.trim()) newErrors.phone = 'Required';
    else if (!/^\d+$/.test(data.phone)) newErrors.phone = 'Only numbers allowed';

    if (!data.schoolName.trim()) newErrors.schoolName = 'Required';
    if (!data.schoolAddress.trim()) newErrors.schoolAddress = 'Required';
    if (!data.email.trim()) newErrors.email = 'Required';
    if (!data.username.trim()) newErrors.username = 'Required';

    if (!data.password) newErrors.password = 'Required';
    else if (
      data.password.length < 8 ||
      !/[0-9]/.test(data.password) ||
      !/[^A-Za-z0-9]/.test(data.password)
    ) {
      newErrors.password = 'Password does not meet all criteria';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    if (touched[name] || submitted) {
      setErrors(validate(newData));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('https://olympiad-backend-ko0e.onrender.com/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (response.ok) {
          alert('Registration successful! Please check your email for verification.');
          navigate('/login');
        } else {
          alert(`Error: ${data.error || data.message || 'Registration failed'}`);
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Network error. Is the backend server running?');
      }
    }
  };

  const criteria = [
    { label: '8+ characters', met: formData.password.length >= 8 },
    { label: 'At least 1 number', met: /[0-9]/.test(formData.password) },
    { label: 'At least 1 special char (@, #, etc.)', met: /[^A-Za-z0-9]/.test(formData.password) }
  ];

  return {
    formData,
    errors,
    touched,
    submitted,
    showPassword,
    setShowPassword,
    handleChange,
    handleBlur,
    handleSubmit,
    criteria
  };
}
