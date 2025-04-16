export const dishes = [
    {
      id: "dish1",
      image: "/Frame 45.png",
      category: "Breakfast Food",
      rating: 5,
      price: 230,
      isBestSeller: true
    },
    {
      id: "dish2",
      image: "/Frame 45 (1).png",
      category: "Healthy Breakfast",
      rating: 5,
      price: 230
    },
    {
        id: "dish3",
        image: "/Frame 45 (2).png",
        category: "Breakfast Food",
        rating: 5,
        price: 230
      },
      {
        id: "dish4",
        image: "/Frame 45 (3).png",
        category: "Breakfast Food",
        rating: 5,
        price: 230
      },
      {
        id: "dish5",
        image: "/Frame 45 (4).png",
        category: "Breakfast Food",
        rating: 5,
        price: 230
      },
      {
        id: "dish6",
        image: "/Frame 45 (5).png",
        category: "Breakfast Food",
        rating: 5,
        price: 230
      }
  ];
  
  export const features = [
    {
      icon: "/quality-badge.png",
      title: "Quality Food",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text",
      ctaText: "Learn More",
      ctaLink: "/quality"
    },
    {
        icon: "/fast-delivery.png",
        title: "Fast Delivery",
        description: "We ensure your food arrives fresh and fast at your doorstep",
        ctaText: "Learn More",
        ctaLink: "/delivery",
        ctaColor: "text-red-500"
      },
      {
        icon: "/payment.png",
        title: "Secure Payment",
        description: "Your payments are encrypted and safe with us",
        ctaText: "Learn More",
        ctaLink: "/payment",
        ctaColor: "text-red-500"
      },
      {
        icon: "/mobile-order.png",
        title: "Mobile Order",
        description: "Order from your phone anytime, anywhere",
        ctaText: "Learn More",
        ctaLink: "/mobile",
        ctaColor: "text-red-500"
      }
  ];
  
  export const testimonials = [
    {
      id: "1",
      content: "The food was absolutely delicious... The staff was incredibly friendly and welcoming.",
      author: {
        name: "Tayyab Sohail",
        title: "UX/UI Designer",
        avatar: "/images (12).jpg"
      }
    },
    {
        id: "2",
        content: "What an incredible dining experience!... Every dish looked like a work of art and tasted even better.",
        author: {
          name: "Johnson",
          title: "Food Blogger",
          avatar: "/images (13).jpg"
        }
      },
      {
        id: "3",
        content: "Your restaurant went above and beyond to accommodate my needs... Thank you for making me feel valued!",
        author: {
          name: "Michael Chen",
          title: "Nutrition Coach",
          avatar: "/images (14).jpg"
        }
      }
  ];
  
  export const whyChooseUs = [
    {
      icon: "/delivery-bike.png",
      title: "Convenient and Reliable",
      description: "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free."
    },
    {
      icon: "/menu.png",
      title: "Variety of Options",
      description: "From hearty meats to light snacks, we offer a wide range of options to suit every taste and craving."
    },
    {
      icon: "/burger.png",
      title: "Eat Burger",
      description: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience."
    }
  ];
  
  export const footerLinks = [
    {
      title: "Product & Service",
      links: [
        { href: "/products", label: "Products" },
        { href: "/services", label: "Services" },
        { href: "/appliances", label: "Appliances" },
        { href: "/storage", label: "Storage", isNew: true },
        { href: "/lifestyle", label: "Lifestyle", isExternal: true }
      ]
    },
    {
      title: "Shop Now",
      links: [
        { href: "/offers", label: "Offers" },
        { href: "/promos", label: "Promos" },
        { href: "/shop/faq", label: "Online Shop FAQ" },
        { href: "/business", label: "Business Offer", isNew: true },
        { href: "/student", label: "Student Offer", isExternal: true }
      ]
    },
    {
      title: "Support",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/email-support", label: "Email Support", isExternal: true },
        { href: "/live-chat", label: "Live Chat", isExternal: true },
        { href: "/phone-support", label: "Phone Support" },
        { href: "/community", label: "Community", isExternal: true }
      ]
    },
    {
        title: "Account",
        links: [
            { href: "/my-products", label: "My Products" },
            { href: "/orders", label: "Orders" },
            { href: "/wishlist", label: "Wishlist" },
            { href: "/service", label: "Service", isNew: true },
            { href: "/rewards", label: "Rewards", isExternal: true }
        ]
      },
    {
     title: "About",
     links: [
        { href: "/company", label: "Company Info" },
        { href: "/brand", label: "Brand Guidelines" },
        { href: "/careers", label: "Careers" },
        { href: "/investors", label: "Investors", isNew: true, isExternal: true },
        { href: "/about-us", label: "About Us", isExternal: true }
      ]
    },
  ];