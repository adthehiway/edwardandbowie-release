
export const translations = {
  en: {
    // Navigation
    backToWebsite: "Back to website",
    
    // Hero Section
    movieTitle: "Terrifier 2",
    movieDetails: "1h 46m • Horror, Teen Horror • 2022",
    synopsis: "Resurrected by a sinister entity, Art the Clown returns to Miles County to terrorize a teenage girl and her younger brother on Halloween night.",
    trailer: "TRAILER",
    buyNow: "BUY NOW",
    posters: "Posters",
    actors: "Actors",
    
    // Cast Section
    cast: "Cast",
    
    // CTA Section
    getTickets: "Get Tickets",
    learnMore: "Learn More",
    
    // Cast Members
    castMembers: [
      { name: "Lauren LaVera", character: "Sienna Shaw" },
      { name: "David Howard Thornton", character: "Art the Clown" },
      { name: "Elliott Fullam", character: "Jonathan Shaw" },
      { name: "Sarah Voigt", character: "Barbara Shaw" },
      { name: "Samantha Scaffidi", character: "Victoria Heyes" },
      { name: "Chris Jericho", character: "Burke" },
      { name: "Kailey Hyman", character: "Brooke" },
      { name: "Casey Hartnett", character: "Allie" },
      { name: "Amelie McLain", character: "The Little Pale Girl" },
      { name: "Felissa Rose", character: "The Clown Cafe Host" },
    ]
  },
  hi: {
    // Navigation
    backToWebsite: "वेबसाइट पर वापस जाएं",
    
    // Hero Section
    movieTitle: "टेरिफायर 2",
    movieDetails: "1घ 46मि • डरावनी, किशोर डरावनी • 2022",
    synopsis: "एक भयानक शक्ति द्वारा पुनर्जीवित किया गया, आर्ट द क्लाउन हैलोवीन की रात एक किशोर लड़की और उसके छोटे भाई को डराने के लिए माइल्स काउंटी वापस आता है।",
    trailer: "ट्रेलर",
    buyNow: "अभी खरीदें",
    posters: "पोस्टर",
    actors: "अभिनेता",
    
    // Cast Section
    cast: "कलाकार",
    
    // CTA Section
    getTickets: "टिकट प्राप्त करें",
    learnMore: "और जानें",
    
    // Cast Members
    castMembers: [
      { name: "लॉरेन लावेरा", character: "सिएना शॉ" },
      { name: "डेविड हॉवर्ड थॉर्नटन", character: "आर्ट द क्लाउन" },
      { name: "इलियट फुलम", character: "जोनाथन शॉ" },
      { name: "सारा वॉइग्ट", character: "बारबरा शॉ" },
      { name: "सामंथा स्कैफिडी", character: "विक्टोरिया हेयेस" },
      { name: "क्रिस जेरिको", character: "बर्क" },
      { name: "कैली हाइमन", character: "ब्रुक" },
      { name: "केसी हार्टनेट", character: "एली" },
      { name: "एमेली मैकलेन", character: "छोटी पीली लड़की" },
      { name: "फेलिसा रोज", character: "क्लाउन कैफे होस्ट" },
    ]
  }
};

export type Language = keyof typeof translations;
