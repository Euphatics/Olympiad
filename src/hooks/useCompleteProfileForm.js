import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';

export default function useCompleteProfileForm({ schoolId, onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    // Step 1
    schoolName: '',
    schoolAddress: '',
    city: '',
    state: '',
    pinCode: '',
    country: 'in', // default
    phoneLandline: '',
    phoneMobile: '',
    email: '',
    website: '',
    affiliationBoard: '',
    affiliationNo: '',
    schoolType: '',
    yearOfEstablishment: '',
    totalStrength: '',

    // Step 2
    principalName: '',
    principalDesignation: 'Principal',
    principalEmail: '',
    principalMobile: '',
    coordinatorName: '',
    coordinatorDesignation: 'Coordinator',
    coordinatorEmail: '',
    coordinatorMobile: '',

    // Step 3
    subjects: [],
    classes: [],
    count1to4: '',
    count5to7: '',
    count8to10: '',
    count11to12: '',
    totalCount: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = (step, data) => {
    let newErrors = {};

    if (step === 1) {
      if (!data.schoolName.trim()) newErrors.schoolName = 'Required';
      if (!data.schoolAddress.trim()) newErrors.schoolAddress = 'Required';
      if (!data.city.trim()) newErrors.city = 'Required';
      if (!data.state.trim()) newErrors.state = 'Required';
      if (!data.pinCode.trim()) newErrors.pinCode = 'Required';
      if (!data.email.trim()) newErrors.email = 'Required';
      if (!data.phoneMobile.trim()) newErrors.phoneMobile = 'Required';
    }

    if (step === 2) {
      if (!data.principalName.trim()) newErrors.principalName = 'Required';
      if (!data.coordinatorName.trim()) newErrors.coordinatorName = 'Required';
      if (!data.coordinatorMobile.trim()) newErrors.coordinatorMobile = 'Required';
    }

    if (step === 3) {
      if (data.subjects.length === 0) newErrors.subjects = 'Select at least one subject';
      if (data.classes.length === 0) newErrors.classes = 'Select at least one class group';
    }

    return newErrors;
  };

  const handleNext = () => {
    setSubmitted(true);
    const stepErrors = validateStep(currentStep, formData);
    setErrors(stepErrors);
    
    if (Object.keys(stepErrors).length === 0) {
      setSubmitted(false);
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    setSubmitted(false);
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    let newData = { ...formData };

    if (type === 'checkbox') {
      // Handle array values for subjects and classes
      if (name === 'subjects' || name === 'classes') {
        const array = [...newData[name]];
        if (checked) {
          array.push(value);
        } else {
          const index = array.indexOf(value);
          if (index > -1) array.splice(index, 1);
        }
        newData[name] = array;
      } else {
        newData[name] = checked;
      }
    } else {
      newData[name] = value;
    }

    setFormData(newData);
    if (touched[name] || submitted) {
      // Re-validate only current step
      const stepErrors = validateStep(currentStep, newData);
      setErrors(prev => ({ ...prev, ...stepErrors }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const stepErrors = validateStep(currentStep, formData);
    setErrors(prev => ({ ...prev, ...stepErrors }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Final check for step 3
    const stepErrors = validateStep(3, formData);
    setErrors(stepErrors);
    
    if (Object.keys(stepErrors).length === 0) {
      setIsSubmitting(true);
      
      // Prepare payload
      const payload = { ...formData };
      payload.subjects = payload.subjects.join(', ');
      payload.classes = payload.classes.join(', ');

      try {
        const response = await fetch(`${API_BASE_URL}/api/schools/${schoolId}/complete-profile`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        
        if (response.ok) {
          alert('Profile completed successfully!');
          onComplete && onComplete();
        } else {
          alert(`Error: ${data.error || data.message || 'Failed to complete profile'}`);
        }
      } catch (error) {
        console.error('Error completing profile:', error);
        alert('Network error. Is the backend server running?');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    currentStep,
    totalSteps,
    formData,
    errors,
    touched,
    submitted,
    showPassword,
    isSubmitting,
    setShowPassword,
    handleChange,
    handleBlur,
    handleNext,
    handlePrev,
    handleSubmit
  };
}
