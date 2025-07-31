export type CompanyInformationType = {
  doctorFullName: string;
  aboutDoctor: string[];
  companyName: string;
  contactInfo: {
    phoneNumber: string;
    location: { address: string; lat: number; lng: number };
    email: string;
    socialMedia: {
      facebook?: {
        username: string;
        link: string;
      };
      instagram?: {
        username: string;
        link: string;
      };
      youtube?: {
        username: string;
        link: string;
      };
    };
  };
  businessHours: {
    day: string;
    time: string;
  }[];
  services: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
  educationAndCertifications: {
    school: string;
    certifications: string[];
  }[];
  testimonials: {
    profilePictureUrl: string;
    review: string;
    name: string;
  }[];
  reasonsToChooseUs: {
    title: string;
    description: string;
  }[];
  callToAction: string;
  accentColor: string;
  hero: {
    title: string;
    subtitle: string;
    callToAction: string;
  };
  about: {
    title: string;
    subtitle: string;
    callToAction: string;
  };
  servicesSection: {
    title: string;
  };
  footer: {
    description: string;
  };
};

// const companyInformation: CompanyInformationType = {
//   doctorFullName: "Dr. Adrian Cole, DC, MS, CCSP",
//   aboutDoctor: [
//     "Originally from Santa Fe, New Mexico, Dr. Adrian Cole has always been passionate about movement, healing, and human performance. Growing up as a competitive dancer and track athlete, Adrian developed a keen interest in the mechanics of the body and injury prevention. She pursued her undergraduate degree in Exercise Science at the University of New Mexico, where she also worked as a student athletic trainer supporting the university's women's volleyball and soccer teams.",
//     "During her final year, Adrian completed a research project on biomechanical asymmetries in adolescent athletes, which led to her co-authoring a paper in the Journal of Athletic Training & Rehabilitation: Cole, E., Tran, K., & Daniels, R. (2020). Functional Movement Screening as a Predictor of Injury in Female Collegiate Athletes. JATR, 12(1), 45-52.",
//     "Her early exposure to sports injuries—and the remarkable care she received from chiropractors during her recovery from a severe ankle sprain—sparked a lifelong commitment to chiropractic care. Adrian went on to earn her Doctorate of Chiropractic and Master of Science in Sports Medicine from Southern California University of Health Sciences. She is also a Certified Chiropractic Sports Physician® (CCSP®), with extensive experience treating high school, collegiate, and professional athletes across multiple disciplines.",
//     "At CoreMotion Chiropractic, Dr. Adrian specializes in helping active individuals overcome pain and restore functional movement through a combination of soft tissue therapy, spinal manipulation, and corrective exercise. Her goal is always to provide personalized care that supports long-term health and peak performance. All of her sessions are one-on-one, allowing for focused, comprehensive treatment tailored to each patient's needs.",
//     "Outside the clinic, Dr. Adrian enjoys trail running, yoga, and spending time with her husband Mateo and their rescue dog Luna. She's also a big fan of spicy food and can often be found testing out new recipes or hiking the Sangre de Cristo Mountains.",
//   ],
//   companyName: "ChiroCare",
//   contactInfo: {
//     phoneNumber: "+1-234-567-890",
//     location: {
//       address: "1 Straight road, SF, CA.",
//       lat: 37.7749,
//       lng: -122.4194,
//     },
//     email: "hello@chirocare.com",
//     socialMedia: {
//       facebook: {
//         username: "chirocare",
//         link: "https://facebook.com/chirocare",
//       },
//       instagram: {
//         username: "chirocare",
//         link: "https://instagram.com/chirocare",
//       },
//       youtube: {
//         username: "chirocare",
//         link: "https://youtube.com/chirocare",
//       },
//     },
//   },
//   businessHours: [
//     {
//       day: "Monday - Friday",
//       time: "8:00am - 5:00pm",
//     },
//     {
//       day: "Saturday",
//       time: "9:00am - 3:00pm",
//     },
//   ],
//   services: [
//     {
//       imageUrl: "/spinal-adjustment.jpg",
//       title: "Spinal Adjustments",
//       description:
//         "Our spinal adjustment therapy focuses on realigning the vertebrae to relieve nerve pressure, improve joint mobility, and support your body's natural healing abilities. This technique is ideal for those experiencing chronic pain, stiffness, or postural imbalances.",
//     },
//     {
//       imageUrl: "/posture-correction.jpg",
//       title: "Posture Correction",
//       description:
//         "Through a combination of manual techniques, therapeutic exercises, and lifestyle guidance, we help you correct poor posture habits. This reduces strain on your spine and muscles, enhances breathing, and prevents long-term discomfort or injury.",
//     },
//     {
//       imageUrl: "/sports-injury.jpg",
//       title: "Sports Injury Rehab",
//       description:
//         "We provide tailored rehabilitation programs designed for athletes and active individuals recovering from strains, sprains, and overuse injuries. Our approach promotes faster recovery, enhances performance, and reduces the risk of future injury through strength, mobility, and balance training.",
//     },
//     {
//       imageUrl: "/neck-and-back-pain.jpg",
//       title: "Neck & Back Pain Relief",
//       description:
//         "Whether you're dealing with a pinched nerve, herniated disc, or muscular tension, our neck and back pain treatments use a combination of chiropractic adjustments, soft tissue therapy, and ergonomic advice to restore comfort and function.",
//     },
//     {
//       imageUrl: "/headach-and-migrane-management.jpg",
//       title: "Headache & Migraine Management",
//       description:
//         "We address the root causes of tension headaches and migraines using non-invasive techniques such as spinal adjustments, trigger point therapy, and stress reduction strategies, helping you achieve long-term relief without reliance on medication.",
//     },
//   ],
//   educationAndCertifications: [
//     {
//       school: "University of Western States",
//       certifications: [
//         "Doctor of Chiropractic, magna cum laude",
//         "Master of Science in Sports Medicine, magna cum laude",
//         "Bachelor of Science in Human Biology",
//       ],
//     },
//     {
//       school: "Wilfrid Laurier University",
//       certifications: ["Bachelor of Science in Kinesiology"],
//     },
//     {
//       school: "American Chiropractic Board of Sports Physicians",
//       certifications: ["Certified Chiropractic Sports Physician (CCSP)"],
//     },
//     {
//       school: "Dynamic Neuromuscular Stabilization (DNS)",
//       certifications: ["Weightlifting 1", "Exercise 1"],
//     },
//     {
//       school: "First Principles of Movement",
//       certifications: ["Member"],
//     },
//   ],

//   callToAction: "Book an Appointment",
//   accentColor: "#0466c8",

//   //homepage

//   hero: {
//     title: "Relief Starts Here. Restore Comfort, Mobility, and Balance",
//     subtitle:
//       "Experience expert chiropractic care tailored to your body's unique needs. Whether you're recovering from injury, managing chronic pain, or simply aiming for a healthier, more active lifestyle.",
//     callToAction: "Book an Appointment",
//   },

//   about: {
//     title: "Your Health, Our Priority",
//     subtitle: `At ChiroCare, we focus on personalized chiropractic solutions that relieve pain, improve mobility, and restore your overall well-being. Discover how we&apos;ve helped hundreds feel better, move better, and live better.`,
//     callToAction: "",
//   },

//   servicesSection: {
//     title: "Experienced in different types of therapy",
//   },

//   testimonials: [
//     {
//       profilePictureUrl: "/profile-picture-2.jpg",
//       review:
//         "After just a few sessions, my lower back pain is almost completely gone. Dr. Kate truly knows what she's doing.",
//       name: "Michelle O.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-1.jpg",
//       review:
//         "I came in barely able to turn my neck. Now I feel like a new person. Highly recommend this clinic!",
//       name: "Derrick L.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-3.jpg",
//       review:
//         "Warm staff, clean office, and Dr. Josh is incredibly skilled. My posture has improved noticeably.",
//       name: "Sandra T.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-1.jpg",
//       review:
//         "Was skeptical at first, but this has helped my migraines more than anything else I've tried.",
//       name: "Brian C.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-2.jpg",
//       review:
//         "I appreciate how much time they took to explain everything. Very personalized and professional care.",
//       name: "Elena P.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-3.jpg",
//       review:
//         "They got me walking upright again after a sports injury. Forever grateful for their care and patience.",
//       name: "Mark A.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-1.jpg",
//       review:
//         "Every visit leaves me feeling better and better. It's like a reset button for my body each week.",
//       name: "Tina W.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-2.jpg",
//       review:
//         "I've tried other chiropractors, but this team is the real deal. They genuinely care about your health.",
//       name: "Jason M.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-3.jpg",
//       review:
//         "I used to wake up with back stiffness every day. That's completely gone now thanks to Dr. Lisa!",
//       name: "Heather S.",
//     },
//     {
//       profilePictureUrl: "/profile-picture-1.jpg",
//       review:
//         "Professional, friendly, and effective. I'm finally pain-free after years of discomfort.",
//       name: "David R.",
//     },
//   ],
//   reasonsToChooseUs: [
//     {
//       title: "Experienced Professionals",
//       description:
//         "Our licensed chiropractors bring years of hands-on experience and specialized care to every session.",
//     },
//     {
//       title: "Personalized Treatment Plans",
//       description:
//         "We tailor each treatment to your specific needs, ensuring the most effective path to recovery.",
//     },
//     {
//       title: "Modern Techniques & Equipment",
//       description:
//         "We use up-to-date chiropractic methods and advanced tools to deliver safe, efficient care.",
//     },
//     {
//       title: "Patient-Centered Approach",
//       description:
//         "Your comfort, goals, and long-term health guide everything we do from consultation to care.",
//     },
//     {
//       title: "Trusted by the Community",
//       description:
//         "Hundreds of satisfied patients rely on us for pain relief, better posture, and healthier living.",
//     },
//     {
//       title: "Convenient Scheduling",
//       description:
//         "We offer flexible appointment times and easy online booking to fit your busy lifestyle.",
//     },
//   ],

//   //footer
//   footer: {
//     description:
//       "ChiroCare provides personalized chiropractic care focused on relieving pain, restoring mobility, and improving overall wellness.",
//   },
// };

export const companyInformation: CompanyInformationType = {
  doctorFullName: "Dr. Jordan, DC, MS, CCSP",
  aboutDoctor: [
    "Dr. Jordan is a highly respected chiropractor based in Victoria, British Columbia.",
    "With a passion for optimizing human movement and performance, he brings years of elite education and clinical experience to his patients.",
    "He earned his Doctor of Chiropractic and Master of Science in Sports Medicine from Harvard University, graduating summa cum laude.",
    "Prior to that, he completed his undergraduate degree in Human Biology at Yale University with distinction.",
    "Dr. Jordan has published research in the Journal of Chiropractic Medicine and is a regular contributor to international conferences on rehabilitation and sports injury prevention.",
    "He is also a Certified Chiropractic Sports Physician (CCSP) and an active member of the American Chiropractic Association.",
    "Known for his personalized, evidence-based care, Dr. Jordan specializes in treating athletes, professionals, and active individuals who want to overcome pain and move better.",
    "When he's not in the clinic, you'll find him hiking the West Coast Trail, exploring local cafés with his wife, or training for his next triathlon.",
  ],
  companyName: "VitalMotion Chiropractic",
  contactInfo: {
    phoneNumber: "(250) 123-4567",
    email: "info@vitalmotion.ca",
    location: {
      address: "123 Wellness Way, Victoria, BC",
      lat: 48.4285, // <- UPDATE with actual latitude
      lng: -123.365, // <- UPDATE with actual longitude
    },
    socialMedia: {
      facebook: undefined,
      instagram: undefined,
      youtube: undefined,
    },
  },
  businessHours: [
    { day: "Monday-Friday", time: "8am-6pm" },
    { day: "Saturday", time: "9am-2pm" },
    { day: "Sunday", time: "Closed" },
  ],
  services: [
    {
      title: "Spinal Adjustments",
      description:
        "Restore alignment and relieve pain through targeted manual techniques.",
      imageUrl: "/spinal-adjustment.jpg", // <- Placeholder path
    },
    {
      title: "Active Rehab Programs",
      description:
        "Custom movement plans to rebuild strength, mobility, and confidence after injury.",
      imageUrl: "/posture-correction.jpg",
    },
    {
      title: "Sports Injury Management",
      description:
        "Injury prevention and performance optimization for athletes of all levels.",
      imageUrl: "/sports-injury.jpg",
    },
    {
      title: "Headache & Migraine Relief",
      description:
        "Effective, drug-free treatment strategies tailored to your nervous system.",
      imageUrl: "/headach-and-migrane-management.jpg",
    },
    {
      title: "Posture & Ergonomics Coaching",
      description:
        "Personalized solutions for chronic desk pain and modern-day posture issues.",
      imageUrl: "/neck-and-back-pain.jpg",
    },
  ],
  educationAndCertifications: [
    {
      school: "Harvard University",
      certifications: ["Doctor of Chiropractic", "MSc in Sports Medicine"],
    },
    {
      school: "Yale University",
      certifications: ["BSc in Human Biology"],
    },
    {
      school: "Other",
      certifications: [
        "Certified Chiropractic Sports Physician (CCSP)",
        "Advanced DNS (Dynamic Neuromuscular Stabilization) Trained",
      ],
    },
  ],
  testimonials: [
    {
      name: "Jamie L.",
      review:
        "Dr. Jordan completely changed the way I think about recovery. I'm back to running pain-free!",
      profilePictureUrl: "/profile-picture-2.jpg",
    },
    {
      name: "Sarah D.",
      review:
        "From the first visit, I felt heard and supported. Best chiropractor in the city!",
      profilePictureUrl: "/profile-picture-1.jpg",
    },
    {
      name: "Mike R.",
      review:
        "He's the only one who figured out what was really causing my shoulder pain.",
      profilePictureUrl: "/profile-picture-3.jpg",
    },
  ],
  reasonsToChooseUs: [
    {
      title: "Experienced Professionals",
      description:
        "Our licensed chiropractors bring years of hands-on experience and specialized care to every session.",
    },
    {
      title: "Personalized Treatment Plans",
      description:
        "We tailor each treatment to your specific needs, ensuring the most effective path to recovery.",
    },
    {
      title: "Modern Techniques & Equipment",
      description:
        "We use up-to-date chiropractic methods and advanced tools to deliver safe, efficient care.",
    },
    {
      title: "Patient-Centered Approach",
      description:
        "Your comfort, goals, and long-term health guide everything we do from consultation to care.",
    },
    {
      title: "Trusted by the Community",
      description:
        "Hundreds of satisfied patients rely on us for pain relief, better posture, and healthier living.",
    },
    {
      title: "Convenient Scheduling",
      description:
        "We offer flexible appointment times and easy online booking to fit your busy lifestyle.",
    },
  ],
  callToAction: "Book Your Appointment Today",
  accentColor: "#2C7A7B",
  hero: {
    title: "Move Better. Feel Better. Live Stronger.",
    subtitle:
      "Expert chiropractic care in Victoria to help you get back to doing what you love.",
    callToAction: "Schedule a Visit",
  },
  about: {
    title: "Your Health, Our Priority",
    subtitle:
      "At VitalMotion Chiropractic, we focus on personalized chiropractic solutions that relieve pain, improve mobility, and restore your overall well-being. Discover how we've helped hundreds feel better, move better, and live better.",
    callToAction: "Learn More",
  },
  servicesSection: {
    title: "Experienced in different types of therapy",
  },
  footer: {
    description:
      "VitalMotion Chiropractic provides personalized chiropractic care focused on relieving pain, restoring mobility, and improving overall wellness.",
  },
};

export default companyInformation;
