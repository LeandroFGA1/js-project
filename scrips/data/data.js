const maqueta ={
        title:"",
        author:"",
        paragraph:"",
        image:"",
        type:""
    }
const data =[
    {
        title: "the American Civil War is over",
        author: "John Smith",
        paragraph: "On April 9, 1865, General Robert E. Lee surrendered his forces to General Ulysses S. Grant at Appomattox Court House, marking the end of the American Civil War.",
        type: "Peace"
    },
    {
        title: "Inauguration of the Suez Canal",
        author: "Alice Johnson",
        paragraph: "On November 17, 1869, the Suez Canal, which connects the Mediterranean Sea to the Red Sea, was officially inaugurated, opening new international trade routes.",
        type: "Engineering"
    },
    {
        title: "Discovery of Tutankhamun's Tomb",
        author: "Emily Davis",
        paragraph: "In 1922, British archaeologist Howard Carter discovered the tomb of Pharaoh Tutankhamun in the Valley of the Kings, Egypt, revealing stunning ancient treasures.",
        type: "Archaeology"
    },
    {
        title: "Treaty of Versailles",
        author: "Michael Brown",
        paragraph: "On June 28, 1919, the Treaty of Versailles was signed, officially ending World War I and establishing new borders in Europe.",
        type: "Engineering"
    },
    {
        title: "The Great Depression",
        author: "Eleanor Parker",
        paragraph: "In 1929, the global economy collapsed, ushering in the Great Depression, an economic crisis that affected millions of people worldwide.",
        type: "Economy"
    },
    {
        title: "Independence of India",
        author: "Rajesh Patel",
        paragraph: "In 1947, India achieved independence from British rule, marking the end of the freedom struggle led by Mahatma Gandhi.",
        type: "Politics"
    },
    {
        title: "The Russian Revolution",
        author: "Anastasia Ivanova",
        paragraph: "In 1917, the Russian Revolution led to the overthrow of the Tsarist government and the rise of the communist government led by Vladimir Lenin.",
        type: "Politics"
    },
    {
        title: "First Transatlantic Radio Transmission",
        author: "Thomas Anderson",
        paragraph: "In 1901, Guglielmo Marconi made the first transatlantic radio transmission, marking a milestone in international communications.",
        type: "Technology"
    },
    {
        title: "The Wright Brothers' Flight",
        author: "Katherine Adams",
        paragraph: "In 1903, brothers Orville and Wilbur Wright made the first controlled, powered flight in Kitty Hawk, North Carolina.",
        type: "Technology"
    },
    {
        title: "Completion of the Eiffel Tower",
        author: "Édouard Durand",
        paragraph: "In 1889, the construction of the Eiffel Tower in Paris, France, was completed in commemoration of the Universal Exposition.",
        type: "Engineering"
    },
    {
        title: "Emancipation Proclamation",
        author: "Sarah Walker",
        paragraph: "In 1863, President Abraham Lincoln issued the Emancipation Proclamation, declaring all slaves in Confederate territory to be forever free.",
        type: "Politics"
    },
    {
        title: "Opening of the Brooklyn Bridge",
        author: "John Williams",
        paragraph: "In 1883, the Brooklyn Bridge, one of the world's first suspension bridges, opened, connecting Manhattan and Brooklyn in New York City.",
        type: "Engineering"
    },
    {
        title: "Prohibition Era Begins",
        author: "Alice Thompson",
        paragraph: "In 1920, the 18th Amendment to the U.S. Constitution ushered in the Prohibition era, banning the sale and consumption of alcohol.",
        type: "Politics"
    },
    {
        title: "Women's Suffrage Movement",
        author: "Emily Clark",
        paragraph: "The early 20th century saw significant progress in the women's suffrage movement, with women gaining the right to vote in various countries.",
        type: "Politics"
    },
    {
        title: "World War II Begins",
        author: "James Turner",
        paragraph: "In 1939, World War II commenced with the invasion of Poland by Germany, eventually engulfing many nations in a global conflict.",
        type: "Politics"
    },
    {
        title: "Hindenburg Disaster",
        author: "Thomas Mitchell",
        paragraph: "In 1937, the famous airship LZ 129 Hindenburg caught fire while attempting to dock in Lakehurst, New Jersey, leading to a tragic disaster.",
        type: "Politics"
    },
    {
        title: "First Human on the Moon",
        author: "Neil Armstrong",
        paragraph: "On July 20, 1969, I became the first human to set foot on the Moon during NASA's Apollo 11 mission. I said the famous words, 'That's one small step for [a] man, one giant leap for mankind.'",
        type: "Space"
    },
    {
        title: "Fall of the Berlin Wall",
        author: "Anna Müller",
        paragraph: "On November 9, 1989, the Berlin Wall, which had divided East and West Berlin for nearly 30 years, fell, symbolizing the end of the Cold War.",
        type: "Politics"
    },
    {
        title: "Internet Goes Public",
        author: "David Johnson",
        paragraph: "In 1969, the first message was sent over the ARPANET, the precursor to the internet. It would eventually revolutionize global communication.",
        type: "Technology"
    },
    {
        title: "Apollo 13's Safe Return",
        author: "Susan Adams",
        paragraph: "In April 1970, the Apollo 13 mission suffered an oxygen tank explosion in space. Through incredible teamwork, we safely returned to Earth against the odds.",
        type: "Space"
    },
    {
        title: "End of Apartheid in South Africa",
        author: "Nelson Mandela",
        paragraph: "In 1994, apartheid officially ended in South Africa, and I became the country's first black president, marking a new era of equality and reconciliation.",
        type: "Peace"
    },
    {
        title: "Chernobyl Nuclear Disaster",
        author: "Alexei Petrov",
        paragraph: "On April 26, 1986, the Chernobyl nuclear power plant in Ukraine experienced a catastrophic meltdown, leading to one of the worst nuclear disasters in history.",
        type: "Technology"
    },
    {
        title: "Founding of Microsoft",
        author: "Bill Gates",
        paragraph: "In 1975, Paul Allen and I founded Microsoft in a garage. Our company would go on to play a major role in the personal computer revolution.",
        type: "Technology"
    },
    {
        title: "Election of Nelson Mandela",
        author: "Lindiwe Mabaso",
        paragraph: "In 1994, Nelson Mandela was elected as the first black president of South Africa, symbolizing the end of racial segregation and the dawn of democracy.",
        type: "Politics"
    },
    {
        title: "Fall of the Soviet Union",
        author: "Ivan Petrov",
        paragraph: "In 1991, the Soviet Union dissolved, marking the end of the Cold War and the emergence of independent nations in Eastern Europe and Asia.",
        type: "Politics"
    },
    {
        title: "First Modern Olympics Held in Athens",
        author: "John Smith",
        paragraph: "In 1896, Athens hosted the first modern Olympic Games, marking the revival of the ancient tradition of athletic competitions.",
        type: "Sports"
    },
    {
        title: "Jackie Robinson Breaks Baseball's Color Barrier",
        author: "Alice Johnson",
        paragraph: "In 1947, Jackie Robinson made history by becoming the first African American to play in Major League Baseball, breaking racial barriers in sports.",
        type: "Sports"
    },
    {
        title: "The Miracle on Ice",
        author: "Emily Davis",
        paragraph: "In 1980, the United States ice hockey team achieved a stunning victory over the Soviet Union in the Winter Olympics, known as the 'Miracle on Ice.'",
        type: "Sports"
    },
    {
        title: "Babe Ruth's Legendary Career",
        author: "Michael Brown",
        paragraph: "Babe Ruth, one of baseball's greatest players, left an indelible mark on the sport with his record-breaking home runs and charismatic personality.",
        type: "Sports"
    },
    {
        title: "Jesse Owens' Triumph at the 1936 Olympics",
        author: "Eleanor Parker",
        paragraph: "Jesse Owens, an African American track and field athlete, won four gold medals at the 1936 Berlin Olympics, defying Adolf Hitler's ideology of Aryan supremacy.",
        type: "Sports"
    },
    {
        title: "First Wimbledon Tennis Championship",
        author: "Rajesh Patel",
        paragraph: "The inaugural Wimbledon Championship took place in 1877, marking the beginning of one of the most prestigious tennis tournaments in the world.",
        type: "Sports"
    },
    {
        title: "The Rivalry of Bobby Fischer and Boris Spassky",
        author: "Anastasia Ivanova",
        paragraph: "The 1972 World Chess Championship between Bobby Fischer and Boris Spassky captivated the world and elevated chess to a global phenomenon.",
        type: "Sports"
    },
    {
        title: "Jim Thorpe's Olympic Achievements",
        author: "Thomas Anderson",
        paragraph: "Jim Thorpe, a multi-sport athlete of Native American heritage, won two gold medals in the pentathlon and decathlon at the 1912 Olympics.",
        type: "Sports"
    },
    {
        title: "The Birth of the Tour de France",
        author: "Katherine Adams",
        paragraph: "In 1903, the first Tour de France bicycle race was held, becoming one of the most prestigious events in cycling.",
        type: "Sports"
    },
    {
        title: "The Boxing Legend Jack Dempsey",
        author: "Édouard Durand",
        paragraph: "Jack Dempsey, known as the 'Manassa Mauler,' was a legendary boxer who held the world heavyweight title and became a cultural icon in the 1920s.",
        type: "Sports"
    },
    {
        "title": "Argentine Soccer Team Wins FIFA World Cup",
        "author": "Sports Illustrated",
        "paragraph": "In 1986, Argentina's national soccer team, led by Diego Maradona, clinched the FIFA World Cup in a historic victory. Maradona's 'Hand of God' goal and the 'Goal of the Century' are still legendary moments in soccer history.",
        "type": "Sports"
    },
    {
        "title": "FIFA World Cup Hosted in Brazil",
        "author": "FIFA",
        "paragraph": "Brazil hosted the FIFA World Cup in 1950",
        "type": "Sports"
    },
    {
        "title": "Peruvian Archaeological Discoveries",
        "author": "National Geographic",
        "paragraph": "Peru is renowned for its rich archaeological heritage, including the discovery of the ancient city of Machu Picchu and the Nazca Lines, which continue to capture the world's imagination.",
        "type": "Archaeology"
    },
    {
        "title": "Bolivia's Salt Flats Tourism",
        "author": "Lonely Planet",
        "paragraph": "Bolivia's Salar de Uyuni, the world's largest salt flat, has become a popular tourist destination, attracting visitors from around the globe.",
        "type": "Travel"
    },
    {
        "title": "Paraguayan Chaco War",
        "author": "History Channel",
        "paragraph": "The Chaco War (1932-1935) between Paraguay and Bolivia over the Chaco region had far-reaching consequences for both countries and attracted international attention.",
        "type": "Politics"
    },
];