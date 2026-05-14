import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Checkbox } from '../components/ui/checkbox';
import { useToast } from '../hooks/use-toast';
import { useEmailJS } from '../hooks/useEmailJS';
import { Loader2, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(15, 'Phone number is too long')
    .regex(/^[+\d\s\-()]+$/, 'Please enter a valid phone number'),
  qualification: z.string().min(1, 'Please select your highest qualification'),
  courses: z.array(z.string()).min(1, 'Please select at least one course'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { sendEmail } = useEmailJS();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      qualification: '',
      courses: [],
      message: '',
    },
  });

  const selectedCourses = watch('courses') || [];

  const qualifications = [
    { value: 'matriculation', label: 'Matriculation' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'graduation', label: 'Graduation' },
    { value: 'dropped', label: 'Dropped' },
  ];

  const courses = [
    'Generative AI',
    'English Spoken',
    'C/C++',
    'Stenography',
    'ADCA',
    'JAVA',
    'Python',
  ];

  const handleCourseChange = (course, checked) => {
    const updatedCourses = checked
      ? [...selectedCourses, course]
      : selectedCourses.filter((c) => c !== course);
    setValue('courses', updatedCourses, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const emailData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      qualification: data.qualification,
      courses: data.courses.join(', '),
      message: data.message,
};

      await sendEmail(emailData);

      setIsSuccess(true);
      toast({
        title: 'Message sent successfully! 🎉',
        description: "We'll get back to you within 24 hours. Check your email for a confirmation.",
      });

      reset();

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Failed to send message',
        description:
          error?.text || error?.message || 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you for reaching out. We've received your message and will contact you soon.
          A confirmation has been sent to your email.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Enter your full name"
          className="mt-1 text-foreground placeholder:text-muted-foreground"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@example.com"
          className="mt-1 text-foreground placeholder:text-muted-foreground"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+91 98765 43210"
          className="mt-1 text-foreground placeholder:text-muted-foreground"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Qualification */}
      <div>
        <Label>Highest Qualification *</Label>
        <RadioGroup
          onValueChange={(value) => setValue('qualification', value, { shouldValidate: true })}
          className="mt-2 space-y-2"
          disabled={isSubmitting}
        >
          {qualifications.map((qual) => (
            <div key={qual.value} className="flex items-center space-x-2">
              <RadioGroupItem value={qual.value} id={qual.value} disabled={isSubmitting} />
              <Label htmlFor={qual.value} className="font-normal cursor-pointer">
                {qual.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors.qualification && (
          <p className="text-sm text-destructive mt-1">{errors.qualification.message}</p>
        )}
      </div>

      {/* Courses */}
      <div>
        <Label>Course(s) You Want to Enroll In *</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {courses.map((course) => (
            <div key={course} className="flex items-center space-x-2">
              <Checkbox
                id={course}
                checked={selectedCourses.includes(course)}
                onCheckedChange={(checked) => handleCourseChange(course, checked)}
                disabled={isSubmitting}
              />
              <Label htmlFor={course} className="font-normal cursor-pointer">
                {course}
              </Label>
            </div>
          ))}
        </div>
        {errors.courses && (
          <p className="text-sm text-destructive mt-1">{errors.courses.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us about your learning goals or any questions you have..."
          rows={5}
          className="mt-1 text-foreground placeholder:text-muted-foreground resize-none"
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full transition-all duration-200 active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending your message...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
};

export default ContactForm;