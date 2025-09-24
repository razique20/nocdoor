export const servicesData = [
  {
    id: 1,
    name: "Home Cleaning",
    image: "services/cleaning.jpg",
    type: "Cleaning",
    description: "Professional home cleaning service including kitchen, bathroom, and living areas.",
    price: 120, // AED
    duration: "2-3 hours",
    rating: 4.7,
    categories: [
      {
        name: "Full House Cleaning",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "Sparkle Cleaners", place: "Dubai Marina", availability: "Mon-Sat, 9am-6pm" },
          { name: "Shine Home Services", place: "Downtown Dubai", availability: "Mon-Fri, 8am-5pm" }
        ]
      },
      {
        name: "Kitchen & Bathroom",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "CleanPro", place: "Jumeirah", availability: "Tue-Sun, 10am-7pm" },
          { name: "Pristine Homes", place: "Al Barsha", availability: "Mon-Sat, 9am-5pm" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "AC Repair",
    image: "services/ac-repair.webp",
    type: "Maintenance",
    description: "Expert AC maintenance and repair services for all types of air conditioners.",
    price: 200,
    duration: "1-2 hours",
    rating: 4.5,
    categories: [
      {
        name: "Window AC Repair",
        image: "https://images.unsplash.com/photo-1598387840363-6c2f7307b073?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "CoolTech", place: "Dubai Silicon Oasis", availability: "Mon-Fri, 9am-6pm" },
          { name: "AC Masters", place: "Deira", availability: "Mon-Sat, 10am-7pm" }
        ]
      },
      {
        name: "Split AC Repair",
        image: "https://images.unsplash.com/photo-1601758123927-0e9b6c69f7d0?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "ChillFix", place: "Jumeirah", availability: "Tue-Sat, 8am-4pm" },
          { name: "AirCare", place: "Business Bay", availability: "Mon-Sun, 9am-6pm" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Car Wash",
    image: "services/car-wash.jpg",
    type: "Automotive",
    description: "Full-service car cleaning including interior and exterior wash and waxing.",
    price: 80,
    duration: "45 mins - 1 hour",
    rating: 4.8,
    categories: [
      {
        name: "Exterior Wash",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "Shiny Cars", place: "Al Barsha", availability: "Mon-Sat, 8am-8pm" },
          { name: "ProWash", place: "Dubai Marina", availability: "Mon-Sun, 9am-9pm" }
        ]
      },
      {
        name: "Interior Cleaning",
        image: "https://images.unsplash.com/photo-1580584122362-4efde2d8d157?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "CleanRide", place: "Jumeirah", availability: "Tue-Sat, 9am-6pm" },
          { name: "AutoShine", place: "Downtown Dubai", availability: "Mon-Fri, 8am-5pm" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Plumbing Services",
    image: "services/plumbing.jpg",
    type: "Maintenance",
    description: "Professional plumbing services including pipe repair, leak fixing, and installations.",
    price: 150,
    duration: "1-3 hours",
    rating: 4.6,
    categories: [
      {
        name: "Leak Repair",
        image: "https://images.unsplash.com/photo-1598514984002-3e1a36b3e9a8?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "PipeFix", place: "Deira", availability: "Mon-Sat, 9am-6pm" },
          { name: "Rapid Plumbing", place: "Business Bay", availability: "Mon-Fri, 8am-5pm" }
        ]
      },
      {
        name: "Pipe Installation",
        image: "https://images.unsplash.com/photo-1602526213901-0f11033e5b42?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "AquaFlow", place: "Al Quoz", availability: "Tue-Sat, 9am-6pm" },
          { name: "PlumbPro", place: "Jumeirah", availability: "Mon-Sat, 8am-5pm" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Electrician",
    image: "services/electrician.jpg",
    type: "Electrical",
    description: "Electrical repair and installation services for homes and offices.",
    price: 180,
    duration: "1-2 hours",
    rating: 4.7,
    categories: [
      {
        name: "Wiring & Installation",
        image: "https://images.unsplash.com/photo-1581091215368-58bfb3b3be71?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "ElectroFix", place: "Downtown Dubai", availability: "Mon-Fri, 9am-6pm" },
          { name: "PowerHouse", place: "Al Barsha", availability: "Mon-Sat, 8am-5pm" }
        ]
      },
      {
        name: "Appliance Repair",
        image: "https://images.unsplash.com/photo-1601758123927-0e9b6c69f7d0?auto=format&fit=crop&w=200&q=60",
        providers: [
          { name: "QuickFix Electric", place: "Jumeirah", availability: "Tue-Sat, 9am-6pm" },
          { name: "VoltCare", place: "Business Bay", availability: "Mon-Sun, 10am-7pm" }
        ]
      }
    ]
  }
];
