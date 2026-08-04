export const INGREDIENT_ICON_MAP = {
  "Sweet Corn": "🌽", "Corn": "🌽", "Cheese": "🧀", "Mozzarella": "🧀", "Paneer": "🧀",
  "Capsicum": "🫑", "Bell Pepper": "🫑", "Fresh Basil": "🌿", "Basil": "🌿", "Mint": "🌿",
  "Onion": "🧅", "Garlic": "🧄", "Tomato": "🍅", "Mushroom": "🍄", "Chilli": "🌶️",
  "Spice": "🌶️", "Saffron": "🌸", "Cashew": "🥜", "Peanut": "🥜", "Dry Fruits": "🌰",
  "Milk": "🥛", "Butter": "🧈", "Chocolate": "🍫", "Cherry": "🍒", "Pineapple": "🍍",
  "Strawberry": "🍓", "Mango": "🥭", "Lemon": "🍋", "Apple": "🍎"
};

export const getIngredientIcon = (name) => {
  for (const key in INGREDIENT_ICON_MAP) {
    if (name.toLowerCase().includes(key.toLowerCase())) {
      return INGREDIENT_ICON_MAP[key];
    }
  }
  return "🍴";
};

export const MENU = [
  {
    title: "Pizza", sub: "Small / Large", emoji: "🍕",
    items: [
      { name: "Sweetcorn Pizza", price: "₹80 / ₹130", desc: "Fresh sweetcorn & cheese", imageUrl: "img/sweetcornpizza.jpg", ingredients: ["Sweet Corn", "Cheese", "Capsicum", "Fresh Basil"] },
      { name: "Vegetable Pizza", price: "₹80 / ₹130", desc: "Veggies with golden mozzarella", imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", ingredients: ["Capsicum", "Onion", "Tomato", "Mozzarella"] },
      { name: "Paneer Pizza", price: "₹100 / ₹150", desc: "Spicy paneer", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Paneer", "Capsicum", "Cheese", "Chilli"] },
      { name: "Mushroom Pizza", price: "₹120 / ₹180", desc: "Cheesy mushrooms", imageUrl: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400&q=80", ingredients: ["Mushroom", "Cheese", "Garlic", "Fresh Basil"] }
    ]
  },
  {
    title: "Chowmein", sub: "Half / Full", emoji: "🍜",
    items: [
      { name: "Veg Chowmein", price: "₹35 / ₹70", desc: "Classic street-style noodles", imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80", tags: ['bestseller'], ingredients: ["Capsicum", "Onion", "Garlic", "Spice"] },
      { name: "Paneer Chowmein", price: "₹60 / ₹100", desc: "Noodles tossed with paneer", imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80", ingredients: ["Paneer", "Capsicum", "Onion", "Garlic"] },
      { name: "Special Chowmein", price: "₹120", desc: "Chef's special with veggies", imageUrl: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Mushroom", "Paneer", "Capsicum", "Fresh Basil"] },
      { name: "Hakka Noodles", price: "₹180", desc: "Indo-Chinese style noodles", imageUrl: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80", ingredients: ["Capsicum", "Onion", "Garlic", "Chilli"] },
      { name: "Singapuri Noodles", price: "₹180", desc: "Spicy Singapore style noodles", imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80", ingredients: ["Chilli", "Capsicum", "Garlic", "Spice"] }
    ]
  },
  {
    title: "Dosa", sub: "South Indian", emoji: "🥞",
    items: [
      { name: "Onion Dosa", price: "₹70", desc: "Crispy dosa with onions", imageUrl: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80", ingredients: ["Onion", "Butter", "Spice"] },
      { name: "Masala Dosa", price: "₹80", desc: "Stuffed with spiced potato", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80", tags: ['bestseller'], ingredients: ["Onion", "Butter", "Spice", "Mustard"] },
      { name: "Special Dosa", price: "₹120", desc: "Premium chef's secret stuffing", imageUrl: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&q=80", ingredients: ["Paneer", "Butter", "Cashew", "Spice"] },
      { name: "Paneer Dosa", price: "₹140", desc: "Stuffed with paneer bhurji", imageUrl: "https://images.unsplash.com/photo-1610192244261-3517640d2fe8?w=400&q=80", ingredients: ["Paneer", "Onion", "Butter", "Spice"] },
      { name: "Uttapam", price: "₹180", desc: "Thick pancake with veggies", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", ingredients: ["Tomato", "Onion", "Capsicum", "Butter"] },
      { name: "Cheese Uttapam", price: "₹200", desc: "Loaded with melted cheese", imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80", ingredients: ["Cheese", "Tomato", "Onion", "Butter"] },
      { name: "Shahi Dosa", price: "₹200", desc: "Cashew & dry fruit filling", imageUrl: "https://images.unsplash.com/photo-1668236203588-4444983a48e7?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Cashew", "Dry Fruits", "Paneer", "Butter"] }
    ]
  },
  {
    title: "Chilli Manchurian", sub: "Half / Full", emoji: "🌶️",
    items: [
      { name: "Potato Chilli", price: "₹60 / ₹100", desc: "Crispy potatoes in chilli sauce", imageUrl: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80", ingredients: ["Chilli", "Garlic", "Capsicum", "Onion"] },
      { name: "Veg Manchurian", price: "₹70 / ₹120", desc: "Classic Manchurian gravy", imageUrl: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80", tags: ['bestseller'], ingredients: ["Garlic", "Onion", "Chilli", "Capsicum"] },
      { name: "Paneer Chilli", price: "₹90 / ₹170", desc: "Paneer in hot chilli-garlic", imageUrl: "https://images.unsplash.com/photo-1645177628172-a6b1e490b4a0?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Paneer", "Chilli", "Garlic", "Capsicum"] },
      { name: "Mushroom Chilli", price: "₹200", desc: "Mushrooms with bell peppers", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80", ingredients: ["Mushroom", "Bell Pepper", "Chilli", "Garlic"] }
    ]
  },
  {
    title: "Rice", sub: "Fried Rice", emoji: "🍚",
    items: [
      { name: "Veg Fried Rice", price: "₹60", desc: "Fresh fried rice", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80", ingredients: ["Capsicum", "Onion", "Garlic"] },
      { name: "Paneer Fried Rice", price: "₹80", desc: "Aromatic rice with paneer", imageUrl: "https://images.unsplash.com/photo-1536304993881-ff86e0c9b0b4?w=400&q=80", ingredients: ["Paneer", "Capsicum", "Garlic", "Spice"] },
      { name: "Combo Rice", price: "₹110", desc: "Rice with Manchurian combo", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80", tags: ['bestseller'], ingredients: ["Garlic", "Capsicum", "Chilli", "Onion"] }
    ]
  },
  {
    title: "Rolls", sub: "Street Style", emoji: "🌯",
    items: [
      { name: "Veg Roll", price: "₹40", desc: "Paratha roll with veggies", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80", ingredients: ["Capsicum", "Onion", "Butter"] },
      { name: "Paneer Roll", price: "₹50", desc: "Paneer tikka in paratha", imageUrl: "https://images.unspllash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80", tags: ['bestseller'], ingredients: ["Paneer", "Onion", "Chilli", "Mint"] },
      { name: "Mushroom Roll", price: "₹70", desc: "Spiced mushroom in crispy roll", imageUrl: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80", ingredients: ["Mushroom", "Garlic", "Butter", "Spice"] },
      { name: "Veg Crunchy Roll", price: "₹60", desc: "Crunchy filling with chutney", imageUrl: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80", ingredients: ["Mint", "Onion", "Capsicum"] }
    ]
  },
  {
    title: "Sandwich", sub: "Quick Bites", emoji: "🥪",
    items: [
      { name: "Vegetable Sandwich", price: "₹60", desc: "Veggies on toasted bread", imageUrl: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80", ingredients: ["Tomato", "Onion", "Capsicum", "Butter"] },
      { name: "Corn Sandwich", price: "₹80", desc: "Sweet corn & cream cheese", imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80", ingredients: ["Sweet Corn", "Cheese", "Butter"] },
      { name: "Paneer Sandwich", price: "₹80", desc: "Grilled paneer with mint chutney", imageUrl: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400&q=80", tags: ['bestseller'], ingredients: ["Paneer", "Mint", "Butter"] },
      { name: "Pizza Sandwich", price: "₹100", desc: "Pizza-style filling in sandwich", imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80", ingredients: ["Cheese", "Capsicum", "Tomato", "Fresh Basil"] },
      { name: "Mushroom Sandwich", price: "₹100", desc: "Mushrooms with garlic butter", imageUrl: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&q=80", ingredients: ["Mushroom", "Garlic", "Butter"] }
    ]
  },
  {
    title: "Burger", sub: "Fast Food", emoji: "🍔",
    items: [
      { name: "Tikki Burger", price: "₹30", desc: "Classic aloo tikki patty", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", ingredients: ["Onion", "Spice", "Butter"] },
      { name: "Paneer Burger", price: "₹50", desc: "Juicy paneer patty", imageUrl: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80", tags: ['bestseller'], ingredients: ["Paneer", "Cheese", "Onion", "Butter"] },
      { name: "Sandwich Burger", price: "₹40", desc: "Burger meets sandwich", imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80", ingredients: ["Tomato", "Onion", "Butter"] },
      { name: "Pizza Style Burger", price: "₹50", desc: "Pizza sauce & cheese", imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80", ingredients: ["Cheese", "Fresh Basil", "Tomato"] },
      { name: "Paneer Tikki Burger", price: "₹50", desc: "Spiced paneer tikki", imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", ingredients: ["Paneer", "Spice", "Onion"] },
      { name: "Veg Burger", price: "₹70", desc: "Veggie patty with lettuce", imageUrl: "https://images.unsplash.com/photo-1585190411866-9e83e4f67e7e?w=400&q=80", ingredients: ["Onion", "Tomato", "Butter"] },
      { name: "Double Veg Burger", price: "₹99", desc: "Double patty, double indulgence", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Cheese", "Onion", "Tomato", "Butter"] }
    ]
  },
  {
    title: "Snacks", sub: "Lollipop & Pakoda", emoji: "🍟",
    items: [
      { name: "Paneer Pakoda", price: "₹80", desc: "Fried paneer in spiced batter", imageUrl: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80", ingredients: ["Paneer", "Spice", "Chilli"] },
      { name: "Paneer Lollipop (6pcs)", price: "₹200", desc: "Crispy paneer on skewers", imageUrl: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Paneer", "Garlic", "Spice"] },
      { name: "Veg Pakoda", price: "₹60", desc: "Crispy mixed vegetable fritters", imageUrl: "https://images.unsplash.com/photo-1626776876729-bab43bde8290?w=400&q=80", ingredients: ["Onion", "Chilli", "Spice"] },
      { name: "Onion Pakoda", price: "₹50", desc: "Spiced crispy onion rings", imageUrl: "https://images.unsplash.com/photo-1626776876729-bab43bde8290?w=400&q=80", tags: ['bestseller'], ingredients: ["Onion", "Spice", "Chilli"] },
      { name: "French Fries", price: "₹70", desc: "Classic salted potato fries", imageUrl: "https://images.unsplash.com/photo-1562059390-d71548de2201?w=400&q=80" },
      { name: "Cheese Fries", price: "₹100", desc: "Fries loaded with melted cheese", imageUrl: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=400&q=80", ingredients: ["Cheese"] },
      { name: "Masala Fries", price: "₹90", desc: "Spicy Indian style potato fries", imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c9714c53?w=400&q=80", ingredients: ["Spice", "Chilli"] },
      { name: "Veg Momos", price: "₹60", desc: "Steamed vegetable stuffed dumplings", imageUrl: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&q=80", tags: ['bestseller'], ingredients: ["Onion", "Garlic", "Chilli"] },
      { name: "Fried Momos", price: "₹80", desc: "Crispy fried vegetable dumplings", imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c9714c53?w=400&q=80", ingredients: ["Onion", "Garlic", "Chilli"] },
      { name: "Spring Roll", price: "₹90", desc: "Crispy rolls stuffed with veggies", imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&q=80", ingredients: ["Capsicum", "Onion", "Garlic"] }
    ]
  },
  {
    title: "Sweets", sub: "Traditional Indian", emoji: "🍬",
    items: [
      { name: "Gulab Jamun", price: "₹20", desc: "Soft milk dough in syrup (1 pc)", imageUrl: "https://images.unsplash.com/photo-1557434444-245ed7e793ea?w=400&q=80", tags: ['bestseller'], ingredients: ["Milk"] },
      { name: "Rasgulla", price: "₹20", desc: "Spongy cottage cheese balls (1 pc)", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80", ingredients: ["Milk"] },
      { name: "Rajbhog", price: "₹30", desc: "Premium saffron cottage cheese (1 pc)", imageUrl: "https://images.unsplash.com/photo-1605197175225-b827e693245c?w=400&q=80", ingredients: ["Saffron", "Milk", "Dry Fruits"] },
      { name: "Rasmalai", price: "₹40", desc: "Cottage cheese in sweetened milk (1 pc)", imageUrl: "https://images.unsplash.com/photo-1621236894042-4916a445dbe7?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Saffron", "Milk", "Pistachio"] },
      { name: "Cham Cham", price: "₹25", desc: "Traditional sweet Bengali delicacy (1 pc)", imageUrl: "https://images.unsplash.com/photo-1519869380628-ba459a1f28bc?w=400&q=80", ingredients: ["Milk"] },
      { name: "Kala Jamun", price: "₹25", desc: "Dark roasted sweet milk dumplings (1 pc)", imageUrl: "https://images.unsplash.com/photo-1557434444-245ed7e793ea?w=400&q=80", ingredients: ["Milk"] },
      { name: "Milk Cake", price: "₹200", desc: "Rich condensed milk fudge (250 g)", imageUrl: "https://images.unsplash.com/photo-1621236894042-4916a445dbe7?w=400&q=80", ingredients: ["Milk"] },
      { name: "Kalakand", price: "₹210", desc: "Soft milk and cheese fudge (250 g)", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80", ingredients: ["Milk"] },
      { name: "Kaju Katli", price: "₹800", desc: "Premium cashew nut fudge (1 kg)", imageUrl: "https://images.unsplash.com/photo-1519869380628-ba459a1f28bc?w=400&q=80", tags: ['bestseller'], ingredients: ["Cashew"] },
      { name: "Besan Laddu", price: "₹250", desc: "Roasted gram flour sweet balls (1 kg)", imageUrl: "https://images.unsplash.com/photo-1605197175225-b827e693245c?w=400&q=80", ingredients: ["Gram Flour", "Butter"] },
      { name: "Motichoor Laddu", price: "₹300", desc: "Fine sweet gram flour pearls (1 kg)", imageUrl: "https://images.unsplash.com/photo-1605197175225-b827e693245c?w=400&q=80", ingredients: ["Gram Flour", "Butter"] },
      { name: "Peda", price: "₹350", desc: "Soft traditional milk fudge (1 kg)", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80", ingredients: ["Milk"] },
      { name: "Barfi", price: "₹350", desc: "Classic Indian sweet milk squares (1 kg)", imageUrl: "https://images.unsplash.com/photo-1621236894042-4916a445dbe7?w=400&q=80", ingredients: ["Milk"] },
      { name: "Soan Papdi", price: "₹200", desc: "Flaky sweet gram flour dessert (250 g)", imageUrl: "https://images.unsplash.com/photo-1519869380628-ba459a1f28bc?w=400&q=80", ingredients: ["Gram Flour", "Butter"] },
      { name: "Balushahi", price: "₹280", desc: "Flaky sweet pastry doughnuts (1 kg)", imageUrl: "https://images.unsplash.com/photo-1557434444-245ed7e793ea?w=400&q=80", ingredients: ["Butter"] },
      { name: "Ghewar", price: "₹500", desc: "Traditional Rajasthani disc sweet (1 kg)", imageUrl: "https://images.unsplash.com/photo-1605197175225-b827e693245c?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Butter", "Milk", "Dry Fruits"] },
      { name: "Imarti", price: "₹300", desc: "Flower-shaped lentil flour sweet (1 kg)", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80" },
      { name: "Jalebi", price: "₹200", desc: "Crispy deep-fried sweet spirals (1 kg)", imageUrl: "https://images.unsplash.com/photo-1621236894042-4916a445dbe7?w=400&q=80" }
    ]
  },
  {
    title: "Cakes", sub: "Fresh Baked", emoji: "🎂",
    items: [
      { name: "Chocolate Cake", price: "₹350", desc: "Rich chocolate layer cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80", tags: ['bestseller'], ingredients: ["Chocolate", "Milk", "Butter"] },
      { name: "Black Forest", price: "₹300", desc: "Chocolate cherry cream cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1588195538320-064908f57348?w=400&q=80", ingredients: ["Chocolate", "Cherry", "Milk"] },
      { name: "White Forest", price: "₹320", desc: "Vanilla cherry cream cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80", ingredients: ["Cherry", "Milk"] },
      { name: "Butterscotch", price: "₹350", desc: "Caramelized butterscotch cream cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80", ingredients: ["Butter", "Milk"] },
      { name: "Pineapple", price: "₹300", desc: "Fresh pineapple cream cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1588195538320-064908f57348?w=400&q=80", ingredients: ["Pineapple", "Milk"] },
      { name: "Vanilla", price: "₹250", desc: "Classic vanilla sponge cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80", ingredients: ["Milk", "Butter"] },
      { name: "Red Velvet", price: "₹450", desc: "Rich crimson layer cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Cheese", "Milk", "Butter"] },
      { name: "Fruit Cake", price: "₹400", desc: "Fresh mixed fruit cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1588195538320-064908f57348?w=400&q=80", ingredients: ["Mango", "Apple", "Milk"] },
      { name: "Truffle Cake", price: "₹500", desc: "Dense chocolate truffle cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1535141192574-5d48937f6104?w=400&q=80", ingredients: ["Chocolate", "Butter", "Milk"] },
      { name: "Photo Cake", price: "₹600", desc: "Customizable printed photo cake (500 g)", imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" }
    ]
  },
  {
    title: "Bakery", sub: "Daily Essentials", emoji: "🥐",
    items: [
      { name: "Bread", price: "₹40", desc: "Freshly baked white bread (400 g)", imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" },
      { name: "Brown Bread", price: "₹50", desc: "Healthy whole wheat bread (400 g)", imageUrl: "https://images.unsplash.com/photo-1599320677561-bd804b4d825c?w=400&q=80" },
      { name: "Pav", price: "₹30", desc: "Soft Indian bread rolls (6 pcs)", imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" },
      { name: "Bun", price: "₹20", desc: "Sweet and soft round bun (1 pc)", imageUrl: "https://images.unsplash.com/photo-1599320677561-bd804b4d825c?w=400&q=80" },
      { name: "Garlic Bread", price: "₹80", desc: "Buttery toasted garlic bread (150 g)", imageUrl: "https://images.unspllash.com/photo-1573140247632-f8fd74997d5c?w=400&q=80", tags: ['bestseller'], ingredients: ["Garlic", "Butter"] },
      { name: "Toast", price: "₹50", desc: "Crispy baked bread slices (200 g)", imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" },
      { name: "Rusk", price: "₹60", desc: "Crunchy twice-baked tea bread (250 g)", imageUrl: "https://images.unsplash.com/photo-1599320677561-bd804b4d825c?w=400&q=80" },
      { name: "Cookies", price: "₹100", desc: "Classic buttery baked cookies (250 g)", imageUrl: "https://images.unsplash.com/photo-1589367920969-abce89c259f8?w=400&q=80", ingredients: ["Butter"] },
      { name: "Butter Cookies", price: "₹120", desc: "Rich butter flavored cookies (250 g)", imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80", ingredients: ["Butter"] },
      { name: "Jeera Cookies", price: "₹90", desc: "Sweet and salty cumin cookies (250 g)", imageUrl: "https://images.unsplash.com/photo-1589367920969-abce89c259f8?w=400&q=80", ingredients: ["Butter"] },
      { name: "Cup Cake", price: "₹30", desc: "Miniature baked sweet cake (1 pc)", imageUrl: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&q=80", ingredients: ["Butter"] },
      { name: "Muffin", price: "₹40", desc: "Soft and fluffy baked muffin (1 pc)", imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80", ingredients: ["Butter"] },
      { name: "Puff", price: "₹20", desc: "Flaky baked savory pastry (1 pc)", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", ingredients: ["Butter"] },
      { name: "Veg Puff", price: "₹25", desc: "Spiced vegetable filled pastry (1 pc)", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Onion", "Spice", "Butter"] }
    ]
  },
  {
    title: "Cold Drinks", sub: "Chilled Beverages", emoji: "🥤",
    items: [
      { name: "Coca Cola", price: "₹40", desc: "Chilled classic carbonated cola (500 ml)", imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80", tags: ['bestseller'] },
      { name: "Pepsi", price: "₹40", desc: "Refreshing carbonated cola drink (500 ml)", imageUrl: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=80" },
      { name: "Sprite", price: "₹40", desc: "Crisp lemon lime soda (500 ml)", imageUrl: "https://images.unsplash.com/photo-1625772299849-227fb23907c1?w=400&q=80", ingredients: ["Lemon"] },
      { name: "Limca", price: "₹40", desc: "Cloudy lemon flavored soda (500 ml)", imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80", ingredients: ["Lemon"] },
      { name: "Fanta", price: "₹40", desc: "Fruity orange carbonated drink (500 ml)", imageUrl: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=80" },
      { name: "Thums Up", price: "₹40", desc: "Strong Indian carbonated cola (500 ml)", imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80" },
      { name: "Mountain Dew", price: "₹40", desc: "Citrus flavored refreshing soda (500 ml)", imageUrl: "https://images.unsplash.com/photo-1625772299849-227fb23907c1?w=400&q=80", ingredients: ["Lemon"] },
      { name: "Slice", price: "₹45", desc: "Sweet mango fruit drink (500 ml)", imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80", ingredients: ["Mango"] },
      { name: "Maaza", price: "₹45", desc: "Rich and thick mango juice (500 ml)", imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80", ingredients: ["Mango"] },
      { name: "Frooti", price: "₹45", desc: "Classic mango juice drink (500 ml)", imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80", ingredients: ["Mango"] },
      { name: "Appy Fizz", price: "₹40", desc: "Sparkling apple juice drink (250 ml)", imageUrl: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=80", ingredients: ["Apple"] },
      { name: "Red Bull", price: "₹120", desc: "Popular canned energy drink (250 ml)", imageUrl: "https://images.unsplash.com/photo-1625772299849-227fb23907c1?w=400&q=80" },
      { name: "Sting", price: "₹20", desc: "Sweet red energy drink (250 ml)", imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80" },
      { name: "Mineral Water", price: "₹20", desc: "Pure packaged drinking water (1 L)", imageUrl: "https://images.unsplash.com/photo-1523362628745-0c13750d176c?w=400&q=80" }
    ]
  },
  {
    title: "Namkeen", sub: "Savory Bites", emoji: "🥨",
    items: [
      { name: "Aloo Bhujia", price: "₹60", desc: "Spicy potato noodle snack (250 g)", imageUrl: "https://images.unsplash.com/photo-1596662951497-6a7e0e7a8e83?w=400&q=80", tags: ['bestseller'], ingredients: ["Spice", "Chilli"] },
      { name: "Mixture", price: "₹70", desc: "Spicy mixed savory snack (250 g)", imageUrl: "https://images.unsplash.com/photo-1585237894569-8a587d4f9b8c?w=400&q=80", ingredients: ["Peanut", "Spice"] },
      { name: "Sev", price: "₹50", desc: "Crispy chickpea flour noodles (250 g)", imageUrl: "https://images.unsplash.com/photo-1596662951497-6a7e0e7a8e83?w=400&q=80" },
      { name: "Ratlami Sev", price: "₹80", desc: "Spicy thick gram flour noodles (250 g)", imageUrl: "https://images.unsplash.com/photo-1585237894569-8a587d4f9b8c?w=400&q=80", tags: ['chefSpecial'], ingredients: ["Spice", "Chilli"] },
      { name: "Chana Dal", price: "₹60", desc: "Crunchy fried split chickpeas (250 g)", imageUrl: "https://images.unsplash.com/photo-1596662951497-6a7e0e7a8e83?w=400&q=80", ingredients: ["Spice"] },
      { name: "Moong Dal", price: "₹60", desc: "Salty fried yellow lentils (250 g)", imageUrl: "https://images.unsplash.com/photo-1585237894569-8a587d4f9b8c?w=400&q=80" },
      { name: "Salted Peanuts", price: "₹40", desc: "Classic roasted salted peanuts (250 g)", imageUrl: "https://images.unsplash.com/photo-1596662951497-6a7e0e7a8e83?w=400&q=80", ingredients: ["Peanut"] },
      { name: "Masala Peanuts", price: "₹50", desc: "Spicy coated fried peanuts (250 g)", imageUrl: "https://images.unsplash.com/photo-1585237894569-8a587d4f9b8c?w=400&q=80", ingredients: ["Peanut", "Spice", "Chilli"] },
      { name: "Khatta Meetha Mix", price: "₹75", desc: "Sweet and sour snack mix (250 g)", imageUrl: "https://images.unsplash.com/photo-1596662951497-6a7e0e7a8e83?w=400&q=80", ingredients: ["Peanut"] }
    ]
  }
];