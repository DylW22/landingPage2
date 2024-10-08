import { ObjectId } from "mongodb";
export interface PhonePlanType {
  _id: ObjectId;
  title: string;
  expiry: string;
  description: string;
  monthlyPrice: string;
  currencyType: string;
  originalPrice: string;
  internetSpeed: string;
  dataLimit: string;
}
//PhonePlan.tsx
export interface PhonePlanProps {
  plan: PhonePlanType;
}

//PhonePlans.tsx
export interface PhonePlansProps {
  plans: PhonePlanType[];
}

//Container.tsx
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

//Menu.tsx
export type NavLinkType = {
  id: number;
  path: string;
  title: string;
};

export interface MenuProps {
  toggleMenu: () => void;
}

//Header.tsx
export interface HeaderProps {
  toggleMenu: () => void;
}

//Button.tsx
export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  mode?: "3d" | "normal";
  type?: "submit" | "button";
}

//api/posts/index.ts
export interface BlogPost {
  _id: ObjectId;
  title: string;
  content: string;
  author: string;
  date: string;
}

//components/plans/index.tsx
export interface PhonePlansProps {
  plans: PhonePlanType[];
}

//api/testimonials/index.tsx
export interface Testimonial {
  name: string;
  description: string;
  imageUrl: string;
  _id: ObjectId;
}

//components/testimonials/Testimonials.tsx
export interface TestimonialsProps {
  testimonials: Testimonial[];
}
//components/testimonials/Testimonial.tsx
export interface TestimonialProps {
  testimonial: Testimonial;
}

//components/contactForm/ContactForm.tsx
export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface ErrorData {
  nameError: boolean;
  emailError: boolean;
  messageError: boolean;
}

//components/contactForm/FormInput.tsx
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mode: "input";
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  mode: "textarea";
}

export type FormInputProps = (InputProps | TextareaProps) & {
  label: string;
  error: string;
};

//components/posts/Post.tsx
export interface PostProps {
  postData: BlogPost;
}

//components/footer/iconRow.tsx
export interface IconType {
  id: number;
  targetUrl: string;
  imageSrc: string;
  alt: string;
  description: string;
}
