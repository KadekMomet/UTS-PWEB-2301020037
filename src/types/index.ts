export interface Dish {
    id: string;
    image: string;
    category: string;
    rating: number;
    price: number;
    isBestSeller?: boolean;
  }
  
  export interface Feature {
    icon: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  }
  
  export interface Testimonial {
    id: string;
    content: string;
    author: {
      name: string;
      title: string;
      avatar: string;
    };
  }
  
  export interface FooterLink {
    href: string;
    label: string;
    isNew?: boolean;
    isExternal?: boolean;
  }
  
  export interface FooterColumn {
    title: string;
    links: FooterLink[];
  }